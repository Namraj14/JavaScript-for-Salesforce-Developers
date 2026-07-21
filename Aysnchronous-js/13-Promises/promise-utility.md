# JavaScript Promise Utility Methods

## Overview

JavaScript provides several built-in Promise utility methods to
coordinate multiple asynchronous operations.

The four most important methods are:

1.  `Promise.all()`
2.  `Promise.race()`
3.  `Promise.allSettled()`
4.  `Promise.any()`

------------------------------------------------------------------------

# Why Do We Need These?

Imagine an e-commerce website.

The homepage needs to load:

-   Products
-   Reviews
-   Offers
-   Recommendations

Instead of loading them one after another, JavaScript can start all
requests together.

    Products --------\
    Reviews ----------\
    Offers ----------- > Wait
    Recommendations --/

    ↓

    Display Page

------------------------------------------------------------------------

# Promise.all()

## Purpose

Waits until **all Promises are fulfilled**.

If even one Promise rejects, the entire `Promise.all()` rejects
immediately.

## Syntax

``` javascript
Promise.all([
    promise1,
    promise2,
    promise3
])
.then((results) => {

})
.catch((error) => {

});
```

------------------------------------------------------------------------

## Example

``` javascript
const p1 = Promise.resolve("Apple");
const p2 = Promise.resolve("Banana");
const p3 = Promise.resolve("Orange");

Promise.all([p1, p2, p3])
    .then((result) => {
        console.log(result);
    });
```

Output

``` text
[
    "Apple",
    "Banana",
    "Orange"
]
```

------------------------------------------------------------------------

## Example with Delays

``` javascript
const p1 = new Promise((resolve) => {

    setTimeout(() => {
        resolve("Products");
    }, 3000);

});

const p2 = new Promise((resolve) => {

    setTimeout(() => {
        resolve("Reviews");
    }, 1000);

});

const p3 = new Promise((resolve) => {

    setTimeout(() => {
        resolve("Offers");
    }, 2000);

});

Promise.all([p1, p2, p3])
    .then((result) => {
        console.log(result);
    });
```

Output after 3 seconds

``` text
[
    "Products",
    "Reviews",
    "Offers"
]
```

------------------------------------------------------------------------

## If One Promise Fails

``` javascript
const p1 = Promise.resolve("A");
const p2 = Promise.reject("Server Error");
const p3 = Promise.resolve("C");

Promise.all([p1, p2, p3])
    .catch((error) => {
        console.log(error);
    });
```

Output

``` text
Server Error
```

**Rule:** If one Promise rejects, `Promise.all()` rejects immediately.

------------------------------------------------------------------------

# Real-world Example

``` javascript
function getProfile() {
    return Promise.resolve("Profile");
}

function getOrders() {
    return Promise.resolve("Orders");
}

function getNotifications() {
    return Promise.resolve("Notifications");
}

Promise.all([
    getProfile(),
    getOrders(),
    getNotifications()
])
.then((result) => {
    console.log(result);
});
```

Output

``` text
[
    "Profile",
    "Orders",
    "Notifications"
]
```

------------------------------------------------------------------------

# Promise.race()

## Purpose

Returns the result of the **first Promise that settles** (resolved or
rejected).

## Syntax

``` javascript
Promise.race([promise1, promise2]);
```

## Example

``` javascript
const p1 = new Promise((resolve) => {

    setTimeout(() => {
        resolve("Slow");
    }, 3000);

});

const p2 = new Promise((resolve) => {

    setTimeout(() => {
        resolve("Fast");
    }, 1000);

});

Promise.race([p1, p2])
    .then((result) => {
        console.log(result);
    });
```

Output

``` text
Fast
```

------------------------------------------------------------------------

# Promise.allSettled()

## Purpose

Waits for every Promise to finish.

It returns the status of each Promise whether it succeeded or failed.

## Example

