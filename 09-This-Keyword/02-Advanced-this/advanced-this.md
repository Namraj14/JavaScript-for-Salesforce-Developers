# 📁 09 - `this` Keyword (Part 2 - Advanced `this`)

# Introduction

In this chapter, we'll cover advanced concepts of the `this` keyword that are commonly asked in JavaScript interviews and heavily used in Lightning Web Components (LWC).

Topics include:

- `this` in Arrow Functions
- Lexical `this`
- `call()`
- `apply()`
- `bind()`
- Function Borrowing
- Losing `this`
- Fixing Lost `this`
- `this` with Callbacks
- `this` with `setTimeout()`
- `this` in Classes
- `this` in Constructors

---

# `this` in Arrow Functions

Arrow functions do **not** have their own `this`.

Instead, they inherit `this` from their surrounding (lexical) scope.

Example

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

# Arrow Function as Object Method

Avoid using arrow functions as object methods.

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

Arrow functions don't bind `this` to the object.

---

# Lexical `this`

Lexical `this` means an arrow function uses the `this` value from its surrounding scope.

Example

```javascript
const company = {
    name: "Salesforce",

    show() {
        const print = () => {
            console.log(this.name);
        };

        print();
    }
};

company.show();
```

Output

```
Salesforce
```

---

# call()

`call()` invokes a function immediately and explicitly sets `this`.

Syntax

```javascript
functionName.call(thisArg, arg1, arg2);
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

`apply()` works like `call()`.

The only difference is that arguments are passed as an array.

Syntax

```javascript
functionName.apply(thisArg, [arg1, arg2]);
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

# bind()

`bind()` returns a **new function** with `this` permanently bound.

It does **not** execute immediately.

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

| Method | Executes Immediately | Arguments | Returns |
|----------|---------------------|-----------|----------|
| `call()` | Yes | Individual | Return value |
| `apply()` | Yes | Array | Return value |
| `bind()` | No | Individual | New function |

---

# Function Borrowing

One object can borrow another object's method.

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

# Losing `this`

Problem

```javascript
const employee = {
    name: "John",

    greet() {
        console.log(this.name);
    }
};

const fn = employee.greet;

fn();
```

Output (strict mode)

```
undefined
```

The original object is no longer calling the function.

---

# Fixing Lost `this`

Using `bind()`

```javascript
const fn = employee.greet.bind(employee);

fn();
```

Output

```
John
```

---

# `this` Inside Callback Functions

Problem

```javascript
const employee = {
    name: "John",

    greet() {
        setTimeout(function () {
            console.log(this.name);
        }, 1000);
    }
};

employee.greet();
```

Output

```
undefined
```

---

Solution

```javascript
const employee = {
    name: "John",

    greet() {
        setTimeout(() => {
            console.log(this.name);
        }, 1000);
    }
};

employee.greet();
```

Output

```
John
```

---

# `this` with `setTimeout()`

Recommended

```javascript
setTimeout(() => {
    console.log(this.recordId);
}, 1000);
```

Arrow functions preserve `this`.

---

# `this` Inside Constructor Functions

```javascript
function Employee(name) {
    this.name = name;
}

const emp = new Employee("John");

console.log(emp.name);
```

Output

```
John
```

`this` refers to the newly created object.

---

# `this` Inside Classes

```javascript
class Employee {

    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(this.name);
    }

}

const emp = new Employee("John");

emp.greet();
```

Output

```
John
```

---

# Best Practices

✅ Use arrow functions for callbacks.

✅ Use regular methods for object methods and classes.

✅ Use `bind()` when passing methods as callbacks.

✅ Prefer `call()` and `apply()` only when explicit context switching is required.

---

# Common Mistakes

Using arrow functions as object methods.

Forgetting that `bind()` returns a new function.

Using `call()` when a delayed callback is needed.

Losing `this` when passing methods directly.

---

# `this` in Lightning Web Components

Arrow Callback

```javascript
loadAccounts() {

    getAccounts()

        .then(result => {

            this.accounts = result;

        });

}
```

---

`setTimeout()`

