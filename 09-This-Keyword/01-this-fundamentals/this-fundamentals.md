# 📁 09 - `this` Keyword (Part 1 - Fundamentals)

# What is `this`?

`this` is a special keyword in JavaScript that refers to the object that is currently executing a function.

The value of `this` is **not determined by where the function is written**. It is determined by **how the function is called**.

This is one of the most important JavaScript concepts and is frequently asked in interviews.

---

# Why Do We Need `this`?

Without `this`, object methods wouldn't know which object's data they should access.

Example without `this`

```javascript
const employee = {
    name: "John",

    greet() {
        console.log(employee.name);
    }
};

employee.greet();
```

Although this works, it's not recommended because the object name is hardcoded.

Better approach

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

Now the method always refers to the object that calls it.

---

# How JavaScript Determines `this`

The value of `this` depends on **how the function is invoked**.

| Function Call | Value of `this` |
|--------------|-----------------|
| Global Scope (Browser) | `window` |
| Regular Function (non-strict mode) | `window` |
| Regular Function (strict mode) | `undefined` |
| Object Method | The object itself |
| Arrow Function | Inherited from surrounding scope |
| Constructor Function | Newly created object |
| Class Method | Class instance |
| `call()`, `apply()`, `bind()` | Explicitly specified object |

---

# `this` in Global Scope

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

```javascript
{}
```

---

# `this` Inside a Regular Function

Non-strict mode

```javascript
function display() {
    console.log(this);
}

display();
```

Output (Browser)

```
Window
```

---

Strict mode

```javascript
"use strict";

function display() {
    console.log(this);
}

display();
```

Output

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
this
↓

employee
```

---

# Multiple Objects

```javascript
const person1 = {
    name: "John",

    greet() {
        console.log(this.name);
    }
};

const person2 = {
    name: "David",

    greet() {
        console.log(this.name);
    }
};

person1.greet();

person2.greet();
```

Output

```
John
David
```

Each object gets its own `this`.

---

# Nested Objects

```javascript
const company = {

    name: "ABC",

    employee: {

        name: "John",

        display() {

            console.log(this.name);

        }

    }

};

company.employee.display();
```

Output

```
John
```

`this` refers to the `employee` object.

---

# Nested Functions

Problem

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

Strict mode output

```
undefined
```

The inner regular function gets its own `this`.

---

Solution (Arrow Function)

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

The arrow function inherits `this` from `greet()`.

---

# `this` in Strict Mode

```javascript
"use strict";

function demo() {
    console.log(this);
}

demo();
```

Output

```
undefined
```

Strict mode prevents `this` from defaulting to the global object in regular function calls.

---

# `this` in Event Handlers (Browser)

HTML

```html
<button onclick="show()">Click</button>
```

JavaScript

```javascript
function show() {
    console.log(this);
}
```

In inline browser event handlers, `this` refers to the HTML element that triggered the event.

---

# Method Extraction

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

The method is no longer called through `employee`, so `this` is lost.

---

# Common Mistakes

## Hardcoding Object Names

Wrong

```javascript
const user = {
    name: "John",

    greet() {
        console.log(user.name);
    }
};
```

Correct

```javascript
const user = {
    name: "John",

    greet() {
        console.log(this.name);
    }
};
```

---

## Assuming `this` Refers to the Function

```javascript
function demo() {
    console.log(this);
}
```

`this` refers to the calling context, **not** the function itself.

---

## Losing `this`

```javascript
const fn = employee.greet;

fn();
```

This loses the original object context.

---

# Best Practices

✅ Use `this` inside object methods.

✅ Avoid hardcoding object names.

✅ Use arrow functions only when lexical `this` is desired.

✅ Understand how the function is called before using `this`.

✅ Use strict mode.

---

# `this` in Lightning Web Components

Access Component Property

```javascript
name = "Salesforce";
```

```javascript
handleClick() {
    console.log(this.name);
}
```

---

Access Reactive Variable

```javascript
searchKey = "";
```

```javascript
handleChange(event) {
    this.searchKey = event.target.value;
}
```

---

Call Another Method

```javascript
handleSave() {
    this.validate();
}

