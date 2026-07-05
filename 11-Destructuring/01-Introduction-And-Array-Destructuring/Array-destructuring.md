# Destructuring (Part 1) - Array Destructuring

Destructuring is an ES6 feature that allows you to extract values from arrays or properties from objects into separate variables.

Instead of accessing each value manually, destructuring lets you write cleaner and more readable code.

---

# Why use Destructuring?

Without destructuring:

```javascript
const colors = ["Red", "Blue", "Green"];

const first = colors[0];
const second = colors[1];
const third = colors[2];

console.log(first);
console.log(second);
console.log(third);
```

Output:

```
Red
Blue
Green
```

With destructuring:

```javascript
const colors = ["Red", "Blue", "Green"];

const [first, second, third] = colors;

console.log(first);
console.log(second);
console.log(third);
```

Output:

```
Red
Blue
Green
```

The second approach is shorter, cleaner, and easier to maintain.

---

# Array Destructuring Syntax

```javascript
const array = [value1, value2, value3];

const [a, b, c] = array;
```

The values are assigned according to their **index positions**.

| Index | Variable |
|-------:|----------|
| 0 | a |
| 1 | b |
| 2 | c |

---

# Basic Example

```javascript
const fruits = ["Apple", "Banana", "Orange"];

const [first, second, third] = fruits;

console.log(first);
console.log(second);
console.log(third);
```

Output

```
Apple
Banana
Orange
```

---

# Destructuring Numbers

```javascript
const numbers = [10, 20, 30];

const [a, b, c] = numbers;

console.log(a);
console.log(b);
console.log(c);
```

Output

```
10
20
30
```

---

# Destructuring Strings

Since strings are iterable, they can also be destructured.

```javascript
const language = "JavaScript";

const [a, b, c, d] = language;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
```

Output

```
J
a
v
a
```

---

# Skipping Elements

If you don't need a value, simply leave its position empty.

```javascript
const numbers = [10, 20, 30, 40];

const [first, , third, fourth] = numbers;

console.log(first);
console.log(third);
console.log(fourth);
```

Output

```
10
30
40
```

Multiple elements can also be skipped.

```javascript
const numbers = [10, 20, 30, 40, 50];

const [first, , , fourth] = numbers;

console.log(first);
console.log(fourth);
```

Output

```
10
40
```

---

# Ignoring Remaining Values

You don't have to create variables for every element.

```javascript
const cities = ["Mumbai", "Delhi", "Pune", "Bangalore"];

const [city1, city2] = cities;

console.log(city1);
console.log(city2);
```

Output

```
Mumbai
Delhi
```

The remaining values are simply ignored.

---

# Missing Values

If the array has fewer elements than variables, JavaScript assigns `undefined`.

```javascript
const numbers = [100];

const [a, b, c] = numbers;

console.log(a);
console.log(b);
console.log(c);
```

Output

```
100
undefined
undefined
```

---

# Default Values

You can provide default values that are used when an element is missing.

```javascript
const numbers = [10];

const [a, b = 20] = numbers;

console.log(a);
console.log(b);
```

Output

```
10
20
```

Another example:

```javascript
const user = ["Rahul"];

const [name, role = "Developer"] = user;

console.log(name);
console.log(role);
```

Output

```
Rahul
Developer
```

---

# Default Values are Ignored if Data Exists

```javascript
const numbers = [10, 50];

const [a, b = 20] = numbers;

console.log(a);
console.log(b);
```

Output

```
10
50
```

Since the second value exists, JavaScript ignores the default.

---

# Summary

- Destructuring extracts values from arrays into variables.
- Arrays are destructured based on **index positions**.
- Strings can also be destructured because they are iterable.
- You can skip unwanted elements.
- Missing values become `undefined`.
- Default values are used only when an element doesn't exist.

---

# Practice Questions

### Question 1

```javascript
const fruits = ["Apple", "Banana", "Orange"];

const [a, b, c] = fruits;

console.log(a);
console.log(b);
console.log(c);
```

---

### Question 2

```javascript
const numbers = [5, 10, 15, 20];

const [first, , third] = numbers;

console.log(first);
console.log(third);
```

---

### Question 3

```javascript
const colors = ["Red"];

const [first, second = "Blue"] = colors;

console.log(first);
console.log(second);
```

---

### Question 4

```javascript
const language = "Salesforce";

const [a, b, c] = language;

console.log(a);
console.log(b);
console.log(c);
```

---

### Question 5

```javascript
const values = [100];

const [x, y, z] = values;

console.log(x);
console.log(y);
console.log(z);
```
