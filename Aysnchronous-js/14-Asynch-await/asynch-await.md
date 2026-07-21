# JavaScript Masterclass - Lesson 17

# Async / Await

## Learning Objectives

-   Understand async functions
-   Learn how await works
-   Compare Promises and async/await
-   Handle errors with try...catch
-   Use async/await in real-world scenarios

------------------------------------------------------------------------

## 1. What is async?

The `async` keyword makes a function always return a Promise.

``` javascript
async function greet() {
  return "Hello";
}

greet().then(console.log);
```

Output:

``` text
Hello
```

Even though a string is returned, JavaScript wraps it in a resolved
Promise.

------------------------------------------------------------------------

## 2. What is await?

`await` pauses execution **inside the async function** until a Promise
settles.

``` javascript
function delay() {
  return new Promise(resolve => {
    setTimeout(() => resolve("Done"), 2000);
  });
}

async function run() {
  console.log("Start");
  const result = await delay();
  console.log(result);
  console.log("End");
}

run();
```

Output:

``` text
Start
Done
End
```

The thread is **not blocked**. Only the async function is paused.

------------------------------------------------------------------------

## 3. How await Works

``` text
async function
      │
      ▼
Calls Promise
      │
      ▼
Function pauses
      │
      ▼
Promise resolves
      │
      ▼
Continuation added to Microtask Queue
      │
      ▼
Execution resumes
```

------------------------------------------------------------------------

## 4. Error Handling

``` javascript
async function loadData() {
  try {
    const data = await Promise.resolve("Success");
    console.log(data);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("Finished");
  }
}

loadData();
```

------------------------------------------------------------------------

## 5. Promise Chain vs async/await

Promise chain:

``` javascript
login()
  .then(fetchProfile)
  .then(fetchOrders)
  .catch(console.error);
```

async/await:

``` javascript
async function load() {
  try {
    const user = await login();
    const profile = await fetchProfile(user);
    const orders = await fetchOrders(profile);
    console.log(orders);
  } catch (err) {
    console.error(err);
  }
}
```

------------------------------------------------------------------------

## Real-World Analogy

Ordering coffee:

-   Place the order.
-   Sit and wait.
-   Others can continue ordering.
-   When your coffee is ready, you continue.

`await` pauses only **your workflow**, not everyone else's.

------------------------------------------------------------------------

## Interview Questions

-   Does async always return a Promise?
-   Does await block JavaScript?
-   Where can await be used?
-   Why use try...catch with async/await?

------------------------------------------------------------------------

## Practice

1.  Explain async.
2.  Explain await.
3.  Compare Promise chaining and async/await.
4.  Why doesn't await block the thread?

------------------------------------------------------------------------

## Coding Exercise

Predict the output.

``` javascript
async function demo() {
  console.log("A");
  await Promise.resolve();
  console.log("B");
}

demo();

console.log("C");
```

------------------------------------------------------------------------

## Revision Notes

-   async functions always return Promises.
-   await works only inside async functions.
-   await pauses only the current async function.
-   Promise resolution resumes through the Microtask Queue.
-   Use try...catch for error handling.

------------------------------------------------------------------------

## Next Lesson

Fetch API with async/await
