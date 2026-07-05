# 📁 08 - Scope (Part 2 - Advanced Scope)

# Introduction

This chapter covers advanced scope concepts that are frequently asked in JavaScript interviews and are important for Lightning Web Components (LWC).

Topics include:

- Closures and Scope
- Temporal Dead Zone (TDZ)
- Hoisting and Scope
- Global Object
- Execution Context vs Scope
- Memory Allocation
- Garbage Collection
- Module Scope
- ES6 Modules
- eval() Scope
- Strict Mode
- Performance

---

# Closures and Scope

A closure is created when an inner function remembers variables from its outer scope even after the outer function has finished executing.

Example

```javascript
function outer() {

    let count = 0;

    return function () {

        count++;

        return count;

    };

}

const counter = outer();

console.log(counter());

console.log(counter());

console.log(counter());
```

Output

```
1
2
3
```

The variable `count` is preserved because of lexical scope.

---

# Why Closures Work

JavaScript does not destroy variables that are still referenced by an inner function.

```
Outer Function

↓

Creates Variable

↓

Returns Inner Function

↓

Inner Function Remembers Variable
```

---

# Temporal Dead Zone (TDZ)

The TDZ is the period between entering a scope and the point where a `let` or `const` variable is initialized.

Example

```javascript
console.log(name);

let name = "John";
```

Output

```
ReferenceError
```

The variable exists but cannot be accessed before initialization.

---

# var vs let (TDZ)

Using `var`

```javascript
console.log(city);

var city = "Mumbai";
```

Output

```
undefined
```

---

Using `let`

```javascript
console.log(city);

let city = "Mumbai";
```

Output

```
ReferenceError
```

---

# Hoisting and Scope

## Variable Hoisting

`var`

```javascript
console.log(a);

var a = 10;
```

Output

```
undefined
```

Equivalent to

```javascript
var a;

console.log(a);

a = 10;
```

---

`let`

```javascript
console.log(a);

let a = 10;
```

Output

```
ReferenceError
```

---

`const`

```javascript
console.log(a);

const a = 10;
```

Output

```
ReferenceError
```

---

# Function Hoisting

Function declarations are fully hoisted.

```javascript
greet();

function greet() {

    console.log("Hello");

}
```

Output

```
Hello
```

---

Function expressions are not.

```javascript
greet();

const greet = function () {

};
```

Output

```
ReferenceError
```

---

# Global Object

In browsers

```javascript
console.log(window);
```

The global object is `window`.

Global variables declared with `var` become properties of `window`.

Example

```javascript
var company = "Salesforce";

console.log(window.company);
```

Output

```
Salesforce
```

---

`let` and `const` do **not** become properties of `window`.

```javascript
let city = "Mumbai";

console.log(window.city);
```

Output

```
undefined
```

---

# Execution Context vs Scope

## Scope

Determines where variables are accessible.

---

## Execution Context

Represents the environment in which JavaScript executes code.

Every execution context has:

- Variable Environment
- Scope Chain
- `this` value

---

Example

```javascript
function demo() {

    let x = 10;

}

demo();
```

Calling `demo()` creates a new execution context.

---

# Memory Allocation

During execution, JavaScript allocates memory for:

- Variables
- Functions
- Objects

Example

```javascript
let number = 100;

function display() {

}
```

Memory is allocated before execution begins.

---

# Garbage Collection

Unused memory is automatically released.

Example

```javascript
function demo() {

    let value = 100;

}
```

After the function finishes and no references remain, `value` becomes eligible for garbage collection.

---

# Module Scope

Every ES6 module has its own scope.

Variables declared in one module are not global.

Example

```javascript
// math.js

const PI = 3.14;

export { PI };
```

---

```javascript
// app.js

import { PI } from "./math.js";

console.log(PI);
```

---

# Benefits of Module Scope

- Prevents global pollution.
- Better encapsulation.
- Easier maintenance.
- Better organization.

---

# eval() Scope

`eval()` executes a string as JavaScript code.

Example

```javascript
let x = 10;

eval("console.log(x)");
```

Output

```
10
```

---

Avoid using `eval()` because it:

- Is slow.
- Creates security risks.
- Makes code difficult to optimize and maintain.

---

# Strict Mode

Enable strict mode

```javascript
"use strict";
```

Benefits

- Prevents accidental global variables.
- Makes debugging easier.
- Throws more useful errors.
- Improves code quality.

---

Example

Without strict mode

```javascript
name = "John";

console.log(name);
```

Creates an accidental global variable.

---

With strict mode

```javascript
"use strict";

name = "John";
```

Output

```
ReferenceError
```

---

# Scope in ES6 Modules

Variables inside modules cannot be accessed directly.

```javascript
// user.js

const user = "John";
```

---

```javascript
// app.js

console.log(user);
```

Output

```
ReferenceError
```

Unless explicitly exported.

---

# Performance Tips

Avoid unnecessary global variables.

---

Keep variables inside the smallest possible scope.

---

Prefer `const` whenever possible.

---

Avoid unnecessary closures that retain large objects.