validate() {
    return true;
}
```

---

Access Wire Data

```javascript
console.log(this.accounts);
```

---

# Interview Questions (With Answers)

## 1. What is `this` in JavaScript?

**Answer**

`this` is a special keyword that refers to the object currently executing the function. Its value depends on how the function is called.

---

## 2. How is the value of `this` determined?

**Answer**

The value of `this` is determined by the way a function is invoked, not where it is declared.

---

## 3. What does `this` refer to inside an object method?

**Answer**

It refers to the object that called the method.

---

## 4. What does `this` refer to inside a regular function?

**Answer**

- Non-strict mode: Global object (`window` in browsers).
- Strict mode: `undefined`.

---

## 5. Why should object methods use `this` instead of the object name?

**Answer**

Using `this` makes the method reusable and independent of the object's variable name.

---

## 6. Why is `this` lost when a method is assigned to another variable?

**Answer**

Because the function is no longer called as a method of its original object.

---

## 7. What problem does strict mode solve regarding `this`?

**Answer**

It prevents regular function calls from automatically binding `this` to the global object, helping catch bugs.

---

## 8. Does `this` always refer to the object where the function is defined?

**Answer**

No. It refers to the object that calls the function.

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
"use strict";

function demo() {
    console.log(this);
}

demo();
```

**Answer**

```
undefined
```

---

## Question 3

```javascript
const user = {
    name: "Alice",

    greet() {
        console.log(this.name);
    }
};

const fn = user.greet;

fn();
```

**Answer**

```
undefined
```

(Strict mode)

---

## Question 4

```javascript
const company = {
    name: "ABC",

    employee: {
        name: "John",

        show() {
            console.log(this.name);
        }
    }
};

company.employee.show();
```

**Answer**

```
John
```

---

## Question 5

```javascript
const employee = {
    name: "David",

    display() {
        console.log(this.name);
    }
};

employee.display();
```

**Answer**

```
David
```

---

## Question 6

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

**Answer**

```
John
```

---

# Scenario-Based Questions (With Answers)

## Scenario 1

You need to access a component property inside an LWC method.

**Answer**

```javascript
handleClick() {
    console.log(this.recordId);
}
```

---

## Scenario 2

Inside an object method, a nested function loses `this`. How do you fix it?

**Answer**

Use an arrow function.

```javascript
const display = () => {
    console.log(this.name);
};
```

---

## Scenario 3

You need to update a component property when an input value changes.

**Answer**

```javascript
handleChange(event) {
    this.searchKey = event.target.value;
}
```

---

## Scenario 4

A helper method needs to be called from another method in the same LWC component.

**Answer**

```javascript
handleSave() {
    this.validate();
}
```

---

## Scenario 5

You want an object method to continue working even if the object variable name changes.

**Answer**

Use `this` instead of hardcoding the object name.

```javascript
greet() {
    console.log(this.name);
}
```

---

# Practice Questions

1. Write an object method that prints a property using `this`.
2. Demonstrate `this` inside a regular function.
3. Demonstrate `this` inside strict mode.
4. Create two objects that share the same method.
5. Demonstrate nested object method access.
6. Show how `this` is lost when extracting a method.
7. Fix the previous example using an arrow function.
8. Access a component property using `this` in LWC.
9. Update a property using `this` in an event handler.
10. Explain why `this` depends on how a function is called.
11. Compare `this` in global scope, regular functions, and object methods.
12. Explain why hardcoding object names is a bad practice.
13. Explain how strict mode affects `this`.
14. Demonstrate nested functions with and without arrow functions.
15. Explain why `this` is one of the most misunderstood concepts in JavaScript.
