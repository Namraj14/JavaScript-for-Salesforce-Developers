# Rest Operator (Part 3) - Advanced Rest Operator

In the previous parts, we learned how the Rest Operator works with functions, arrays, and objects.

In this part, we'll explore some advanced concepts and compare the Rest Operator with older JavaScript features.

---

# Rest with Arrow Functions

The Rest Operator works exactly the same in arrow functions.

```javascript
const display = (...numbers) => {
    console.log(numbers);
};

display(10, 20, 30);
```

Output

```
[10, 20, 30]
```

---

## Another Example

```javascript
const add = (...numbers) => {
    return numbers.reduce((sum, num) => sum + num, 0);
};

console.log(add(10, 20, 30, 40));
```

Output

```
100
```

Notice how the Rest Operator makes it easy to accept any number of arguments.

---

# Rest with Default Parameters

Rest parameters can be combined with default parameters.

```javascript
function introduce(name = "Guest", ...skills) {
    console.log(name);
    console.log(skills);
}

introduce();
```

Output

```
Guest
[]
```

---

## Another Example

```javascript
function introduce(name = "Guest", ...skills) {
    console.log(name);
    console.log(skills);
}

introduce("Rahul", "Apex", "LWC");
```

Output

```
Rahul
["Apex", "LWC"]
```

---

# Rest with Destructuring in Function Parameters

You can destructure arrays directly inside function parameters and still use the Rest Operator.

```javascript
function display([first, ...remaining]) {
    console.log(first);
    console.log(remaining);
}

display([10, 20, 30, 40]);
```

Output

```
10
[20, 30, 40]
```

---

## Object Destructuring with Rest

```javascript
function display({ id, ...details }) {
    console.log(id);
    console.log(details);
}

display({
    id: 101,
    name: "Rahul",
    department: "Salesforce"
});
```

Output

```
101

{
    name: "Rahul",
    department: "Salesforce"
}
```

---

# Rest vs `arguments`

Before ES6, JavaScript developers used the `arguments` object.

```javascript
function display() {
    console.log(arguments);
}

display(10, 20, 30);
```

Output

```
Arguments(3)
```

---

Using the Rest Operator:

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

---

## Differences

| Rest Operator | `arguments` Object |
|---------------|--------------------|
| Returns a real array | Returns an array-like object |
| Supports `map()`, `filter()`, `reduce()` | Array methods can't be used directly |
| Works in arrow functions | Not available in arrow functions |
| Cleaner syntax | Older syntax |

In modern JavaScript, the Rest Operator is preferred over `arguments`.

---

# Rest vs Spread

Although both use `...`, they do opposite things.

## Rest Operator

Collects multiple values into one variable.

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

Expands one array into multiple values.

```javascript
const numbers = [1, 2, 3];

console.log(...numbers);
```

Output

```
1 2 3
```

---

# Real-World LWC Example

Suppose an Apex method returns a list of records.

```javascript
const accounts = [
    {
        Id: "001",
        Name: "Salesforce"
    },
    {
        Id: "002",
        Name: "Google"
    },
    {
        Id: "003",
        Name: "Microsoft"
    }
];

const [selectedAccount, ...remainingAccounts] = accounts;

console.log(selectedAccount);
console.log(remainingAccounts);
```

Output

```
{
    Id: "001",
    Name: "Salesforce"
}

[
    {
        Id: "002",
        Name: "Google"
    },
    {
        Id: "003",
        Name: "Microsoft"
    }
]
```

This is useful when displaying one selected record separately from the remaining records.

---

# Another LWC Example

Suppose you want to separate an Account Id from the remaining fields before sending data to another method.

```javascript
const account = {
    Id: "001xx000123",
    Name: "Salesforce",
    Industry: "Technology",
    Rating: "Hot"
};

const { Id, ...fields } = account;

console.log(Id);
console.log(fields);
```

Output

```
001xx000123

{
    Name: "Salesforce",
    Industry: "Technology",
    Rating: "Hot"
}
```

---

# Common Interview Questions

## Why was the Rest Operator introduced?

To allow functions to accept a variable number of arguments and collect them into a real array.

---

## Can there be multiple Rest parameters?

❌ No.

```javascript
function test(...a, ...b) {

}
```

Output

```
SyntaxError
```

A function can have only **one** Rest parameter.

---

## Can the Rest parameter be in the middle?

❌ No.

```javascript
function test(...numbers, name) {

}
```

Output

```
SyntaxError
```

The Rest parameter must always be the last parameter.

---

## Does the Rest Operator modify the original array or object?

No.

It creates a new array or object containing the remaining values.

---

# Summary

- Rest works with arrow functions.
- It can be combined with default parameters.
- It works with function parameter destructuring.
- It is the modern replacement for the `arguments` object.
- A function can have only one Rest parameter.
- The Rest parameter must always be the last parameter.
- Rest collects values, while Spread expands values.

---

# Practice Questions

### Question 1

```javascript
const add = (...numbers) => {
    return numbers.reduce((sum, num) => sum + num, 0);
};

console.log(add(5, 10, 15));
```

---

### Question 2

```javascript
function greet(name = "Guest", ...skills) {
    console.log(name);
    console.log(skills);
}

greet("Rahul", "JavaScript", "LWC");
```

---

### Question 3

```javascript
function display([first, ...rest]) {
    console.log(first);
    console.log(rest);
}

display([1, 2, 3, 4]);
```

---

### Question 4

```javascript
const user = {
    id: 1,
    name: "John",
    city: "Mumbai"
};

const { id, ...details } = user;

console.log(details);
```

---

### Question 5

Which statement is true?

- A. Rest expands values.
- B. Rest collects values.
- C. Rest works only with arrays.
- D. Rest can appear anywhere in a function parameter list.
