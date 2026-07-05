# Variables in JavaScript

## What is a Variable?

A variable is a named container used to store data in memory. It allows you to save values and reuse or modify them throughout your program.

Think of a variable as a labeled box:
- The label is the variable name.
- The box holds the value.

Example:
```
Name → "John"
Age → 25
```

---

# Why Do We Need Variables?

Without variables, every value would need to be written repeatedly.

Instead of:

```javascript
console.log("John");
console.log("John");
console.log("John");
```

You can write:

```javascript
let name = "John";

console.log(name);
console.log(name);
console.log(name);
```

This makes code:
- Easier to read
- Easier to maintain
- Easier to update

---

# Ways to Declare Variables

JavaScript provides three keywords:

```javascript
var
let
const
```

Each behaves differently.

---

# 1. var

Old way of declaring variables (before ES6).

Example:

```javascript
var city = "Mumbai";
```

Properties:

- Function scoped
- Can be redeclared
- Can be reassigned
- Hoisted
- Adds confusion in large applications

Example:

```javascript
var name = "John";
var name = "David";

console.log(name);
```

Output:

```
David
```

---

# 2. let

Introduced in ES6.

Recommended for variables whose values can change.

Example:

```javascript
let age = 25;

age = 30;
```

Properties:

- Block scoped
- Cannot be redeclared in the same scope
- Can be reassigned
- Hoisted but not initialized
- Safer than var

---

# 3. const

Introduced in ES6.

Used when the variable should never point to another value.

Example:

```javascript
const PI = 3.14159;
```

Properties:

- Block scoped
- Cannot be redeclared
- Cannot be reassigned
- Must be initialized during declaration

Incorrect:

```javascript
const tax;
```

Correct:

```javascript
const tax = 18;
```

---

# Variable Naming Rules

Valid:

```javascript
let firstName;
let age1;
let _salary;
let $amount;
```

Invalid:

```javascript
let 1age;
let first-name;
let var;
```

Rules:

- Must start with a letter, _ or $
- Cannot start with a number
- Cannot contain spaces
- Cannot use reserved keywords
- JavaScript is case-sensitive

Example:

```javascript
let Name = "John";
let name = "David";
```

These are different variables.

---

# Naming Conventions

Use camelCase.

Good:

```javascript
let customerName;
let orderTotal;
let accountNumber;
```

Bad:

```javascript
let CUSTOMERNAME;
let customer_name;
let CustomerName;
```

---

# Variable Initialization

Assigning a value during declaration.

```javascript
let city = "Delhi";
```

Without initialization:

```javascript
let city;

console.log(city);
```

Output:

```
undefined
```

---

# Declaration vs Initialization

Declaration:

```javascript
let age;
```

Initialization:

```javascript
age = 25;
```

Declaration + Initialization:

```javascript
let age = 25;
```

---

# Reassignment

Allowed with let.

```javascript
let marks = 80;

marks = 90;
```

Not allowed with const.

```javascript
const marks = 80;

marks = 90;
```

Error:

```
TypeError
```

---

# Redeclaration

var

Allowed.

```javascript
var city = "Mumbai";
var city = "Delhi";
```

let

Not allowed.

```javascript
let city = "Mumbai";
let city = "Delhi";
```

SyntaxError

const

Not allowed.

---

# Scope Overview

var

Accessible throughout the function.

let

Accessible only inside the block.

const

Accessible only inside the block.

Example:

```javascript
{
    let x = 10;
}

console.log(x);
```

Output:

```
ReferenceError
```

---

# Block Scope

A block is anything inside braces.

```javascript
{
    let a = 5;
}
```

Variables declared with let and const exist only inside the block.

---

# Function Scope

Variables declared using var belong to the entire function.

```javascript
function demo(){

    var a = 10;

}

console.log(a);
```

Output:

ReferenceError

The variable exists only inside the function.

---

# Global Variables

Declared outside every function.

```javascript
let company = "Salesforce";
```

Accessible throughout the file.

---

# Local Variables

Declared inside a function.

```javascript
function demo(){

    let age = 25;

}
```

Cannot be accessed outside.

---

# Variable Shadowing

A local variable can hide a variable with the same name from an outer scope.

```javascript
let city = "Mumbai";

function demo(){

    let city = "Delhi";

    console.log(city);

}

console.log(city);
```

Output:

```
Delhi
Mumbai
```

---

# Hoisting Overview

Variable declarations are moved to the top before execution.

Different behavior:

var

Accessible before declaration.

Returns:

```
undefined
```

let

Exists but cannot be accessed before declaration.

ReferenceError

const

ReferenceError

We'll study hoisting in detail later.

---

# Temporal Dead Zone (TDZ)

The time between entering a scope and initializing a let or const variable.

Example:

```javascript
console.log(name);

let name = "John";
```

Output:

ReferenceError

---

# Memory Allocation

When JavaScript starts:

- Memory is created.
- Variables are allocated memory.
- var is initialized as undefined.
- let and const remain uninitialized until execution reaches their declaration.

---

# Best Practices

✅ Use const by default.

✅ Use let only when the value changes.

❌ Avoid var in modern JavaScript.

Use meaningful variable names.

Keep scope as small as possible.

Prefer camelCase.

---

# Common Mistakes

Using var everywhere.

Using meaningless names.

```javascript
let x;
let y;
```

Better:

```javascript
let customerName;
let totalPrice;
```

Using const for changing values.

```javascript
const count = 0;

count++;
```

Forgetting initialization.

```javascript
const age;
```

Accessing let before declaration.

```javascript
console.log(name);

let name = "John";
```

---

# Variables in Lightning Web Components

Variables are used everywhere in LWC.

Example:

```javascript
import { LightningElement } from 'lwc';

export default class Account extends LightningElement {

    title = "Accounts";

    count = 0;

    isLoading = false;

}
```

Examples:

Store button labels.

Store API response.

Store Account records.

Store Contact list.

Store error messages.

Store user selections.

Store pagination values.

Store search text.

Store modal state.

Store loading indicators.

---

# Interview Questions

## Beginner

What is a variable?

Difference between declaration and initialization.

Difference between var, let and const.

Can const objects be modified?

Why was let introduced?

What is block scope?

What is function scope?

What is variable shadowing?

What happens when you access a variable before declaration?

What is hoisting?

---

## Intermediate

Explain the Temporal Dead Zone.

Why should var be avoided?

How does memory allocation work for variables?

Why is const recommended by default?

How does JavaScript resolve variables with the same name?

---

# Salesforce Interview Questions

Why are most LWC properties declared without var, let or const inside a class?

When should you use let inside an Apex callback?

How are variables used with @track?

Why is const commonly used when handling API responses?

Explain variable scope inside event handlers.

