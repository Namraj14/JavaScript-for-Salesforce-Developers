# JavaScript Masterclass - Lesson 16

# Microtask Queue

## Learning Objectives

-   Understand the Microtask Queue
-   Compare it with the Callback (Macrotask) Queue
-   Learn Event Loop priority
-   Predict execution order

------------------------------------------------------------------------

## 1. What is the Microtask Queue?

The Microtask Queue stores high-priority asynchronous tasks such as:

-   Promise callbacks (`then`, `catch`, `finally`)
-   `queueMicrotask()`
-   `MutationObserver`

The Event Loop always processes **all microtasks before taking the next
macrotask**.

------------------------------------------------------------------------

## 2. Microtask vs Callback Queue

  Microtask Queue    Callback (Macrotask) Queue
  ------------------ ----------------------------
  Promise.then()     setTimeout()
  catch()            setInterval()
  finally()          DOM events
  queueMicrotask()   MessageChannel

Microtasks have higher priority.

------------------------------------------------------------------------

## 3. Execution Example

``` javascript
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve()
  .then(() => console.log("Promise"));

console.log("End");
```

Output:

``` text
Start
End
Promise
Timeout
```

### Why?

1.  Synchronous code runs first.
2.  Promise callback enters the Microtask Queue.
3.  Timer callback enters the Callback Queue.
4.  Event Loop empties the Microtask Queue.
5.  Then it executes the timer callback.

------------------------------------------------------------------------

## 4. Event Loop Priority

``` text
Call Stack
     │
     ▼
Empty?
     │
     ▼
Microtask Queue (ALL)
     │
     ▼
One Callback Queue Task
     │
     ▼
Repeat
```

------------------------------------------------------------------------

## 5. Real-World Analogy

Think of a customer service desk.

-   VIP customers = Microtasks.
-   Regular customers = Macrotasks.

Whenever the desk becomes free, every waiting VIP is served before the
next regular customer.

------------------------------------------------------------------------

## Interview Questions

-   Why does Promise.then() execute before setTimeout()?
-   What is the Microtask Queue?
-   Which has higher priority: Microtask Queue or Callback Queue?
-   Name four microtask sources.

------------------------------------------------------------------------

## Practice

1.  Explain the Microtask Queue.
2.  Compare Microtask and Callback Queues.
3.  Why is Promise.then() executed first?
4.  Predict execution order for mixed Promise and timer code.

------------------------------------------------------------------------

## Coding Exercise

Predict the output.

``` javascript
console.log(1);

setTimeout(() => console.log(2), 0);

Promise.resolve()
  .then(() => console.log(3))
  .then(() => console.log(4));

console.log(5);
```

------------------------------------------------------------------------

## Revision Notes

-   Promise callbacks are microtasks.
-   Timers are macrotasks.
-   Microtasks always run before the next macrotask.
-   The Event Loop empties the entire Microtask Queue before processing
    a callback queue task.

------------------------------------------------------------------------

## Next Lesson

async / await
