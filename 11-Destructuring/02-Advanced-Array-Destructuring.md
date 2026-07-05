# Destructuring (Part 2) - Advanced Array Destructuring

In the previous part, we learned the basics of array destructuring.

In this part, we'll cover:
- Rest Operator (`...`)
- Nested Array Destructuring
- Swapping Variables
- Destructuring Returned Arrays
- Ignoring Multiple Values
- Destructuring with Loops
- Common Mistakes

---

# Rest Operator (`...`)

The rest operator collects all the remaining elements into a new array.

```javascript
const numbers = [10, 20, 30, 40, 50];

const [first, ...remaining] = numbers;

console.log(first);
console.log(remaining);
```

Output

```
10
[20, 30, 40, 50]
```

---

## Another Example

```javascript
const fruits = ["Apple", "Banana", "Orange", "Mango"];

const [first, second, ...others] = fruits;

console.log(first);
console.log(second);
console.log(others);
```

Output

```
Apple
Banana
["Orange", "Mango"]
```

---

## Rest Operator Must Be Last

✅ Correct

```javascript
const numbers = [1, 2, 3, 4];

const [a, ...b] = numbers;
```

❌ Wrong

```javascript
const numbers = [1, 2, 3, 4];

const [...a, b] = numbers;
```

Output

```
SyntaxError
```

The rest operator must always be the last element.

---

# Nested Array Destructuring

Arrays can contain other arrays.

```javascript
const data = [10, [20, 30], 40];

const [a, [b, c], d] = data;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
```

Output

```
10
20
30
40
```

---

## Deeply Nested Arrays

```javascript
const data = [1, [2, [3, 4]]];

const [a, [b, [c, d]]] = data;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
```

Output

```
1
2
3
4
```

---

# Swapping Variables

Before ES6

```javascript
let x = 10;
let y = 20;

let temp = x;
x = y;
y = temp;

console.log(x);
console.log(y);
```

Output

```
20
10
```

Using destructuring

```javascript
let x = 10;
let y = 20;

[x, y] = [y, x];

console.log(x);
console.log(y);
```

Output

```
20
10
```

This is one of the most common real-world uses of array destructuring.

---

# Destructuring Returned Arrays

Many JavaScript methods return arrays.

```javascript
function getCoordinates() {
    return [25.6, 82.9];
}

const [latitude, longitude] = getCoordinates();

console.log(latitude);
console.log(longitude);
```

Output

```
25.6
82.9
```

---

## Real-world Example

```javascript
function getUser() {
    return ["Rahul", "Developer", 4];
}

const [name, role, experience] = getUser();

console.log(name);
console.log(role);
console.log(experience);
```

Output

```
Rahul
Developer
4
```

---

# Ignoring Multiple Values

```javascript
const values = [10, 20, 30, 40, 50];

const [, second, , fourth] = values;

console.log(second);
console.log(fourth);
```

Output

```
20
40
```

---

# Destructuring in Loops

Array destructuring is commonly used inside loops.

```javascript
const students = [
    ["Rahul", 90],
    ["Amit", 85],
    ["Priya", 95]
];

for (const [name, marks] of students) {
    console.log(name, marks);
}
```

Output

```
Rahul 90
Amit 85
Priya 95
```

---

# Destructuring Entries of an Array

```javascript
const colors = ["Red", "Blue", "Green"];

for (const [index, color] of colors.entries()) {
    console.log(index, color);
}
```

Output

```
0 Red
1 Blue
2 Green
```

---

# Common Mistakes

## Forgetting Square Brackets

❌ Wrong

```javascript
const numbers = [10, 20];

const { a, b } = numbers;
```

Output

```
undefined
```

Arrays use **square brackets**, not curly braces.

---

## Rest Operator Not at the End

❌ Wrong

```javascript
const numbers = [1, 2, 3];

const [...a, b] = numbers;
```

Output

```
SyntaxError
```

---

## Assuming Missing Values Throw Errors

```javascript
const numbers = [10];

const [a, b] = numbers;

console.log(b);
```

Output

```
undefined
```

Missing values do **not** throw an error.

---

# Summary

- The rest operator collects remaining elements.
- The rest operator must be the last variable.
- Nested arrays can be destructured.
- Destructuring is commonly used for swapping variables.
- Functions that return arrays are often destructured.
- Destructuring works well with `for...of` loops.
- Arrays always use square brackets (`[]`) for destructuring.

---

# Practice Questions

### Question 1

```javascript
const numbers = [5, 10, 15, 20, 25];

const [first, ...rest] = numbers;

console.log(first);
console.log(rest);
```

---

### Question 2

```javascript
const data = [1, [2, 3], 4];

const [a, [b, c], d] = data;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
```

---

### Question 3

```javascript
let x = 100;
let y = 200;

[x, y] = [y, x];

console.log(x);
console.log(y);
```

---

### Question 4

```javascript
function getStudent() {
    return ["John", 90];
}

const [name, marks] = getStudent();

console.log(name);
console.log(marks);
```

---

### Question 5

```javascript
const fruits = ["Apple", "Banana", "Orange"];

for (const [index, fruit] of fruits.entries()) {
    console.log(index, fruit);
}
```
