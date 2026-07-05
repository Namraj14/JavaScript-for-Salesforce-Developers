# Spread Operator (Part 1) - Basics & Arrays

The **Spread Operator (`...`)** was introduced in ES6.

It allows you to **expand** an iterable (such as an array or string) into individual elements.

> **Spread = Expand**
>
> **Rest = Collect**

Although both use the same syntax (`...`), their behavior depends on where they are used.

---

# Syntax

```javascript
...value
```

Example:

```javascript
const numbers = [10, 20, 30];

console.log(...numbers);
```

Output

```
10 20 30
```

Instead of printing the array as a single object, JavaScript expands every element.

---

# Spread vs Rest Operator

Since both use `...`, they are often confused.

## Spread Operator

Expands values.

```javascript
const numbers = [10, 20, 30];

console.log(...numbers);
```

Output

```
10 20 30
```

---

## Rest Operator

Collects values.

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

A simple way to remember:

- **Spread expands one value into many values.**
- **Rest collects many values into one value.**

---

# Spreading an Array

Without the spread operator:

```javascript
const numbers = [10, 20, 30];

console.log(numbers);
```

Output

```
[10, 20, 30]
```

Using the spread operator:

```javascript
const numbers = [10, 20, 30];

console.log(...numbers);
```

Output

```
10 20 30
```

Notice the difference.

Without spread, the array is treated as a single object.

With spread, every element is expanded individually.

---

# Why Doesn't `=` Create a Copy?

Many beginners think this creates a new array.

```javascript
const numbers = [10, 20, 30];

const copy = numbers;

copy.push(40);

console.log(numbers);
console.log(copy);
```

Output

```
[10, 20, 30, 40]
[10, 20, 30, 40]
```

Both variables point to the **same array** in memory.

Changing one also changes the other.

---

# Copying an Array Using Spread

```javascript
const numbers = [10, 20, 30];

const copy = [...numbers];

copy.push(40);

console.log(numbers);
console.log(copy);
```

Output

```
[10, 20, 30]
[10, 20, 30, 40]
```

The spread operator creates a **new array**, so modifying the copy doesn't affect the original.

---

# Merging Arrays

The spread operator is commonly used to combine multiple arrays.

```javascript
const frontend = ["HTML", "CSS"];
const backend = ["Node.js", "Express"];

const fullStack = [...frontend, ...backend];

console.log(fullStack);
```

Output

```
["HTML", "CSS", "Node.js", "Express"]
```

---

# Merging Multiple Arrays

```javascript
const first = [1, 2];
const second = [3, 4];
const third = [5, 6];

const result = [...first, ...second, ...third];

console.log(result);
```

Output

```
[1, 2, 3, 4, 5, 6]
```

---

# Adding Elements While Copying

You can add elements anywhere while creating a new array.

```javascript
const numbers = [20, 30];

const newNumbers = [10, ...numbers, 40];

console.log(newNumbers);
```

Output

```
[10, 20, 30, 40]
```

Another example:

```javascript
const fruits = ["Banana", "Orange"];

const allFruits = ["Apple", ...fruits, "Mango"];

console.log(allFruits);
```

Output

```
["Apple", "Banana", "Orange", "Mango"]
```

---

# Passing Arrays as Function Arguments

Suppose a function expects three separate arguments.

```javascript
function add(a, b, c) {
    return a + b + c;
}

const numbers = [10, 20, 30];

console.log(add(...numbers));
```

Output

```
60
```

Without spread:

```javascript
function add(a, b, c) {
    return a + b + c;
}

const numbers = [10, 20, 30];

console.log(add(numbers));
```

Output

```
10,20,30undefinedundefined
```

Why?

Because:

```javascript
a = [10, 20, 30]
b = undefined
c = undefined
```

The array is passed as the **first argument**, not as three separate arguments.

---

# Using Spread with Math Functions

Many JavaScript functions expect individual values instead of an array.

Example:

```javascript
const numbers = [25, 10, 40, 15];

console.log(Math.max(...numbers));
console.log(Math.min(...numbers));
```

Output

```
40
10
```

Without spread:

```javascript
const numbers = [25, 10, 40];

console.log(Math.max(numbers));
```

Output

```
NaN
```

Because `Math.max()` expects individual numbers, not an array.

---

# Summary

- The Spread Operator uses `...`.
- It expands arrays into individual elements.
- It is commonly used to copy arrays.
- `=` copies the reference, not the array.
- Spread creates a new array.
- Multiple arrays can be merged easily.
- Elements can be added while copying.
- Spread is useful when passing array values as function arguments.
- Functions like `Math.max()` and `Math.min()` commonly use the spread operator.

---

# Practice Questions

### Question 1

```javascript
const numbers = [5, 10, 15];

console.log(...numbers);
```

---

### Question 2

```javascript
const a = [1, 2];
const b = [3, 4];

const result = [...a, ...b];

console.log(result);
```

---

### Question 3

```javascript
const fruits = ["Apple", "Banana"];

const copy = [...fruits];

copy.push("Orange");

console.log(fruits);
console.log(copy);
```

---

### Question 4

```javascript
function multiply(a, b, c) {
    return a * b * c;
}

const values = [2, 3, 4];

console.log(multiply(...values));
```

---

### Question 5

```javascript
const numbers = [8, 15, 20];

console.log(Math.max(...numbers));
console.log(Math.min(...numbers));
```
