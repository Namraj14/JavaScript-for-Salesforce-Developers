# JavaScript Masterclass - Lesson 4

# Memory Creation Phase

## Learning Objectives

-   Understand the two phases of an Execution Context
-   Learn what happens before JavaScript executes code
-   Understand how variables and functions are stored in memory
-   Learn the initial values of `var`, `let`, and `const`
-   Prepare for Hoisting (next lesson)

------------------------------------------------------------------------

# 1. Two Phases of an Execution Context

Every Execution Context has **two phases**.

``` text
Execution Context
      │
      ├── Memory Creation Phase
      └── Execution Phase
```

## Memory Creation Phase

JavaScript scans the entire code before executing any line.

During this phase it:

-   Allocates memory for variables.
-   Stores function declarations.
-   Creates the initial execution environment.

No code actually runs here.

------------------------------------------------------------------------

## Execution Phase

After memory is prepared, JavaScript executes the code line by line.

------------------------------------------------------------------------

# 2. Example

``` javascript
var a = 10;

function greet() {
    console.log("Hello");
}

console.log(a);
greet();
```

## Memory Creation Phase

``` text
a       → undefined
greet() → Entire function stored in memory
```

## Execution Phase

``` text
a = 10
console.log(a)
greet()
```

Output

``` text
10
Hello
```

------------------------------------------------------------------------

# 3. What Happens to Variables?

## var

``` javascript
var x = 20;
```

Memory Phase:

``` text
x → undefined
```

Execution Phase:

``` text
x → 20
```

------------------------------------------------------------------------

## let

``` javascript
let y = 30;
```

Memory is allocated, but the variable cannot be accessed until its
declaration executes.

This period is known as the **Temporal Dead Zone (TDZ)**.

------------------------------------------------------------------------

## const

``` javascript
const PI = 3.14;
```

Like `let`, it exists in the Temporal Dead Zone until initialized.

It must be initialized at declaration.

------------------------------------------------------------------------

# 4. Function Declarations

``` javascript
function greet() {
    console.log("Hello");
}
```

During the Memory Creation Phase, the **entire function** is stored.

This is why function declarations can be called before they appear in
the source code.

------------------------------------------------------------------------

# 5. Visual Flow

``` text
Write Code
     │
     ▼
Memory Creation Phase
     │
     ├── Variables Allocated
     ├── Functions Stored
     ▼
Execution Phase
     │
     ▼
Code Executes Line by Line
```

------------------------------------------------------------------------

# 6. Real-World Analogy

Imagine a classroom.

Before class starts:

-   Attendance sheet prepared
-   Seats assigned
-   Books placed

Only after preparation does teaching begin.

Memory Creation Phase is the preparation stage.

Execution Phase is the teaching stage.

------------------------------------------------------------------------

# Common Misconceptions

❌ JavaScript executes code immediately.

✅ JavaScript first creates memory, then executes.

------------------------------------------------------------------------

❌ Variables are created only when their line executes.

✅ Memory for variables is allocated before execution starts.

------------------------------------------------------------------------

# Interview Questions

### What are the two phases of an Execution Context?

Memory Creation Phase and Execution Phase.

### What value does `var` receive during the Memory Creation Phase?

`undefined`

### Are function declarations fully stored before execution?

Yes.

### Why can't `let` and `const` be accessed before declaration?

Because they are in the Temporal Dead Zone.

------------------------------------------------------------------------

# Practice Questions

1.  What happens during the Memory Creation Phase?
2.  What happens during the Execution Phase?
3.  What initial value does `var` receive?
4.  Why are function declarations available before their declaration
    line?
5.  What is the Temporal Dead Zone?

------------------------------------------------------------------------

# Coding Exercise

Predict the output.

``` javascript
console.log(a);

var a = 100;

function greet() {
    console.log("Hello");
}

greet();
```

Answer:

-   What is stored during the Memory Creation Phase?
-   What is printed during execution?

------------------------------------------------------------------------

# Quick Quiz

## 1. Which phase runs first?

A. Execution Phase

B. Memory Creation Phase

C. Event Loop

D. Call Stack

------------------------------------------------------------------------

## 2. What value is assigned to `var` during memory creation?

A. null

B. 0

C. undefined

D. false

------------------------------------------------------------------------

## 3. Function declarations are:

A. Ignored until called

B. Stored completely during Memory Creation Phase

C. Stored after execution

D. Stored only if exported

------------------------------------------------------------------------

## 4. `let` and `const` cannot be accessed before declaration because of:

A. Callback Queue

B. Event Loop

C. Temporal Dead Zone

D. Call Stack

------------------------------------------------------------------------

# Revision Notes

-   Every Execution Context has two phases.
-   Memory Creation Phase always runs before Execution Phase.
-   `var` is initialized with `undefined`.
-   Function declarations are stored completely before execution.
-   `let` and `const` remain in the Temporal Dead Zone until
    initialized.

------------------------------------------------------------------------

# Next Lesson

## Hoisting

Topics:

-   What is Hoisting?
-   Hoisting with `var`
-   Hoisting with `let`
-   Hoisting with `const`
-   Function declaration vs function expression
-   Interview questions and tricky examples
