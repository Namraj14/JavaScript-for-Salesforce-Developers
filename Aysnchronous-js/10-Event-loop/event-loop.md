# JavaScript Masterclass - Lesson 10

# Event Loop

## Learning Objectives

-   Understand the Event Loop
-   Learn the Callback Queue
-   Understand how Browser APIs interact with JavaScript
-   Learn why setTimeout(fn, 0) is not immediate
-   Understand callback execution order

------------------------------------------------------------------------

# 1. What is the Event Loop?

The Event Loop continuously checks:

1.  Is the Call Stack empty?
2.  Is there a callback waiting in the Callback Queue?

If both conditions are met, it moves the callback to the Call Stack.

------------------------------------------------------------------------

# 2. Components

``` text
JavaScript Code
      │
      ▼
 Call Stack
      ▲
      │
 Event Loop
      ▲
      │
Callback Queue
      ▲
      │
 Browser APIs
```

------------------------------------------------------------------------

# 3. Step-by-Step Example

``` javascript
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 2000);

console.log("End");
```

Execution:

1.  "Start" goes to the Call Stack → printed.
2.  `setTimeout()` is sent to the Browser API.
3.  JavaScript immediately continues.
4.  "End" is printed.
5.  After 2 seconds, the callback enters the Callback Queue.
6.  When the Call Stack becomes empty, the Event Loop moves the callback
    to the Call Stack.
7.  "Timeout" is printed.

Output:

``` text
Start
End
Timeout
```

------------------------------------------------------------------------

# 4. Why Doesn't setTimeout(fn, 0) Execute Immediately?

``` javascript
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

console.log("C");
```

Output:

``` text
A
C
B
```

Even with a delay of `0`, the callback must wait until:

-   The timer expires.
-   The Call Stack is empty.
-   The Event Loop transfers it.

------------------------------------------------------------------------

# 5. Real-World Analogy

Imagine a receptionist.

-   The receptionist (Event Loop) checks whether the manager (Call
    Stack) is free.
-   If the manager is busy, visitors (callbacks) wait in the waiting
    room (Callback Queue).
-   Once the manager is free, the receptionist sends in the next
    visitor.

------------------------------------------------------------------------

# Interview Questions

### What is the Event Loop?

A mechanism that continuously checks the Call Stack and Callback Queue,
moving callbacks when the Call Stack is empty.

### Does the Event Loop execute code?

No. It only coordinates callback execution.

### Why is setTimeout(fn, 0) delayed?

Because callbacks must wait until the Call Stack becomes empty.

### What is the Callback Queue?

A queue that stores completed asynchronous callbacks waiting to execute.

------------------------------------------------------------------------

# Practice Questions

1.  Explain the Event Loop.
2.  Explain the Callback Queue.
3.  Why is `setTimeout(fn, 0)` not immediate?
4.  What happens if the Call Stack is busy?
5.  Describe the complete execution flow of `setTimeout()`.

------------------------------------------------------------------------

# Coding Exercise

Predict the output:

``` javascript
console.log(1);

setTimeout(() => {
    console.log(2);
}, 0);

console.log(3);

setTimeout(() => {
    console.log(4);
}, 100);

console.log(5);
```

Explain the execution step by step.

------------------------------------------------------------------------

# Quick Quiz

1.  The Event Loop checks:

A. Parser

B. Compiler

C. Call Stack and Callback Queue

D. Memory Heap

2.  A callback executes when:

A. Timer finishes

B. Browser finishes

C. Call Stack is empty and Event Loop moves it

D. It is created

3.  `setTimeout(fn, 0)` means:

A. Execute instantly

B. Execute before synchronous code

C. Execute after synchronous code when possible

D. Skip the Event Loop

------------------------------------------------------------------------

# Revision Notes

-   The Event Loop coordinates asynchronous callbacks.
-   Browser APIs perform asynchronous work.
-   Completed callbacks wait in the Callback Queue.
-   The Event Loop moves callbacks only when the Call Stack is empty.
-   `setTimeout(fn, 0)` is never truly immediate.

------------------------------------------------------------------------

# Next Lesson

## Callback Functions

Topics:

-   What are callbacks?
-   Synchronous vs asynchronous callbacks
-   Real-world examples
-   Callback nesting
-   Foundation for Callback Hell
