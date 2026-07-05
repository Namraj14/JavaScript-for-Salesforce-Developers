# Rest Operator (Part 1) - Basics

The **Rest Operator (`...`)** was introduced in ES6.

It allows you to **collect multiple values into a single variable**.

Unlike the **Spread Operator**, which expands values, the **Rest Operator collects them**.

> **Rest = Collect**
>
> **Spread = Expand**

Although both use the same syntax (`...`), JavaScript treats them differently based on where they are used.

---

# Syntax

```javascript
function functionName(...parameterName) {
    // code
}
```

Example:

```javascript
function display(...numbers) {
    console.log(numbers);
}

display(10, 20, 30);
```

Output

```
[10, 20, 30]
```

The Rest Operator collects all the arguments into an array.

---

# Why Was the Rest Operator Introduced?

Before ES6, JavaScript used the `arguments` object to handle multiple function arguments.

Example:

```javascript
function display() {
    console.log(arguments);
}

display(10, 20, 30);
```

Output

```
Arguments(3)
0: 10
1: 20
2: 30
```

The `arguments` object works, but it has some limitations:

- It is **not a real array**.
- Array methods like `map()`, `filter()`, and `reduce()` cannot be used directly.
- It is not available inside arrow functions.

The Rest Operator solves these problems by returning a real array.

---

# Basic Rest Operator Example

```javascript
function display(...numbers) {
    console.log(numbers);
}

display(10, 20);
display(10, 20, 30);
display(10, 20, 30, 40);
```

Output

```
[10, 20]

[10, 20, 30]

[10, 20, 30, 40]
```

No matter how many arguments are passed, they are collected into a single array.

---

# Rest Operator Creates an Array

```javascript
function display(...numbers) {
    console.log(Array.isArray(numbers));
}

display(10, 20, 30);
```

Output

```
true
```

Since `numbers` is an array, you can use all array methods.

---

# Using Array Methods

```javascript
function display(...numbers) {
    numbers.forEach(number => {
        console.log(number);
    });
}

display(10, 20, 30);
```

Output

```
10
20
30
```

Another example:

```javascript
function display(...numbers) {
    const doubled = numbers.map(num => num * 2);

    console.log(doubled);
}

display(5, 10, 15);
```

Output

```
[10, 20, 30]
```

---

# Combining Normal Parameters with Rest

The Rest Operator can be used with normal parameters.

```javascript
function introduce(name, ...skills) {
    console.log(name);
    console.log(skills);
}

introduce("Rahul", "Apex", "LWC", "JavaScript");
```

Output

```
Rahul
["Apex", "LWC", "JavaScript"]
```

The first argument is assigned to `name`.

The remaining arguments are collected into `skills`.

---

# Rest Parameter Must Be Last

✅ Correct

```javascript
function display(name, ...numbers) {

}
```

❌ Incorrect

```javascript
function display(...numbers, name) {

}
```

Output

```
SyntaxError
```

The Rest Operator must always be the **last parameter** in a function.

---

# Passing No Arguments

If no extra arguments are passed, JavaScript creates an empty array.

```javascript
function display(...numbers) {
    console.log(numbers);
}

display();
```

Output

```
[]
```

---

# Real-World Example

Suppose an employee can have any number of skills.

```javascript
function employee(name, ...skills) {
    console.log("Employee:", name);
    console.log("Skills:", skills);
}

employee(
    "Rahul",
    "Apex",
    "LWC",
    "JavaScript",
    "SOQL",
    "Flows"
);
```

Output

```
Employee: Rahul

Skills:
["Apex", "LWC", "JavaScript", "SOQL", "Flows"]
```

This is much cleaner than defining a fixed number of parameters.

---

# Rest Operator vs Spread Operator

## Rest Operator

Collects values.

```javascript
function display(...numbers) {
    console.log(numbers);
}

display(1, 2, 3);
```

Output

```
[1, 2, 3]
```

---

## Spread Operator

Expands values.

```javascript
const numbers = [1, 2, 3];

console.log(...numbers);
```

Output

```
1 2 3
```

A simple way to remember:

- **Rest collects values into one variable.**
- **Spread expands one value into many values.**

---

# Summary

- The Rest Operator uses `...`.
- It collects multiple values into a single array.
- It is commonly used in function parameters.
- It replaces many use cases of the `arguments` object.
- Since it creates a real array, all array methods can be used.
- The Rest Operator must always be the last parameter in a function.

---

# Practice Questions

### Question 1

```javascript
function display(...numbers) {
    console.log(numbers);
}

display(10, 20, 30);
```

---

### Question 2

```javascript
function greet(name, ...languages) {
    console.log(name);
    console.log(languages);
}

greet("Rahul", "JavaScript", "Apex", "LWC");
```

---

### Question 3

```javascript
function add(...numbers) {
    console.log(Array.isArray(numbers));
}

add(1, 2, 3);
```

---

### Question 4

```javascript
function print(...values) {
    values.forEach(value => console.log(value));
}

print("A", "B", "C");
```

---

### Question 5

Will the following code work? Why?

```javascript
function test(...numbers, name) {

}
```
