# JavaScript Masterclass - Lesson 5

# Hoisting

## Learning Objectives

-   Understand what hoisting really is
-   Learn hoisting with `var`, `let`, and `const`
-   Understand the Temporal Dead Zone (TDZ)
-   Compare function declarations and function expressions
-   Solve common interview questions

------------------------------------------------------------------------

# 1. What is Hoisting?

**Hoisting** is JavaScript's behavior of processing declarations before
executing code.

Important:

-   JavaScript **does not move your code**.
-   During the **Memory Creation Phase**, declarations are processed
    before execution begins.

------------------------------------------------------------------------

# 2. Hoisting with `var`

``` javascript
console.log(a);

var a = 10;

console.log(a);
```

Memory Phase

``` text
a → undefined
```

Execution

``` text
console.log(a) → undefined
a = 10
console.log(a) → 10
```

Output

``` text
undefined
10
```

------------------------------------------------------------------------

# 3. Hoisting with `let`

``` javascript
console.log(age);

let age = 25;
```

Output

``` text
ReferenceError:
Cannot access 'age' before initialization
```

Why?

`age` exists in memory but is inside the **Temporal Dead Zone (TDZ)**
until its declaration executes.

------------------------------------------------------------------------

# 4. Hoisting with `const`

``` javascript
console.log(PI);

const PI = 3.14;
```

Output

``` text
ReferenceError
```

Like `let`, `const` is hoisted but inaccessible inside the TDZ.

------------------------------------------------------------------------

# 5. Function Declaration

``` javascript
greet();

function greet() {
    console.log("Hello");
}
```

Output

``` text
Hello
```

Entire function declarations are stored during the Memory Creation
Phase.

------------------------------------------------------------------------

# 6. Function Expression

``` javascript
greet();

var greet = function () {
    console.log("Hello");
};
```

Memory Phase

``` text
greet → undefined
```

Execution

``` text
greet();
```

Output

``` text
TypeError:
greet is not a function
```

Reason:

At that moment `greet` is `undefined`.

------------------------------------------------------------------------

# 7. Visual Comparison

  Type                   Hoisted         Usable Before Declaration
  ---------------------- --------------- ---------------------------
  var                    Yes             Yes (undefined)
  let                    Yes             No (TDZ)
  const                  Yes             No (TDZ)
  Function Declaration   Yes             Yes
  Function Expression    Variable only   No

------------------------------------------------------------------------

# 8. Common Misconceptions

❌ Hoisting moves code.

✅ Hoisting is the result of the Memory Creation Phase.

------------------------------------------------------------------------

❌ let and const are not hoisted.

✅ They are hoisted, but remain inside the TDZ until initialized.

------------------------------------------------------------------------

# Interview Questions

### What is Hoisting?

The behavior where JavaScript processes declarations before executing
code.

### Why does `var` print undefined?

Because memory is allocated with the initial value `undefined`.

### Why does `let` throw a ReferenceError?

Because it is inside the Temporal Dead Zone.

### Why can function declarations be called before they appear?

Because the complete function is stored during the Memory Creation
Phase.

------------------------------------------------------------------------

# Practice Questions

1.  Explain hoisting in your own words.
2.  Why does `var` return `undefined`?
3.  What is the TDZ?
4.  Why are function declarations hoisted differently from function
    expressions?
5.  Compare `var`, `let`, and `const`.

------------------------------------------------------------------------

# Coding Exercise

Predict the output.

``` javascript
console.log(x);

var x = 5;

test();

function test() {
    console.log("Function Declaration");
}

console.log(y);

let y = 20;
```

Explain each output step.

------------------------------------------------------------------------

# Quick Quiz

1.  Which keyword is initialized with `undefined`?

A. let

B. const

C. var

D. class

------------------------------------------------------------------------

2.  Accessing `let` before declaration causes:

A. undefined

B. SyntaxError

C. ReferenceError

D. TypeError

------------------------------------------------------------------------

3.  Which can be called before its declaration?

A. Function Expression

B. Arrow Function

C. Function Declaration

D. Anonymous Function

------------------------------------------------------------------------

# Revision Notes

-   Hoisting happens because of the Memory Creation Phase.
-   `var` is initialized with `undefined`.
-   `let` and `const` are hoisted but stay in the TDZ.
-   Function declarations are fully hoisted.
-   Function expressions are not callable before assignment.

------------------------------------------------------------------------

# Next Lesson

## Scope and Lexical Environment

Topics:

-   Global Scope
-   Function Scope
-   Block Scope
-   Lexical Scope
-   Scope Chain
-   Shadowing


# 📘 JavaScript Hoisting

> Hoisting is one of the most important concepts in JavaScript and is frequently asked in interviews. Understanding hoisting helps you understand Execution Context, the Call Stack, and the JavaScript engine.

---

# 📖 Table of Contents

1. What is Hoisting?
2. How JavaScript Executes Code
3. Memory Creation Phase
4. Execution Phase
5. Hoisting with `var`
6. Hoisting with Functions
7. Function Declaration vs Function Expression
8. Hoisting with `let`
9. Hoisting with `const`
10. Temporal Dead Zone (TDZ)
11. Summary Table
12. Interview Questions
13. Key Takeaways

---

# 1️⃣ What is Hoisting?

## Definition

Hoisting is JavaScript's behavior of **moving declarations to the top of their scope before execution begins.**

> **Important:** JavaScript **does not physically move your code**. Instead, it allocates memory for variables and functions before executing the code.

Example:

```javascript
console.log(a);

var a = 10;
```

JavaScript behaves **as if** it were:

```javascript
var a;

console.log(a);

a = 10;
```

---

# 2️⃣ How JavaScript Executes Code

