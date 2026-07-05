# 📁 08 - Scope (Part 1 - Fundamentals)

# What is Scope?

Scope determines **where a variable can be accessed** in your program.

It defines the visibility and lifetime of variables.

Example

```javascript
let name = "John";

console.log(name);
```

Output

```
John
```

The variable `name` is accessible because it is in scope.

---

# Why Do We Need Scope?

Scope helps us:

- Prevent variable conflicts.
- Protect data from unwanted access.
- Organize code.
- Improve maintainability.
- Reduce bugs.

Without scope, every variable would be global.

---

# Types of Scope

JavaScript has four main types of scope:

- Global Scope
- Function Scope
- Block Scope
- Lexical Scope

---

# Global Scope

Variables declared outside all functions and blocks belong to the global scope.

Example

```javascript
let company = "Salesforce";

function display() {
    console.log(company);
}

display();

console.log(company);
```

Output

```
Salesforce
Salesforce
```

The variable can be accessed anywhere.

---

# Global Variables

```javascript
let message = "Welcome";

console.log(message);

function greet() {
    console.log(message);
}
```

Global variables remain available until the application finishes.

---

# Function Scope

Variables declared inside a function are only accessible within that function.

Example

```javascript
function demo() {

    let age = 25;

    console.log(age);

}

demo();
```

Output

```
25
```

---

Outside the function

```javascript
console.log(age);
```

Output

```
ReferenceError
```

---

# Function Scope with var

```javascript
function demo() {

    var city = "Mumbai";

    console.log(city);

}

demo();
```

Output

```
Mumbai
```

---

Outside

```javascript
console.log(city);
```

Output

```
ReferenceError
```

---

# Block Scope

A block is any code enclosed in `{}`.

Examples

```javascript
if (true) {

}
```

```javascript
for (...) {

}
```

```javascript
while (...) {

}
```

---

Variables declared with `let` and `const` are block-scoped.

Example

```javascript
if (true) {

    let message = "Hello";

    console.log(message);

}
```

Output

```
Hello
```

---

Outside

```javascript
console.log(message);
```

Output

```
ReferenceError
```

---

# var is NOT Block Scoped

Example

```javascript
if (true) {

    var language = "JavaScript";

}

console.log(language);
```

Output

```
JavaScript
```

Because `var` ignores block scope.

---

# let is Block Scoped

```javascript
if (true) {

    let language = "JavaScript";

}

console.log(language);
```

Output

```
ReferenceError
```

---

# const is Block Scoped

```javascript
if (true) {

    const pi = 3.14;

}

console.log(pi);
```

Output

```
ReferenceError
```

---

# Lexical Scope

Lexical scope means inner functions can access variables declared in their parent scope.

Example

```javascript
function outer() {

    let company = "Salesforce";

    function inner() {

        console.log(company);

    }

    inner();

}

outer();
```

Output

```
Salesforce
```

---

# Scope Chain

When JavaScript searches for a variable, it follows this order:

```
Current Scope

↓

Parent Scope

↓

Global Scope

↓

ReferenceError
```

Example

```javascript
let company = "Salesforce";

function outer() {

    let department = "IT";

    function inner() {

        console.log(company);

        console.log(department);

    }

    inner();

}

outer();
```

Output

```
Salesforce
IT
```

---

# Nested Scope

```javascript
function levelOne() {

    let a = 10;

    function levelTwo() {

        let b = 20;

        function levelThree() {

            let c = 30;

            console.log(a);
            console.log(b);
            console.log(c);

        }

        levelThree();

    }

    levelTwo();

}

levelOne();
```

Output

```
10
20
30
```

---

# Variable Shadowing

A local variable can hide a variable with the same name from an outer scope.

Example

```javascript
let name = "Global";

function demo() {

    let name = "Local";

    console.log(name);

}

demo();

console.log(name);
```

Output

```
Local
Global
```

---

# Illegal Shadowing

Illegal shadowing occurs when a `var` declaration attempts to shadow a `let` or `const` in the same scope.

Example

```javascript
let name = "John";

{
    var name = "David";
}
```

Output

```
SyntaxError
```

---

Legal Shadowing

```javascript
var city = "Mumbai";

{
    let city = "Delhi";
}

console.log(city);
```

Output

```
Mumbai
```

---

# Scope with Loops

Using `var`

```javascript
for (var i = 0; i < 3; i++) {

}

console.log(i);
```

Output

```
3
```

---

Using `let`

```javascript
for (let i = 0; i < 3; i++) {

}

console.log(i);
```

Output

```
ReferenceError
```

---

# Scope with const

```javascript
const company = "Salesforce";

{
    console.log(company);
}
```

Output

```
Salesforce
```

---

# Best Practices

✅ Prefer `let` and `const` over `var`.

✅ Minimize global variables.

✅ Declare variables in the smallest possible scope.

✅ Use `const` whenever the variable should not be reassigned.

✅ Avoid variable shadowing unless necessary.

---

