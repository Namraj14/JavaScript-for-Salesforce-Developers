# JavaScript Masterclass - Lesson 3

# Call Stack

## Learning Objectives

By the end of this lesson you will understand:

-   What is the Call Stack?
-   Why JavaScript needs a Call Stack
-   Push and Pop operations
-   Relationship between Execution Context and Call Stack
-   Function execution order
-   Stack Overflow

------------------------------------------------------------------------

# 1. What is a Call Stack?

A **Call Stack** is a stack data structure used by JavaScript to keep
track of which function is currently executing.
The Call Stack is a data structure that JavaScript uses to keep track of which function is currently executing and which function should execute next.

JavaScript is single-threaded, so there is only one Call Stack.

------------------------------------------------------------------------

# 2. Why Does JavaScript Need It?

Imagine several functions calling one another.

JavaScript must know:

-   Which function started first
-   Which function is currently executing
-   Where to return after a function finishes

The Call Stack manages this automatically.

------------------------------------------------------------------------

# 3. Stack Rules (LIFO)

A stack follows **Last In, First Out (LIFO)**.

Example using books:

``` text
Push Book A
Push Book B
Push Book C

Remove:
Book C
Book B
Book A
```

The last item added is the first removed.

------------------------------------------------------------------------

# 4. Push and Pop

When a function is called:

-   Its Execution Context is **pushed** onto the Call Stack.

When the function finishes:

-   Its Execution Context is **popped** from the Call Stack.

------------------------------------------------------------------------

# 5. Example

``` javascript
function one() {
    console.log("One");
}

console.log("Start");

one();

console.log("End");
```

Execution:

``` text
Call Stack

(empty)

↓

Global Execution Context

↓

Global
one()

↓

Global

↓

(empty)
```

Output:

``` text
Start
One
End
```

------------------------------------------------------------------------

# 6. Nested Function Calls

``` javascript
function three() {
    console.log("Three");
}

function two() {
    three();
    console.log("Two");
}

function one() {
    two();
    console.log("One");
}

one();
```

Call Stack movement:

``` text
Global
↓

one()

↓

two()

↓

three()

↓

two()

↓

one()

↓

Global

↓

Empty
```

Output:

``` text
Three
Two
One
```

------------------------------------------------------------------------

# 7. Execution Walkthrough

1.  Global Execution Context is pushed.
2.  `one()` is pushed.
3.  `two()` is pushed.
4.  `three()` is pushed.
5.  `three()` completes and is popped.
6.  `two()` resumes and completes.
7.  `one()` resumes and completes.
8.  Global Execution Context finishes.

------------------------------------------------------------------------

# 8. Stack Overflow

Recursive functions without a stopping condition keep pushing new
execution contexts.

``` javascript
function test() {
    test();
}

test();
```

Eventually the Call Stack runs out of memory.

Typical error:

``` text
RangeError: Maximum call stack size exceeded
```

Always provide a base condition in recursion.

------------------------------------------------------------------------

# 9. Relationship Between Execution Context and Call Stack

Execution Context = Workspace for executing code.

Call Stack = Structure that stores those workspaces.

Every function call creates a new Execution Context, and the Call Stack
manages them.

------------------------------------------------------------------------

# Real-World Analogy

Imagine a restaurant.

Orders arrive:

-   Order A
-   Order B
-   Order C

The chef finishes the most recent active task before returning to
previous ones.

The Call Stack behaves similarly by tracking active function calls.

------------------------------------------------------------------------

# Interview Questions

### What is the Call Stack?

A stack used by JavaScript to manage execution contexts and function
calls.

### Which data structure does the Call Stack use?

Stack (LIFO).

### What happens when a function is called?

A new Function Execution Context is pushed onto the Call Stack.

### What causes "Maximum call stack size exceeded"?

Infinite or very deep recursion.

------------------------------------------------------------------------

# Practice Questions

1.  What is the purpose of the Call Stack?
2.  Why is it called LIFO?
3.  What is pushed onto the Call Stack?
4.  What happens when a function returns?
5.  What causes a Stack Overflow?

------------------------------------------------------------------------

# Coding Exercise

``` javascript
function c() {
    console.log("C");
}

function b() {
    c();
    console.log("B");
}

function a() {
    b();
    console.log("A");
}

console.log("Start");
a();
console.log("End");
```

Answer:

-   Predict the output.
-   Draw the Call Stack.
-   Which execution context is pushed first?
-   Which execution context is popped last?

------------------------------------------------------------------------

# Quick Quiz

## 1. Which principle does the Call Stack follow?

A. FIFO

B. LIFO

C. Queue

D. Circular

------------------------------------------------------------------------

## 2. What is pushed onto the Call Stack?

A. Variables

B. Objects

C. Execution Contexts

D. Promises

------------------------------------------------------------------------

## 3. When is an Execution Context removed?

A. Before function starts

B. After function completes

C. During parsing

D. During compilation

------------------------------------------------------------------------

## 4. Infinite recursion results in:

A. Promise rejection

B. Event Loop error

C. Stack Overflow

D. Syntax Error

------------------------------------------------------------------------

# Revision Notes

-   JavaScript has one Call Stack.
-   The Call Stack uses LIFO.
-   Every function call pushes a new Execution Context.
-   Returning from a function pops its Execution Context.
-   Infinite recursion causes Stack Overflow.

------------------------------------------------------------------------

# Next Lesson

## Memory Creation Phase

Topics:

-   Two phases of Execution Context
-   Memory Creation Phase
-   Variable hoisting
-   Function hoisting
-   Initial values of var, let, and const
