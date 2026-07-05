# 📁 07 - Functions (Part 3 - Function Context)

# Introduction

One of the most important topics in JavaScript is **function context**.

Understanding how `this` works is essential for:

- JavaScript interviews
- Lightning Web Components (LWC)
- Event handling
- Callback functions
- Object methods

In this chapter, we'll cover:

- `this`
- Global context
- Function context
- Object methods
- Arrow functions
- `call()`
- `apply()`
- `bind()`
- Lexical Scope
- Closures (Introduction)

---

# What is Function Context?

Function context refers to **which object owns the currently executing function**.

JavaScript determines the value of `this` when a function is called.

---

# The `this` Keyword

`this` is a special keyword that refers to the object currently executing the function.

Its value depends on **how the function is invoked**, not where it is written.

---

# `this` in the Global Scope

Browser

```javascript
console.log(this);
```

Output

```
Window
```

Node.js

```javascript
console.log(this);
```

Output

```
{}
```

---

# `this` Inside a Regular Function

```javascript
function demo() {
    console.log(this);
}

demo();
```

Browser (non-strict mode)

```
Window
```

Strict Mode

```
undefined
```

---

# `this` Inside an Object Method

```javascript
const employee = {
    name: "John",

    greet() {
        console.log(this.name);
    }
};

employee.greet();
```

Output

```
John
```

Here,

```
this → employee
```

---

# `this` Inside Arrow Functions

Arrow functions **do not create their own `this`**.

They inherit `this` from their surrounding scope.

```javascript
const employee = {
    name: "John",

    greet: () => {
        console.log(this.name);
    }
};

employee.greet();
```

Output

```
undefined
```

---

# Why?

Arrow functions capture the surrounding `this`.

They do not change it.

---

# Nested Functions

```javascript
const employee = {

    name: "John",

    greet() {

        function display() {

            console.log(this.name);

        }

        display();

    }

};

employee.greet();
```

Output (strict mode)

```
undefined
```

Because `display()` is a regular function.

---

Correct

```javascript
const employee = {

    name: "John",

    greet() {

        const display = () => {

            console.log(this.name);

        };

        display();

    }

};

employee.greet();
```

Output

```
John
```

---

# call()

Invokes a function immediately and allows you to specify the value of `this`.

Syntax

```javascript
function.call(thisArg, arg1, arg2)
```

Example

```javascript
function greet(city) {

    console.log(this.name, city);

}

const person = {

    name: "John"

};

greet.call(person, "Mumbai");
```

Output

```
John Mumbai
```

---

# apply()

Works like `call()`.

Difference:

Arguments are passed as an array.

Syntax

```javascript
function.apply(thisArg, [args])
```

Example

```javascript
function greet(city, country) {

    console.log(this.name, city, country);

}

const person = {

    name: "John"

};

greet.apply(person, ["Mumbai", "India"]);
```

Output

```
John Mumbai India
```

---

# call() vs apply()

| call() | apply() |
|----------|----------|
| Arguments separately | Arguments in an array |
| Immediate execution | Immediate execution |

---

# bind()

Returns a **new function**.

Does not execute immediately.

Syntax

```javascript
function.bind(thisArg)
```

Example

```javascript
function greet() {

    console.log(this.name);

}

const person = {

    name: "John"

};

const display = greet.bind(person);

display();
```

Output

```
John
```

---

# call() vs apply() vs bind()

| Method | Executes Immediately | Returns Function |
|----------|---------------------|------------------|
| call() | Yes | No |
| apply() | Yes | No |
| bind() | No | Yes |

---

# Lexical Scope

Functions can access variables from their parent scope.

Example

```javascript
const company = "Salesforce";

function outer() {

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

JavaScript searches variables in this order:

```
Current Scope

↓

Parent Scope

↓

Global Scope

↓

ReferenceError
```

---

# Closure (Introduction)

A closure is created when an inner function remembers variables from its outer function even after the outer function has finished executing.

Example

```javascript
function outer() {

    let count = 0;

    return function () {

        count++;

        console.log(count);

    };

}

const counter = outer();

counter();

counter();
```

Output

```
1
2
```

The variable `count` is remembered.

Closures will be covered in detail in Part 4.

---

# Function Borrowing

One object can use another object's method.

Example

```javascript
const employee = {

    name: "John",

    greet() {

        console.log(this.name);

    }

};

const customer = {

    name: "David"

};

employee.greet.call(customer);
```

Output

```
David
```

---

# Method Chaining with bind()

```javascript
function welcome(message){

console.log(message,this.name);

}

const person={

name:"John"

};

const fn=welcome.bind(person);