---

Avoid `eval()`.

---

# Best Practices

✅ Prefer `let` and `const`.

✅ Use modules instead of globals.

✅ Enable strict mode.

✅ Minimize variable lifetime.

✅ Avoid unnecessary closures.

---

# Common Mistakes

Accessing variables inside the TDZ.

Using `var` expecting block scope.

Creating accidental globals.

Forgetting to export variables from modules.

Using `eval()`.

---

# Scope in Lightning Web Components

Module Variable

```javascript
const API_VERSION = "61.0";
```

Available only in the module.

---

Component Variable

```javascript
searchKey = "";
```

Accessible throughout the component.

---

Method Scope

```javascript
handleSave() {

    const total = 100;

}
```

---

Block Scope

```javascript
if (this.isAdmin) {

    let role = "Administrator";

}
```

---

# Interview Questions (With Answers)

## 1. What is the Temporal Dead Zone (TDZ)?

**Answer**

The TDZ is the period between entering a scope and initializing a `let` or `const` variable. Accessing the variable during this period throws a `ReferenceError`.

---

## 2. Why does `var` behave differently from `let`?

**Answer**

`var` is hoisted and initialized with `undefined`.

`let` is hoisted but remains uninitialized until execution reaches its declaration, creating the TDZ.

---

## 3. What is the difference between execution context and scope?

**Answer**

Scope determines where variables are accessible.

Execution context is the environment created when code executes, containing variables, the scope chain, and the value of `this`.

---

## 4. What is garbage collection?

**Answer**

Garbage collection is JavaScript's automatic process of reclaiming memory occupied by objects and variables that are no longer reachable.

---

## 5. Why are ES6 modules useful?

**Answer**

They provide module scope, prevent global variable pollution, improve encapsulation, and make applications easier to maintain.

---

## 6. Why should `eval()` be avoided?

**Answer**

It introduces security risks, slows performance, and prevents JavaScript engines from performing many optimizations.

---

## 7. What is strict mode?

**Answer**

Strict mode enables a stricter parsing and error-handling mode in JavaScript, helping catch common mistakes and preventing unsafe behavior.

---

## 8. Do `let` and `const` become properties of `window`?

**Answer**

No.

Only variables declared with `var` in the global browser scope become properties of the `window` object.

---

# Output-Based Questions (With Answers)

## Question 1

```javascript
console.log(a);

var a = 10;
```

**Answer**

```
undefined
```

---

## Question 2

```javascript
console.log(a);

let a = 10;
```

**Answer**

```
ReferenceError
```

---

## Question 3

```javascript
"use strict";

name = "John";
```

**Answer**

```
ReferenceError
```

---

## Question 4

```javascript
var city = "Mumbai";

console.log(window.city);
```

**Answer**

```
Mumbai
```

(Browser environment)

---

## Question 5

```javascript
let city = "Mumbai";

console.log(window.city);
```

**Answer**

```
undefined
```

(Browser environment)

---

## Question 6

```javascript
function outer() {

    let count = 0;

    return function () {

        return ++count;

    };

}

const counter = outer();

console.log(counter());

console.log(counter());
```

**Answer**

```
1
2
```

---

# Scenario-Based Questions (With Answers)

## Scenario 1

You need a private counter whose value should persist between function calls without using global variables.

**Answer**

Use a closure.

```javascript
function createCounter() {

    let count = 0;

    return function () {

        return ++count;

    };

}
```

---

## Scenario 2

You accidentally created a global variable because you forgot to declare it.

How can you prevent this?

**Answer**

Enable strict mode.

```javascript
"use strict";
```

---

## Scenario 3

You want constants to be accessible only within a single JavaScript file.

**Answer**

Use ES6 module scope.

```javascript
const API_URL = "...";
```

Export only what other modules need.

---

## Scenario 4

A large object is retained in memory because a closure still references it.

How can you improve memory usage?

**Answer**

Remove unnecessary references or redesign the closure so that unused objects can be garbage collected.

---

## Scenario 5

You need to import a shared utility function into another file.

**Answer**

```javascript
// utils.js
export function formatCurrency(value) {

}
```

```javascript
// app.js
import { formatCurrency } from "./utils.js";
```

---

# Practice Questions

1. Demonstrate the Temporal Dead Zone with `let`.
2. Compare the hoisting behavior of `var`, `let`, and `const`.
3. Write a function demonstrating execution context.
4. Create a closure that preserves a private variable.
5. Explain the difference between scope and execution context.
6. Demonstrate how garbage collection works with a local variable.
7. Create two ES6 modules and share a variable using `export` and `import`.
8. Show how strict mode prevents accidental global variables.
9. Demonstrate why `eval()` should be avoided.
10. Show the difference between `window.varName` and `window.letName`.
11. Explain why module scope improves application design.
12. Explain how closures can unintentionally cause memory leaks.
13. Explain the role of the scope chain during variable lookup.
14. Explain why minimizing global variables improves maintainability.
15. Compare TDZ, hoisting, and scope using code examples.