Whenever JavaScript runs a file, it does so in **two phases**.

```
JavaScript Engine

        │
        ▼
──────────────────────────
1. Memory Creation Phase
──────────────────────────
        │
        ▼
──────────────────────────
2. Execution Phase
──────────────────────────
```

---

# 3️⃣ Memory Creation Phase

During this phase JavaScript:

- Scans the entire code
- Creates memory for variables
- Stores function declarations
- Does **NOT** execute any code

Example:

```javascript
var a = 10;
```

Memory becomes:

```
a → undefined
```

Notice:

The value **10 is NOT assigned yet.**

Only memory is allocated.

---

# 4️⃣ Execution Phase

Now JavaScript executes the code **line by line.**

Example:

```javascript
var a = 10;

console.log(a);
```

Execution:

```
Line 1

a = 10

↓

Memory

a → 10

↓

console.log(a)

Output:

10
```

---

# 5️⃣ Hoisting with var

Example

```javascript
console.log(a);

var a = 10;
```

## Memory Phase

```
a → undefined
```

## Execution

```
console.log(a)

↓

undefined

↓

a = 10
```

### Output

```text
undefined
```

Why?

Because only the declaration was hoisted.

The assignment happens later.

---

# 6️⃣ Hoisting with Functions

Example

```javascript
hello();

function hello() {
    console.log("Hello");
}
```

Output

```text
Hello
```

Why?

During the Memory Creation Phase JavaScript stores the **entire function**.

Memory

```
hello

↓

function hello() {
   console.log("Hello");
}
```

When execution reaches

```javascript
hello();
```

the function already exists.

---

# 7️⃣ Function Declaration vs Function Expression

## Function Declaration

```javascript
function greet() {
    console.log("Hello");
}
```

Memory

```
greet

↓

Entire Function
```

Can be called before declaration.

Example

```javascript
greet();

function greet() {
    console.log("Hello");
}
```

Output

```text
Hello
```

---

## Function Expression

```javascript
var greet = function () {
    console.log("Hello");
};
```

Memory

```
greet

↓

undefined
```

Calling it before assignment:

```javascript
greet();

var greet = function () {
    console.log("Hello");
};
```

Output

```text
TypeError: greet is not a function
```

Reason

During Memory Phase

```
greet → undefined
```

Execution tries

```javascript
undefined();
```

which is impossible.

---

# 8️⃣ Hoisting with let

Example

```javascript
console.log(a);

let a = 10;
```

Output

```text
ReferenceError
```

Unlike `var`, JavaScript does **not initialize** the variable immediately.

Memory

```
a

↓

Uninitialized
```

The variable exists but cannot be accessed.

---

# 9️⃣ Hoisting with const

Example

```javascript
console.log(pi);

const pi = 3.14;
```

Output

```text
ReferenceError
```

`const` behaves like `let`.

It is hoisted but remains inaccessible until its declaration executes.

---

# 🔟 Temporal Dead Zone (TDZ)

The **Temporal Dead Zone (TDZ)** is the time between

- memory creation
- variable declaration

During this period the variable exists but cannot be accessed.

Example

```javascript
console.log(age);

let age = 25;
```

Timeline

```
Memory Created

↓

age exists

↓

TDZ

↓

let age = 25

↓

Now it can be used
```

Trying to access it during TDZ results in

```
ReferenceError
```

---

# 1️⃣1️⃣ Summary Table

| Type | Memory Phase | Before Declaration | Output |
|------|--------------|--------------------|--------|
| `var` | `undefined` | Allowed | `undefined` |
| `let` | Uninitialized | Not Allowed | `ReferenceError` |
| `const` | Uninitialized | Not Allowed | `ReferenceError` |
| Function Declaration | Entire Function | Allowed | Works |
| Function Expression | Variable = undefined | Not Callable | `TypeError` |

---

# 1️⃣2️⃣ Interview Questions

## Q1

```javascript
console.log(a);

var a = 5;
```

Output

```text
undefined
```

---

## Q2

```javascript
console.log(a);

let a = 5;
```

Output

```text
ReferenceError
```

---

## Q3

```javascript
hello();

function hello() {
    console.log("Hi");
}
```

Output

```text
Hi
```

---

## Q4

```javascript
hello();

var hello = function () {
    console.log("Hi");
};
```

Output

```text
TypeError
```

---

## Q5

```javascript
var a = 10;

function test() {
    console.log(a);

    var a = 20;
}

test();
```

### Memory Phase inside test()

```
a → undefined
```

Execution

```
console.log(a)

↓

undefined

↓

a = 20
```

Output

```text
undefined
```

---

# 1️⃣3️⃣ Key Takeaways

✅ JavaScript executes code in **two phases**:
- Memory Creation Phase
- Execution Phase

✅ `var` is hoisted and initialized with `undefined`.

✅ `let` and `const` are hoisted but remain in the **Temporal Dead Zone (TDZ)** until their declaration.

✅ Function declarations are fully hoisted.

✅ Function expressions behave like variables.

✅ Hoisting moves **declarations**, not **assignments**.

---

# 🧠 Quick Revision

```
Hoisting

│
├── var
│     ├── Hoisted
│     └── Initialized as undefined
│
├── let
│     ├── Hoisted
│     └── TDZ
│
├── const
│     ├── Hoisted
│     └── TDZ
│
├── Function Declaration
│     └── Entire function hoisted
│
└── Function Expression
      └── Variable hoisted (undefined)
```

---

# 🎯 What's Next?

The next concept in the JavaScript roadmap is:

> **Execution Context**

Understanding Execution Context will make the concepts of **Hoisting** and the **Call Stack** much clearer, because you'll see exactly how the JavaScript engine creates memory, executes code, and manages function calls.