fn("Hello");
```

Output

```
Hello John
```

---

# Best Practices

✅ Use regular functions for object methods.

✅ Use arrow functions for callbacks.

✅ Use `bind()` when passing object methods as callbacks.

✅ Understand lexical scope before learning closures.

✅ Avoid unnecessary use of `call()` and `apply()`.

---

# Common Mistakes

Using arrow functions as object methods.

Losing `this` inside callbacks.

Confusing `call()` and `bind()`.

Expecting `bind()` to execute immediately.

Thinking closures copy variables.

Closures remember references, not copies.

---

# Functions in Lightning Web Components

Button Click

```javascript
handleClick(){

console.log(this.recordId);

}
```

---

Arrow Callback

```javascript
setTimeout(()=>{

this.isLoading=false;

},2000);
```

---

Borrow Method

```javascript
const copy={

...this.account

};
```

---

Helper Function

```javascript
calculateTotal(){

return this.price*this.quantity;

}
```

---

# Interview Questions (With Answers)

## 1. What is `this` in JavaScript?

**Answer**

`this` refers to the object that is currently executing the function. Its value depends on how the function is called.

---

## 2. Why do arrow functions behave differently with `this`?

**Answer**

Arrow functions do not have their own `this`. They inherit it from the surrounding lexical scope.

---

## 3. Difference between `call()`, `apply()`, and `bind()`?

**Answer**

`call()`

- Executes immediately.
- Arguments passed separately.

`apply()`

- Executes immediately.
- Arguments passed as an array.

`bind()`

- Does not execute immediately.
- Returns a new function with `this` permanently bound.

---

## 4. What is lexical scope?

**Answer**

Lexical scope means a function can access variables from its parent scope based on where the function is written.

---

## 5. What is a closure?

**Answer**

A closure is created when an inner function remembers variables from its outer function even after the outer function has finished executing.

---

## 6. What is function borrowing?

**Answer**

Function borrowing allows one object to use another object's method using `call()`, `apply()`, or `bind()`.

---

## 7. Why is `bind()` useful?

**Answer**

`bind()` is useful when passing methods as callbacks because it preserves the correct `this` value.

---

## 8. When should you use an arrow function?

**Answer**

Arrow functions are best suited for callbacks, array methods (`map`, `filter`, `reduce`), and situations where lexical `this` is desired.

---

# Output-Based Questions (With Answers)

## Question 1

```javascript
const person = {
    name: "John",

    greet() {
        console.log(this.name);
    }
};

person.greet();
```

**Answer**

```
John
```

---

## Question 2

```javascript
function greet() {
    console.log(this.name);
}

const person = {
    name: "John"
};

greet.call(person);
```

**Answer**

```
John
```

---

## Question 3

```javascript
function greet(city) {
    console.log(this.name, city);
}

const person = {
    name: "John"
};

greet.apply(person, ["Mumbai"]);
```

**Answer**

```
John Mumbai
```

---

## Question 4

```javascript
function greet() {
    console.log(this.name);
}

const person = {
    name: "John"
};

const fn = greet.bind(person);

fn();
```

**Answer**

```
John
```

---

## Question 5

```javascript
function outer() {

    let count = 1;

    return function () {

        console.log(count);

    };

}

const fn = outer();

fn();
```

**Answer**

```
1
```

---

## Question 6

```javascript
const employee = {
    name: "John",

    greet: () => {
        console.log(this.name);
    }
};

employee.greet();
```

**Answer**

```
undefined
```

---

# Scenario-Based Questions (With Answers)

## Scenario 1

You pass an object method directly to `setTimeout()`, and `this` becomes incorrect. How do you fix it?

**Answer**

```javascript
setTimeout(this.handleSave.bind(this), 1000);
```

---

## Scenario 2

You want one object to use another object's `display()` method.

**Answer**

```javascript
employee.display.call(customer);
```

---

## Scenario 3

Inside an object method, you need to access `this` within a callback.

**Answer**

```javascript
handleClick() {

    setTimeout(() => {

        console.log(this.recordId);

    }, 1000);

}
```

Arrow functions preserve the surrounding `this`.

---

## Scenario 4

You need to pass multiple arguments to a borrowed function using an array.

**Answer**

```javascript
showDetails.apply(user, ["Mumbai", "India"]);
```

---

## Scenario 5

Create a counter where each button click increases the value without using global variables.

**Answer**

```javascript
function createCounter() {

    let count = 0;

    return function () {

        return ++count;

    };

}
```

This works because of a closure.

---

# Practice Questions

1. Write an object method that uses `this`.
2. Demonstrate why an arrow function should not be used as an object method.
3. Borrow a function using `call()`.
4. Borrow a function using `apply()`.
5. Borrow a function using `bind()`.
6. Write a function demonstrating lexical scope.
7. Write a simple closure that remembers a variable.
8. Create a function that returns another function.
9. Demonstrate the difference between `call()` and `bind()`.
10. Use `bind()` with `setTimeout()`.
11. Explain the scope chain with an example.
12. Write a nested function that accesses variables from its parent.
13. Explain why `this` changes depending on how a function is invoked.
14. Demonstrate function borrowing between two objects.
15. Explain the difference between lexical scope and closure with examples.
