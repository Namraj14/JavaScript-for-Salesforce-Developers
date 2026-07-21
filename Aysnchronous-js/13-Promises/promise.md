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

## Key Takeaways

-   A Promise represents future completion or failure.
-   `resolve(value)` sends a value to `.then()`.
-   `reject(error)` sends an error to `.catch()`.
-   `finally()` always executes.
-   Wrap Promises inside functions when you need parameters.
-   Use Promises for asynchronous work, not simple synchronous logic.
-   `async/await` is built on top of Promises.