```javascript
setTimeout(() => {

    this.isLoading = false;

}, 1000);
```

---

Calling Helper Method

```javascript
handleSave() {

    this.validate();

}
```

---

Binding Event Handler

```javascript
connectedCallback() {

    this.handleResize = this.handleResize.bind(this);

    window.addEventListener("resize", this.handleResize);

}
```

---

# Interview Questions (With Answers)

## 1. Why do arrow functions not have their own `this`?

**Answer**

Arrow functions use lexical `this`, meaning they inherit `this` from their surrounding scope instead of creating their own.

---

## 2. What is the difference between `call()`, `apply()`, and `bind()`?

**Answer**

- `call()` invokes the function immediately with arguments passed individually.
- `apply()` invokes the function immediately with arguments passed as an array.
- `bind()` returns a new function with `this` permanently bound and does not execute immediately.

---

## 3. What is function borrowing?

**Answer**

Function borrowing allows one object to use another object's method by changing the value of `this` using `call()`, `apply()`, or `bind()`.

---

## 4. Why is `bind()` commonly used in event handlers?

**Answer**

Because methods passed as callbacks often lose their original `this` value. `bind()` permanently associates the method with the correct object.

---

## 5. Why should arrow functions be used inside `setTimeout()` callbacks?

**Answer**

They inherit `this` from the surrounding scope, preventing the callback from losing the component or object context.

---

## 6. What does `this` refer to inside a constructor?

**Answer**

It refers to the newly created object created by the `new` keyword.

---

## 7. What does `this` refer to inside a class method?

**Answer**

It refers to the instance of the class that invoked the method.

---

## 8. Why is `this` often lost?

**Answer**

Because a function is called independently instead of being called as a method of its original object.

---

# Output-Based Questions (With Answers)

## Question 1

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

## Question 2

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

## Question 3

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

## Question 4

```javascript
const user = {
    name: "Alice",

    greet() {
        setTimeout(() => {
            console.log(this.name);
        }, 0);
    }
};

user.greet();
```

**Answer**

```
Alice
```

---

## Question 5

```javascript
function Employee(name) {
    this.name = name;
}

const emp = new Employee("David");

console.log(emp.name);
```

**Answer**

```
David
```

---

## Question 6

```javascript
class Person {

    constructor(name) {
        this.name = name;
    }

    show() {
        console.log(this.name);
    }

}

new Person("Sam").show();
```

**Answer**

```
Sam
```

---

# Scenario-Based Questions (With Answers)

## Scenario 1

You pass an LWC method to `setTimeout()` and `this` becomes `undefined`.

**Answer**

```javascript
setTimeout(() => {

    this.loadAccounts();

}, 1000);
```

---

## Scenario 2

You need one object to reuse another object's method.

**Answer**

```javascript
employee.greet.call(customer);
```

---

## Scenario 3

You need to permanently preserve `this` before registering an event listener.

**Answer**

```javascript
this.handleResize = this.handleResize.bind(this);

window.addEventListener("resize", this.handleResize);
```

---

## Scenario 4

You want to call a function immediately while explicitly setting `this` and passing arguments individually.

**Answer**

```javascript
display.call(user, "Admin");
```

---

## Scenario 5

You need to pass multiple arguments as an array while changing `this`.

**Answer**

```javascript
display.apply(user, ["Mumbai", "India"]);
```

---

# Practice Questions

1. Demonstrate lexical `this` using an arrow function.
2. Show why arrow functions should not be used as object methods.
3. Write an example using `call()`.
4. Write an example using `apply()`.
5. Write an example using `bind()`.
6. Demonstrate function borrowing.
7. Show how `this` is lost when assigning a method to a variable.
8. Fix the previous example using `bind()`.
9. Use an arrow function inside `setTimeout()`.
10. Create a constructor function using `this`.
11. Create a class with a constructor and a method using `this`.
12. Explain the difference between lexical `this` and dynamic `this`.
13. Explain why `bind()` is useful in event handling.
14. Compare `call()`, `apply()`, and `bind()` with examples.
15. Explain why callbacks often lose `this` and how to prevent it.