``` javascript
const p1 = Promise.resolve("File1");
const p2 = Promise.reject("File2 Failed");
const p3 = Promise.resolve("File3");

Promise.allSettled([p1, p2, p3])
    .then((result) => {
        console.log(result);
    });
```

Output

``` javascript
[
    {
        status: "fulfilled",
        value: "File1"
    },
    {
        status: "rejected",
        reason: "File2 Failed"
    },
    {
        status: "fulfilled",
        value: "File3"
    }
]
```

Use cases:

-   Multiple uploads
-   Batch jobs
-   Bulk email sending

------------------------------------------------------------------------

# Promise.any()

## Purpose

Returns the first Promise that **successfully resolves**.

Rejected Promises are ignored until all Promises reject.

## Example

``` javascript
const p1 = Promise.reject("India Failed");
const p2 = Promise.resolve("USA");
const p3 = Promise.resolve("Europe");

Promise.any([p1, p2, p3])
    .then((result) => {
        console.log(result);
    });
```

Output

``` text
USA
```

If every Promise rejects, `Promise.any()` rejects with an
`AggregateError`.

------------------------------------------------------------------------

# Comparison Table

  ---------------------------------------------------------------------------------
  Method                 Waits For        Reject Behavior           Returns
  ---------------------- ---------------- ------------------------- ---------------
  Promise.all()          All Promises     Rejects immediately if    Array of values
                                          one fails                 

  Promise.race()         First settled    Can reject if first       First settled
                         Promise          settled Promise rejects   value/error

  Promise.allSettled()   All Promises     Never rejects because of  Array of result
                                          individual failures       objects

  Promise.any()          First fulfilled  Rejects only if every     First
                         Promise          Promise rejects           successful
                                                                    value
  ---------------------------------------------------------------------------------

------------------------------------------------------------------------

# When Should You Use Each?

## Promise.all()

-   Multiple API calls
-   Dashboard loading
-   Independent requests

------------------------------------------------------------------------

## Promise.race()

-   API timeout
-   Fastest server wins
-   CDN selection

------------------------------------------------------------------------

## Promise.allSettled()

-   Uploading many files
-   Batch processing
-   Email campaigns

------------------------------------------------------------------------

## Promise.any()

-   Backup servers
-   Mirror downloads
-   CDN fallback

------------------------------------------------------------------------

# Interview Tips

**Q:** Load User, Orders, and Notifications together?

**Answer:** `Promise.all()` because the requests are independent and can
run in parallel.

------------------------------------------------------------------------

# Common Mistakes

❌ Nesting Promises inside `.then()` instead of returning them.

❌ Forgetting `.catch()` for error handling.

❌ Using `Promise.all()` when partial failures are acceptable. In that
case, use `Promise.allSettled()`.

❌ Expecting `Promise.race()` to always resolve. It may reject if the
first settled Promise rejects.

------------------------------------------------------------------------

# Practice Questions

## Question 1

Create three Promises:

-   Resolve `"A"` after 1 second
-   Resolve `"B"` after 2 seconds
-   Resolve `"C"` after 3 seconds

Use `Promise.all()`.

------------------------------------------------------------------------

## Question 2

Create:

-   `"Slow"` after 5 seconds
-   `"Fast"` after 1 second

Use `Promise.race()`.

------------------------------------------------------------------------

## Question 3

Create:

-   Resolve `"File1"`
-   Reject `"File2 Failed"`
-   Resolve `"File3"`

Use `Promise.allSettled()`.

------------------------------------------------------------------------

## Question 4

Create:

-   Reject `"Server1"`
-   Reject `"Server2"`
-   Resolve `"Server3"`

Use `Promise.any()`.

------------------------------------------------------------------------

# Key Takeaways

-   `Promise.all()` waits for every Promise and fails fast.
-   `Promise.race()` returns the first settled Promise.
-   `Promise.allSettled()` returns every result regardless of success or
    failure.
-   `Promise.any()` returns the first successful result.
-   `Promise.all()` is the most commonly used Promise utility in
    frontend development.
