# JavaScript Masterclass - Lesson 2

# Execution Context

## Learning Objectives

By the end of this lesson you will understand:

-   What is an Execution Context?
-   Why JavaScript creates it
-   Global Execution Context (GEC)
-   Function Execution Context (FEC)
-   How JavaScript executes code internally

------------------------------------------------------------------------

# 1. What is an Execution Context?

An **Execution Context** is the environment where JavaScript code is
evaluated and executed.

It stores: - Variables - Functions - `this` - References to outer scopes

Think of it as JavaScript's workspace.

------------------------------------------------------------------------

# 2. Why is it Needed?

Before executing code, JavaScript must know:

-   Where variables are stored
-   Where functions are stored
-   What `this` refers to
-   Which variables are accessible

Execution Context provides all of this.

Example:

``` javascript
let name = "John";

function greet() {
    console.log("Hello");
}

greet();
```

------------------------------------------------------------------------

# 3. Types of Execution Context

## Global Execution Context (GEC)

Created once when the JavaScript program starts.

``` javascript
let age = 25;
console.log(age);
```

Only one Global Execution Context exists for a program.

------------------------------------------------------------------------

## Function Execution Context (FEC)

Created every time a function is called.

``` javascript
function greet() {
    console.log("Hello");
}

greet();
```

Lifecycle:

1.  Created
2.  Executes
3.  Destroyed after completion

------------------------------------------------------------------------

# 4. Visual Representation

``` text
Program Starts
      │
      ▼
Global Execution Context
      │
      ▼
Function Call
      │
      ▼
Function Execution Context
      │
      ▼
Function Ends
      │
      ▼
Back to Global Context
```

------------------------------------------------------------------------

# 5. Example

``` javascript
console.log("Start");

function greet() {
    console.log("Hello");
}

greet();

console.log("End");
```

Output

``` text
Start
Hello
End
```

Execution Flow

1.  Global Execution Context created.
2.  "Start" printed.
3.  Function stored.
4.  Function called.
5.  Function Execution Context created.
6.  "Hello" printed.
7.  Function Execution Context destroyed.
8.  "End" printed.

------------------------------------------------------------------------

# 6. Multiple Function Calls

``` javascript
function first() {
    console.log("First");
}

function second() {
    console.log("Second");
}

first();
second();
```

``` text
Global Context
      │
      ▼
first()
      │
Destroy
      │
      ▼
second()
      │
Destroy
      │
      ▼
Back to Global
```

Each function call creates its own Function Execution Context.

------------------------------------------------------------------------

# 7. Real-World Analogy

Global Execution Context = CEO's office.

Function Execution Context = Temporary desk assigned to an employee for
one task.

When the task finishes, the desk is cleared.

------------------------------------------------------------------------

# 8. Common Misconceptions

❌ JavaScript creates only one Execution Context.

✅ It creates one Global Execution Context and one Function Execution
Context for every function call.

------------------------------------------------------------------------

❌ Functions execute immediately after declaration.

✅ Functions execute only when invoked.

------------------------------------------------------------------------

# Interview Questions

## What is an Execution Context?

The environment where JavaScript code is evaluated and executed.

## How many Global Execution Contexts exist?

One.

## When is a Function Execution Context created?

Whenever a function is called.

## Is a Function Execution Context permanent?

No. It is removed after the function finishes.

------------------------------------------------------------------------

# Practice Questions

1.  What is an Execution Context?
2.  Why does JavaScript create it?
3.  Difference between GEC and FEC?
4.  How many GECs exist?
5.  What happens after a function returns?

------------------------------------------------------------------------

# Coding Exercise

``` javascript
function one() {
    console.log("One");
}

function two() {
    console.log("Two");
}

console.log("Start");

one();

two();

console.log("Finish");
```

Answer:

-   Predict the output.
-   How many Execution Contexts are created?
-   Which is created first?
-   Which are destroyed?

------------------------------------------------------------------------

# Quick Quiz

## 1. Which Execution Context is created first?

A. Function Execution Context

B. Global Execution Context

C. Event Loop

D. Call Stack

------------------------------------------------------------------------

## 2. Every function call creates:

A. Promise

B. Callback

C. Function Execution Context

D. Global Execution Context

------------------------------------------------------------------------

## 3. How many Global Execution Contexts exist?

A. Unlimited

B. One

C. Two

D. Depends on browser

------------------------------------------------------------------------

## 4. When a function completes, its Function Execution Context is:

A. Stored forever

B. Converted to Promise

C. Removed

D. Sent to Event Loop

------------------------------------------------------------------------

# Revision Notes

-   JavaScript starts by creating one Global Execution Context.
-   Every function call creates a new Function Execution Context.
-   Function Execution Contexts are temporary.
-   The Global Execution Context remains until the program ends.

------------------------------------------------------------------------

# Next Lesson

## Call Stack

Topics:

-   What is the Call Stack?
-   Stack data structure
-   Push and Pop operations
-   Relationship between Execution Context and Call Stack
-   Function execution order
-   Stack Overflow
