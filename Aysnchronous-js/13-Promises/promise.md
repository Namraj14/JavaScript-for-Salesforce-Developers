# JavaScript Promises -- Complete Beginner Notes

## What is a Promise?

A **Promise** is an object that represents the eventual result of an
asynchronous operation.

A Promise has **3 states**:

-   **Pending** -- The work is still in progress.
-   **Fulfilled (Resolved)** -- The work completed successfully.
-   **Rejected** -- The work failed.

------------------------------------------------------------------------

## Why do we need Promises?

Without Promises, asynchronous code often becomes nested callbacks
("Callback Hell").

Promises provide a cleaner way to handle asynchronous operations.

------------------------------------------------------------------------

## Promise Syntax

``` javascript
const promise = new Promise((resolve, reject) => {

    // Do some work

    if (success) {
        resolve(result);
    } else {
        reject(error);
    }

});
```

### `resolve`

Marks the Promise as successful and passes a value to `.then()`.

``` javascript
resolve("Login Successful");
resolve(100);
resolve({ id: 1, name: "Namraj" });
```

### `reject`

Marks the Promise as failed and passes an error to `.catch()`.

``` javascript
reject("Wrong Password");
reject("Network Error");
reject(new Error("Server Error"));
```

------------------------------------------------------------------------

## Consuming a Promise

``` javascript
promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Always runs");
    });
```

### What each method does

-   `.then()` → Runs when the Promise is resolved.
-   `.catch()` → Runs when the Promise is rejected.
-   `.finally()` → Runs whether the Promise succeeds or fails.

------------------------------------------------------------------------

## Promise Flow

    Create Promise
          │
          ▼
       Pending
          │
          ▼
    Do Async Work
          │
     ┌────┴────┐
     │         │
     ▼         ▼
    resolve() reject()
     │         │
     ▼         ▼
    .then()  .catch()
         \    /
          \  /
       .finally()

------------------------------------------------------------------------

## Promise Inside a Function (Recommended)

``` javascript
function checkAge(age) {

    return new Promise((resolve, reject) => {

        if (age >= 18) {
            resolve("Eligible to vote");
        } else {
            reject("Not eligible");
        }

    });

}
```

Using it:

``` javascript
checkAge(20)
    .then((message) => {
        console.log(message);
    })
    .catch((error) => {
        console.log(error);
    });
```

------------------------------------------------------------------------

## Frontend Example (HTML + JavaScript)

### index.html

``` html
<!DOCTYPE html>
<html>
<head>
    <title>Age Checker</title>
</head>
<body>

<h2>Age Checker</h2>

<input type="number" id="age" placeholder="Enter your age">

<button onclick="check()">Check</button>

<h3 id="result"></h3>

<script src="script.js"></script>

</body>
</html>
```

### script.js

``` javascript
function checkAge(age) {

    return new Promise((resolve, reject) => {

        if (age >= 18) {
            resolve("✅ You are eligible to vote.");
        } else {
            reject("❌ You are not eligible.");
        }

    });

}

function check() {

    const age = Number(document.getElementById("age").value);

    checkAge(age)
        .then((message) => {
            document.getElementById("result").innerHTML = message;
        })
        .catch((error) => {
            document.getElementById("result").innerHTML = error;
        });

}
```

------------------------------------------------------------------------

## Does This Example Really Need a Promise?

No.

Checking an age is synchronous.

It was used only to learn Promise syntax.

Real Promises are used when an operation takes time.

Examples:

-   Fetching data from an API
-   Login request
-   Uploading files
-   Downloading data
-   Reading files
-   Database operations

------------------------------------------------------------------------

## Promise vs Callback

  Callback                   Promise
  -------------------------- -----------------------------
  Nested                     Flat
  Hard to read               Easy to read
  Callback Hell              Method chaining
  Difficult error handling   Centralized with `.catch()`

------------------------------------------------------------------------

## Promise vs Async/Await

Promise:

``` javascript
fetchData()
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
```

Async/Await:

``` javascript
async function load() {
    try {
        const data = await fetchData();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}
```

`await` works only with Promises.

------------------------------------------------------------------------

## Mental Template

``` javascript
function someFunction(parameter) {

    return new Promise((resolve, reject) => {

        // Perform asynchronous work

        if (success) {
            resolve(result);
        } else {
            reject(error);
        }

    });

}

someFunction(value)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Cleanup code");
    });
```

------------------------------------------------------------------------
## 1. What is Promise Chaining?

Each call to `.then()` returns **a new Promise**.

This allows multiple asynchronous operations to be written in sequence.

``` javascript
login()
  .then(fetchProfile)
  .then(fetchOrders)
  .then(showOrders)
  .catch(console.error);
```

------------------------------------------------------------------------

## 2. Returning a Value

``` javascript
Promise.resolve(10)
  .then(value => value * 2)
  .then(value => console.log(value));
```

Output

``` text
20
```

Returning a normal value automatically resolves the next Promise.

------------------------------------------------------------------------

## 3. Returning Another Promise

``` javascript
function getUser() {
  return Promise.resolve({name: "Namraj"});
}

getUser()
  .then(user => Promise.resolve(user.name))
  .then(name => console.log(name));
```

Output

``` text
Namraj
```

The next `then()` waits until the returned Promise finishes.

------------------------------------------------------------------------

## 4. Error Propagation

``` javascript
Promise.resolve()
  .then(() => {
    throw new Error("Something failed");
  })
  .catch(err => console.log(err.message));
```

Output

``` text
Something failed
```

Errors automatically skip remaining `then()` handlers until a matching
`catch()`.

------------------------------------------------------------------------

## 5. Best Practices

-   Always return values from `then()` if the next step needs them.
-   Return Promises instead of creating nested `then()` blocks.
-   Keep one `catch()` near the end of the chain.
-   Use `finally()` for cleanup only.

------------------------------------------------------------------------

## Real-World Analogy

Think of an assembly line.

Each worker finishes one step and passes the product to the next worker.

If one worker finds a defect, the product is sent to the quality-control
desk (`catch()`).

------------------------------------------------------------------------

## Interview Questions

### Why does each `then()` return a new Promise?

To allow asynchronous operations to be chained.

### What happens if you throw an error inside `then()`?

The Promise becomes rejected and control moves to the nearest `catch()`.

### What happens when a Promise is returned from `then()`?

The next `then()` waits for it to settle.

------------------------------------------------------------------------

## Practice Questions

1.  Explain Promise chaining.
2.  Why should you return values from `then()`?
3.  Explain error propagation.
4.  Why is one `catch()` usually enough?

------------------------------------------------------------------------

## Coding Exercise

Predict the output.

``` javascript
Promise.resolve(5)
  .then(x => x + 5)
  .then(x => {
    console.log(x);
    return x * 2;
  })
  .then(console.log);
```

------------------------------------------------------------------------

## Quick Quiz

1.  `then()` returns:

A. undefined

B. New Promise

C. Boolean

D. Object

2.  Throwing inside `then()`:

A. Stops JavaScript

B. Rejects the Promise

C. Creates another callback

D. Does nothing

3.  Which is recommended?

A. Nested then()

B. Multiple catch() after every then()

C. Return Promises from then()

D. Ignore errors

------------------------------------------------------------------------

## Revision Notes

-   Every `then()` returns a new Promise.
-   Returning values passes them to the next `then()`.
-   Returning a Promise pauses the chain until it settles.
-   Errors automatically propagate to `catch()`.
-   Promise chains are flatter and easier to maintain.

------------------------------------------------------------------------

## Key Takeaways

-   A Promise represents future completion or failure.
-   `resolve(value)` sends a value to `.then()`.
-   `reject(error)` sends an error to `.catch()`.
-   `finally()` always executes.
-   Wrap Promises inside functions when you need parameters.
-   Use Promises for asynchronous work, not simple synchronous logic.
-   `async/await` is built on top of Promises.
