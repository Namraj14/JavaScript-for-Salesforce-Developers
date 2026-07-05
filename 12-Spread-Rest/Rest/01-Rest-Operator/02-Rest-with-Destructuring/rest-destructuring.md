# Rest Operator (Part 2) - Rest with Destructuring

The Rest Operator is not limited to function parameters.

It can also be used while **destructuring arrays and objects** to collect the remaining values.

---

# Rest with Array Destructuring

The Rest Operator collects all the remaining elements into a new array.

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

Here,

- `first` receives the first element.
- `remaining` receives all the remaining elements as an array.

---

# Collecting Multiple Remaining Elements

```javascript
const fruits = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Grapes"
];

const [first, second, ...others] = fruits;

console.log(first);
console.log(second);
console.log(others);
```

Output

```
Apple
Banana
["Orange", "Mango", "Grapes"]
```

---

# Rest Must Be the Last Element

✅ Correct

```javascript
const numbers = [1, 2, 3, 4];

const [first, ...remaining] = numbers;
```

❌ Incorrect

```javascript
const numbers = [1, 2, 3, 4];

const [...remaining, last] = numbers;
```

Output

```
SyntaxError
```

The Rest Operator must always appear at the end.

---

# Rest with Empty Remaining Values

```javascript
const numbers = [10];

const [first, ...remaining] = numbers;

console.log(first);
console.log(remaining);
```

Output

```
10
[]
```

If there are no remaining elements, JavaScript creates an empty array.

---

# Rest with Object Destructuring

The Rest Operator can also collect the remaining properties of an object.

```javascript
const employee = {
    id: 101,
    name: "Rahul",
    department: "Salesforce",
    salary: 80000
};

const { id, ...details } = employee;

console.log(id);
console.log(details);
```

Output

```
101

{
    name: "Rahul",
    department: "Salesforce",
    salary: 80000
}
```

---

# Collecting Remaining Object Properties

```javascript
const user = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    city: "Mumbai"
};

const {
    firstName,
    ...otherDetails
} = user;

console.log(firstName);
console.log(otherDetails);
```

Output

```
John

{
    lastName: "Doe",
    age: 25,
    city: "Mumbai"
}
```

---

# Combining Variables with Rest

```javascript
const employee = {
    id: 101,
    name: "Rahul",
    role: "Developer",
    experience: 4
};

const {
    id,
    name,
    ...employeeDetails
} = employee;

console.log(id);
console.log(name);
console.log(employeeDetails);
```

Output

```
101
Rahul

{
    role: "Developer",
    experience: 4
}
```

---

# Real-World Example

Imagine an API returns many properties, but you only need a few.

```javascript
const response = {
    id: 1,
    name: "Rahul",
    email: "rahul@test.com",
    phone: "9999999999",
    city: "Mumbai"
};

const {
    id,
    name,
    ...contactDetails
} = response;

console.log(id);
console.log(name);
console.log(contactDetails);
```

Output

```
1
Rahul

{
    email: "rahul@test.com",
    phone: "9999999999",
    city: "Mumbai"
}
```

---

# LWC Example

Suppose Apex returns an Account record.

```javascript
const account = {
    Id: "001xx",
    Name: "Salesforce",
    Industry: "Technology",
    Rating: "Hot"
};

const {
    Id,
    ...accountDetails
} = account;

console.log(Id);
console.log(accountDetails);
```

Output

```
001xx

{
    Name: "Salesforce",
    Industry: "Technology",
    Rating: "Hot"
}
```

This pattern is useful when you need one or two fields separately while keeping the remaining data together.

---

# Common Mistakes

## Using Rest Anywhere Except the End

❌ Incorrect

```javascript
const numbers = [10, 20, 30];

const [...rest, last] = numbers;
```

Output

```
SyntaxError
```

---

## Expecting Rest to Return a Single Value

```javascript
const numbers = [10, 20, 30];

const [first, ...remaining] = numbers;

console.log(typeof remaining);
```

Output

```
object
```

`remaining` is always an **array**, even if it contains only one element.

---

# Summary

- Rest can be used with array destructuring.
- Rest can be used with object destructuring.
- It collects all remaining values.
- For arrays, it returns a new array.
- For objects, it returns a new object.
- The Rest Operator must always be the last element.

---

# Practice Questions

### Question 1

```javascript
const numbers = [5, 10, 15, 20];

const [first, ...rest] = numbers;

console.log(first);
console.log(rest);
```

---

### Question 2

```javascript
const fruits = [
    "Apple",
    "Banana",
    "Orange",
    "Mango"
];

const [a, b, ...others] = fruits;

console.log(a);
console.log(b);
console.log(others);
```

---

### Question 3

```javascript
const user = {
    name: "Rahul",
    age: 25,
    city: "Mumbai"
};

const {
    name,
    ...details
} = user;

console.log(name);
console.log(details);
```

---

### Question 4

```javascript
const employee = {
    id: 101,
    name: "John",
    salary: 50000,
    department: "IT"
};

const {
    id,
    ...employeeDetails
} = employee;

console.log(employeeDetails);
```

---

### Question 5

What will happen?

```javascript
const values = [1, 2, 3];

const [...rest, last] = values;
```