# Common Mistakes

Using `var` inside blocks expecting block scope.

Creating unnecessary global variables.

Reusing the same variable name in multiple scopes.

Accessing variables outside their scope.

Ignoring lexical scope when writing nested functions.

---

# Scope in Lightning Web Components

Global Component Property

```javascript
searchKey = "";
```

Accessible throughout the component.

---

Function Scope

```javascript
handleSave() {

    let total = 100;

    console.log(total);

}
```

`total` cannot be accessed outside `handleSave()`.

---

Block Scope

```javascript
if (this.isAdmin) {

    let message = "Welcome Admin";

    console.log(message);

}
```

`message` exists only inside the `if` block.

---

Helper Function

```javascript
calculateTotal(price, quantity) {

    const total = price * quantity;

    return total;

}
```

---

# Interview Questions (With Answers)

## 1. What is scope?

**Answer**

Scope defines where a variable can be accessed within a program. It controls the visibility and lifetime of variables.

---

## 2. What are the different types of scope in JavaScript?

**Answer**

- Global Scope
- Function Scope
- Block Scope
- Lexical Scope

---

## 3. What is block scope?

**Answer**

Variables declared with `let` and `const` are accessible only within the block (`{}`) in which they are declared.

---

## 4. Is `var` block scoped?

**Answer**

No. `var` is function-scoped, not block-scoped.

---

## 5. What is lexical scope?

**Answer**

Lexical scope means an inner function can access variables declared in its parent scope.

---

## 6. What is variable shadowing?

**Answer**

Variable shadowing occurs when a variable in an inner scope has the same name as a variable in an outer scope, temporarily hiding the outer variable.

---

## 7. What is illegal shadowing?

**Answer**

Illegal shadowing happens when a `var` declaration conflicts with a `let` or `const` declaration in a way that JavaScript does not allow, resulting in a `SyntaxError`.

---

## 8. Why should `const` and `let` be preferred over `var`?

**Answer**

`let` and `const` provide block scope, reduce bugs caused by variable leakage, and make code easier to understand and maintain.

---

# Output-Based Questions (With Answers)

## Question 1

```javascript
let company = "Salesforce";

function demo() {
    console.log(company);
}

demo();
```

**Answer**

```
Salesforce
```

---

## Question 2

```javascript
if (true) {

    let age = 25;

}

console.log(age);
```

**Answer**

```
ReferenceError
```

---

## Question 3

```javascript
if (true) {

    var city = "Mumbai";

}

console.log(city);
```

**Answer**

```
Mumbai
```

---

## Question 4

```javascript
let name = "Global";

function demo() {

    let name = "Local";

    console.log(name);

}

demo();

console.log(name);
```

**Answer**

```
Local
Global
```

---

## Question 5

```javascript
for (let i = 0; i < 3; i++) {

}

console.log(i);
```

**Answer**

```
ReferenceError
```

---

## Question 6

```javascript
function outer() {

    let a = 10;

    function inner() {

        console.log(a);

    }

    inner();

}

outer();
```

**Answer**

```
10
```

---

## Question 7

```javascript
const company = "Salesforce";

{
    console.log(company);
}
```

**Answer**

```
Salesforce
```

---

# Scenario-Based Questions (With Answers)

## Scenario 1

You need a variable that is accessible only inside a validation function.

**Answer**

```javascript
function validate() {

    let isValid = true;

    return isValid;

}
```

---

## Scenario 2

You need a counter that should only exist inside a loop.

**Answer**

```javascript
for (let i = 0; i < 10; i++) {

    console.log(i);

}
```

Using `let` ensures `i` is not accessible outside the loop.

---

## Scenario 3

An inner helper function needs to access a value declared in its parent function.

**Answer**

```javascript
function saveRecord() {

    const recordId = "001ABC";

    function logRecord() {

        console.log(recordId);

    }

    logRecord();

}
```

---

## Scenario 4

You need a constant tax rate that should never be reassigned.

**Answer**

```javascript
const TAX_RATE = 0.18;
```

---

## Scenario 5

An LWC method calculates a total amount that should not be accessible outside the method.

**Answer**

```javascript
calculateTotal(price, quantity) {

    const total = price * quantity;

    return total;

}
```

---

# Practice Questions

1. Create a global variable and access it from a function.
2. Create a function-scoped variable and attempt to access it outside the function.
3. Demonstrate block scope using `let`.
4. Demonstrate that `var` is not block-scoped.
5. Create nested functions and access parent variables.
6. Demonstrate lexical scope with three nested functions.
7. Write an example of variable shadowing.
8. Write an example of illegal shadowing.
9. Compare the behavior of `var`, `let`, and `const` inside a loop.
10. Explain the scope chain with an example.
11. Create a helper function that accesses a parent variable.
12. Show why minimizing global variables is a good practice.
13. Explain why `let` is preferred over `var`.
14. Explain why `const` is preferred for values that do not change.
15. Explain the difference between global, function, block, and lexical scope with examples.
