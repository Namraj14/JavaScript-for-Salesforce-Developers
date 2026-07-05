# Spread Operator (Part 3) - Real-World Usage & LWC

In the previous parts, we learned how the Spread Operator works with arrays and objects.

In this part, we'll see how it's used in real-world JavaScript and LWC development.

---

# Spread with Strings

Strings are iterable, so they can be expanded using the Spread Operator.

```javascript
const language = "JavaScript";

const letters = [...language];

console.log(letters);
```

Output

```javascript
[
    "J",
    "a",
    "v",
    "a",
    "S",
    "c",
    "r",
    "i",
    "p",
    "t"
]
```

Each character becomes an element of the array.

---

# Spread with Set

A `Set` stores only unique values.

The Spread Operator is commonly used to convert a `Set` into an array.

```javascript
const numbers = new Set([10, 20, 30]);

const array = [...numbers];

console.log(array);
```

Output

```javascript
[10, 20, 30]
```

---

# Removing Duplicate Values

One of the most popular uses of the Spread Operator.

```javascript
const numbers = [10, 20, 20, 30, 40, 40];

const uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers);
```

Output

```javascript
[10, 20, 30, 40]
```

How it works:

1. `Set` removes duplicates.
2. Spread converts the `Set` back into an array.

---

# Converting Iterables into Arrays

The Spread Operator can convert any iterable into an array.

Example using a string:

```javascript
const word = "LWC";

const characters = [...word];

console.log(characters);
```

Output

```javascript
["L", "W", "C"]
```

---

# Spread with Function Calls

Suppose a function expects individual arguments.

```javascript
function display(first, second, third) {
    console.log(first);
    console.log(second);
    console.log(third);
}

const values = ["Apex", "LWC", "JavaScript"];

display(...values);
```

Output

```
Apex
LWC
JavaScript
```

This is cleaner than passing each value manually.

---

# Updating Arrays in LWC

In LWC, you should avoid directly modifying arrays when updating component state.

Instead of:

```javascript
this.accounts.push(newAccount);
```

Prefer creating a new array.

```javascript
this.accounts = [...this.accounts, newAccount];
```

Example:

```javascript
this.fruits = ["Apple", "Banana"];

this.fruits = [...this.fruits, "Orange"];

console.log(this.fruits);
```

Output

```javascript
["Apple", "Banana", "Orange"]
```

Creating a new array makes the state change easier for LWC to detect.

---

# Updating Objects in LWC

Instead of changing properties directly:

```javascript
this.account.Name = "Salesforce";
```

Create a new object.

```javascript
this.account = {
    ...this.account,
    Name: "Salesforce"
};
```

Example:

```javascript
this.account = {
    Id: "001",
    Name: "Google",
    Industry: "Technology"
};

this.account = {
    ...this.account,
    Rating: "Hot"
};
```

Result:

```javascript
{
    Id: "001",
    Name: "Google",
    Industry: "Technology",
    Rating: "Hot"
}
```

This pattern is used extensively in LWC.

---

# Common Mistakes

## Mistake 1 - Assuming Spread Creates a Deep Copy

```javascript
const employee = {
    name: "Rahul",
    address: {
        city: "Mumbai"
    }
};

const copy = {
    ...employee
};

copy.address.city = "Delhi";

console.log(employee.address.city);
```

Output

```
Delhi
```

Spread creates only a **shallow copy**.

---

## Mistake 2 - Forgetting to Spread Existing Data

Instead of:

```javascript
const updated = {
    Rating: "Hot"
};
```

Do this:

```javascript
const updated = {
    ...account,
    Rating: "Hot"
};
```

Otherwise, all previous properties are lost.

---

## Mistake 3 - Confusing Spread and Rest

Spread

```javascript
console.log(...numbers);
```

Rest

```javascript
function display(...numbers) {

}
```

Same syntax.

Different purpose.

---

# Interview Questions

## What is the Spread Operator?

It expands an iterable or object into individual elements or properties.

---

## Does Spread Create a Deep Copy?

No.

It creates a shallow copy.

---

## Can Spread Be Used with Objects?

Yes.

```javascript
const copy = {
    ...employee
};
```

---

## Can Spread Be Used with Arrays?

Yes.

```javascript
const copy = [...numbers];
```

---

## Why Is the Spread Operator Commonly Used in LWC?

Because LWC follows an immutable update pattern.

Instead of modifying an array or object directly, developers often create a **new array or object** using the Spread Operator. This makes state updates more predictable and helps ensure the framework detects changes.

---

# Summary

- Spread works with arrays, objects, strings, and other iterables.
- It is commonly used to create copies.
- It helps merge arrays and objects.
- It can remove duplicates when combined with `Set`.
- It is frequently used in function calls.
- In LWC, it is commonly used when updating arrays and objects.
- Spread creates a **shallow copy**, not a deep copy.

---

# Practice Questions

### Question 1

```javascript
const word = "Salesforce";

const letters = [...word];

console.log(letters);
```

---

### Question 2

```javascript
const numbers = [10, 20, 20, 30];

const unique = [...new Set(numbers)];

console.log(unique);
```

---

### Question 3

```javascript
function greet(a, b) {
    console.log(a, b);
}

const names = ["Rahul", "Amit"];

greet(...names);
```

---

### Question 4

```javascript
const account = {
    Name: "Google",
    Industry: "Technology"
};

const updated = {
    ...account,
    Rating: "Hot"
};

console.log(updated);
```

---

### Question 5

What will be the output?

```javascript
const employee = {
    name: "Rahul",
    address: {
        city: "Mumbai"
    }
};

const copy = {
    ...employee
};

copy.address.city = "Delhi";

console.log(employee.address.city);
```
