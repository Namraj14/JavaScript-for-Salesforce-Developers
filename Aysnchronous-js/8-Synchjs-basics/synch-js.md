# JavaScript Masterclass - Lesson 8

# Synchronous JavaScript

## Learning Objectives

-   Understand synchronous execution
-   Learn why JavaScript is single-threaded
-   Understand blocking code
-   Learn why asynchronous programming became necessary

------------------------------------------------------------------------

# 1. What is Synchronous JavaScript?

Synchronous means JavaScript executes **one statement at a time**, in
order.

The next statement waits until the current one finishes.

``` javascript
console.log("A");
console.log("B");
console.log("C");
```

Output

``` text
A
B
C
```

------------------------------------------------------------------------

# 2. Single-Threaded Nature

JavaScript has **one Call Stack**.

Only one task can execute at any given moment.

``` text
Task 1
  ↓
Task 2
  ↓
Task 3
```

------------------------------------------------------------------------

# 3. Blocking Code

If one operation takes a long time, everything behind it must wait.

``` javascript
console.log("Start");

function heavyTask() {
    for(let i=0;i<1_000_000_000;i++) {}
}

heavyTask();

console.log("End");
```

Output

``` text
Start
(wait...)
End
```

The browser cannot execute the next line until `heavyTask()` completes.

------------------------------------------------------------------------

# 4. Why Is This a Problem?

Imagine a webpage.

``` text
User Clicks Button
        │
        ▼
Heavy Calculation Running
        │
        ▼
Button Click Waits
```

The page freezes because JavaScript is busy.

This poor user experience led to asynchronous programming.

------------------------------------------------------------------------

# 5. Real-World Example

Suppose downloading a file takes 10 seconds.

Synchronous approach:

``` text
Start Download
      │
Wait 10 Seconds
      │
Continue Program
```

Nothing else can execute while waiting.

------------------------------------------------------------------------

# 6. Why Not Just Use Multiple Threads?

JavaScript was designed to be simple and avoid many synchronization
problems.

Instead of multiple threads for normal code, browsers provide
asynchronous APIs (Timers, Fetch, DOM events, etc.).

We'll learn these next.

------------------------------------------------------------------------

# Interview Questions

### What does synchronous mean?

Code executes one statement at a time in sequence.

### Why is JavaScript single-threaded?

It uses one Call Stack to execute code, simplifying execution and
avoiding many concurrency issues.

### What is blocking code?

Code that prevents later statements from executing until it finishes.

### Why was asynchronous programming introduced?

To avoid blocking the main thread and keep applications responsive.

------------------------------------------------------------------------

# Practice Questions

1.  Define synchronous execution.
2.  What does single-threaded mean?
3.  Explain blocking code with an example.
4.  Why is blocking bad for UI applications?
5.  Why did JavaScript introduce asynchronous programming?

------------------------------------------------------------------------

# Coding Exercise

Predict the output.

``` javascript
console.log("Start");

function task() {
    console.log("Task Running");
}

task();

console.log("End");
```

Then answer:

-   Is this synchronous or asynchronous?
-   Why?

------------------------------------------------------------------------

# Quick Quiz

1.  JavaScript executes code using:

A. Multiple Call Stacks

B. One Call Stack

C. Multiple Threads for normal code

D. Multiple Event Loops

------------------------------------------------------------------------

2.  Blocking code:

A. Speeds up execution

B. Allows parallel execution

C. Delays following statements

D. Creates promises

------------------------------------------------------------------------

3.  Synchronous execution means:

A. Random order

B. One statement completes before the next begins

C. Multiple functions execute simultaneously

D. Browser APIs execute immediately

------------------------------------------------------------------------

# Revision Notes

-   JavaScript is synchronous by default.
-   It is single-threaded.
-   Long-running code blocks the Call Stack.
-   Blocking leads to poor responsiveness.
-   Asynchronous programming solves these issues.

------------------------------------------------------------------------

# Next Lesson

## Browser APIs

Topics:

-   What Browser APIs are
-   setTimeout
-   setInterval
-   DOM APIs
-   Fetch API
-   Why these APIs are outside the JavaScript engine
