# 📁 06 - Objects (Part 3 - Advanced Objects)

# Introduction

In this chapter, we'll cover advanced object concepts that are widely used in JavaScript, Lightning Web Components (LWC), and technical interviews.

Topics include:

- `this` keyword
- Shallow vs Deep Copy
- JSON conversion
- Spread & Rest Operators
- Computed Properties
- Optional Chaining
- Nullish Coalescing
- Object Iteration
- Performance
- LWC Examples

---

# The `this` Keyword

`this` refers to the object that is currently executing the function.

Example

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

Here, `this` refers to `employee`.

---

# `this` Inside Regular Functions

```javascript
const user = {
    name: "Alice",

    showName: function () {
        console.log(this.name);
    }
};

user.showName();
```

Output

```
Alice
```

---

# `this` Inside Arrow Functions

Arrow functions do **not** have their own `this`.

They inherit `this` from the surrounding scope.

Example

```javascript
const user = {
    name: "Alice",

    showName: () => {
        console.log(this.name);
    }
};

user.showName();
```

Output

```
undefined
```

Do not use arrow functions as object methods unless you intentionally want lexical `this`.

---

# Shallow Copy

Copies only the first level of an object.

Nested objects still share references.

Example

```javascript
const person = {
    name: "John",
    address: {
        city: "Mumbai"
    }
};

const copy = {
    ...person
};

copy.address.city = "Delhi";

console.log(person.address.city);
```

Output

```
Delhi
```

---

# Deep Copy

Creates a completely independent copy, including nested objects.

One common approach (works only for JSON-safe data):

```javascript
const copy = JSON.parse(JSON.stringify(person));
```

Example

```javascript
const person = {
    name: "John",
    address: {
        city: "Mumbai"
    }
};

const copy = JSON.parse(JSON.stringify(person));

copy.address.city = "Delhi";

console.log(person.address.city);
```

Output

```
Mumbai
```

---

# Shallow Copy vs Deep Copy

| Shallow Copy | Deep Copy |
|--------------|-----------|
| Copies first level | Copies all levels |
| Nested objects shared | Nested objects independent |
| Faster | Slower |
| Spread, Object.assign() | JSON methods, structuredClone() |

---

# JSON.stringify()

Converts an object into a JSON string.

Example

```javascript
const user = {
    name: "John",
    age: 30
};

const json = JSON.stringify(user);

console.log(json);
```

Output

```json
{"name":"John","age":30}
```

---

# JSON.parse()

Converts a JSON string into a JavaScript object.

Example

```javascript
const json = '{"name":"John","age":30}';

const user = JSON.parse(json);

console.log(user);
```

Output

```javascript
{
    name: "John",
    age: 30
}
```

---

# When to Use JSON

- Sending data to APIs.
- Receiving API responses.
- Storing data in Local Storage.
- Deep copying (with limitations).

---

# Spread Operator (...)

Copies or merges objects.

Example

```javascript
const employee = {
    name: "John"
};

const updated = {
    ...employee,
    city: "Mumbai"
};

console.log(updated);
```

Output

```javascript
{
    name: "John",
    city: "Mumbai"
}
```

---

# Merging Objects

```javascript
const personal = {
    name: "John"
};

const work = {
    role: "Developer"
};

const employee = {
    ...personal,
    ...work
};
```

---

# Rest Operator (...)

Collects remaining properties.

Example

```javascript
const employee = {
    name: "John",
    age: 30,
    city: "Mumbai"
};

const { name, ...details } = employee;

console.log(details);
```

Output

```javascript
{
    age: 30,
    city: "Mumbai"
}
```

---

# Computed Property Names

Allows property names to be dynamic.

Example

```javascript
const key = "email";

const user = {
    [key]: "john@gmail.com"
};

console.log(user);
```

Output

```javascript
{
    email: "john@gmail.com"
}
```

---

# Optional Chaining (?.)

Safely accesses nested properties.

Example

```javascript
const employee = {};

console.log(employee.address?.city);
```

Output

```
undefined
```

No error is thrown.

---

# Without Optional Chaining

```javascript
employee.address.city;
```

Throws

```
TypeError
```

---

# Nullish Coalescing (??)

Provides a default value only when the left side is `null` or `undefined`.

Example

```javascript
const employee = {
    city: null
};

console.log(employee.city ?? "Mumbai");
```

Output

```
Mumbai
```

---

# Object Iteration

## Using for...in

```javascript
const employee = {
    name: "John",
    age: 30
};

for (const key in employee) {
    console.log(key, employee[key]);
}
```

Output

```
name John
age 30
```

---

## Using Object.entries()

```javascript
for (const [key, value] of Object.entries(employee)) {
    console.log(key, value);
}
```

---

# Dynamic Property Access

```javascript
const key = "name";

console.log(employee[key]);
```

---

# Deleting Dynamic Properties

```javascript
const key = "age";

delete employee[key];
```

---

# Object Performance Tips

❌ Avoid repeatedly creating the same object inside loops.

```javascript
for (let i = 0; i < 1000; i++) {
    const obj = {
        value: i
    };
}
```

If possible, reuse objects or create only when needed.

---

Avoid unnecessary deep copies.

Deep copying large objects can impact performance.

---

# Best Practices

✅ Use object literals.

✅ Prefer spread operator over `Object.assign()` for readability.

✅ Use optional chaining for nested properties.

✅ Use nullish coalescing instead of `||` for default values.

✅ Use `const` whenever possible.

---

# Common Mistakes

Using arrow functions for object methods.

Assuming spread performs a deep copy.

Calling `JSON.parse()` on an object instead of a JSON string.

Using `||` when `??` is required.

Forgetting to handle nested properties safely.

---

# Objects in Lightning Web Components

Update an Account

```javascript
this.account = {
    ...this.account,
    Name: "Salesforce"
};
```

---

Update a Single Field

```javascript
this.contact = {
    ...this.contact,
    Email: event.target.value
};
```

---

Safe Access

```javascript
const city = this.account?.BillingAddress?.city;
```

---

Default Value

```javascript
const phone = this.account.Phone ?? "Not Available";
```

---

Convert Object to JSON

```javascript
const payload = JSON.stringify(this.account);
```

---

Parse API Response

```javascript
const response = JSON.parse(jsonResponse);
```

---

# Interview Questions (With Answers)

## 1. What is the `this` keyword?

**Answer**

`this` refers to the object that is currently executing the function. In object methods, it usually refers to the object itself.

---

## 2. Why should arrow functions not be used as object methods?

**Answer**

Arrow functions do not have their own `this`. They inherit it from the surrounding scope, which often leads to unexpected results.

---

## 3. Difference between shallow copy and deep copy?

**Answer**

A shallow copy copies only the first level of an object. Nested objects still share references.

A deep copy creates completely independent copies of all nested objects.

---

## 4. What does JSON.stringify() do?

**Answer**

It converts a JavaScript object into a JSON string.

---

## 5. What does JSON.parse() do?

**Answer**

It converts a JSON string into a JavaScript object.

---

## 6. What is optional chaining?

**Answer**

Optional chaining (`?.`) safely accesses nested properties without throwing an error if an intermediate property is `null` or `undefined`.

---

## 7. Difference between `||` and `??`?

**Answer**

`||` returns the right value for any falsy value (`0`, `""`, `false`, `null`, `undefined`, `NaN`).

`??` returns the right value only when the left value is `null` or `undefined`.

---

## 8. What are computed property names?

**Answer**

Computed property names allow property keys to be generated dynamically using square brackets.

---

# Output-Based Questions (With Answers)

## Question 1

```javascript
const user = {
    name: "John",

    greet() {
        console.log(this.name);
    }
};

user.greet();
```

**Answer**

```
John
```

---

## Question 2

```javascript
const obj = {
    city: null
};

console.log(obj.city ?? "Mumbai");
```

**Answer**

```
Mumbai
```

---

## Question 3

```javascript
const key = "email";

const user = {
    [key]: "john@gmail.com"
};

console.log(user.email);
```

**Answer**

```
john@gmail.com
```

---

## Question 4

```javascript
const obj = {};

console.log(obj.address?.city);
```

**Answer**

```
undefined
```

---

## Question 5

```javascript
const employee = {
    name: "John"
};

console.log(JSON.stringify(employee));
```

**Answer**

```json
{"name":"John"}
```

---

## Question 6

```javascript
const json = '{"name":"John"}';

console.log(JSON.parse(json).name);
```

**Answer**

```
John
```

---

## Question 7

```javascript
const person = {
    name: "John",
    address: {
        city: "Mumbai"
    }
};

const copy = {
    ...person
};

copy.address.city = "Delhi";

console.log(person.address.city);
```

**Answer**

```
Delhi
```

Spread creates a shallow copy.

---

# Scenario-Based Questions (With Answers)

## Scenario 1

You want to update only the `Phone` field of a Contact while keeping all other fields unchanged.

**Answer**

```javascript
this.contact = {
    ...this.contact,
    Phone: event.target.value
};
```

---

## Scenario 2

You receive a JSON response from an external API and need to convert it into a JavaScript object.

**Answer**

```javascript
const response = JSON.parse(jsonResponse);
```

---

## Scenario 3

You need to send an Account object to an Apex REST API.

**Answer**

```javascript
const payload = JSON.stringify(this.account);
```

---

## Scenario 4

An Account may or may not have a Billing Address. You need to display the city without causing an error.

**Answer**

```javascript
const city = this.account?.BillingAddress?.city;
```

---

## Scenario 5

The `Phone` field can be `null`. Display `"Not Available"` if no phone number exists.

**Answer**

```javascript
const phone = this.account.Phone ?? "Not Available";
```

---

# Practice Questions

1. Write an object method that prints the object's name using `this`.
2. Create a shallow copy using the spread operator.
3. Create a deep copy using `JSON.parse()` and `JSON.stringify()`.
4. Merge three objects into one.
5. Use the rest operator to separate one property from the remaining properties.
6. Create an object with a computed property name.
7. Safely access a nested property using optional chaining.
8. Provide a default value using nullish coalescing.
9. Convert an object to JSON.
10. Convert a JSON string back into an object.
11. Iterate through an object using `for...in`.
12. Iterate through an object using `Object.entries()`.
13. Delete a property using a dynamic key.
14. Demonstrate the difference between `||` and `??`.
15. Explain the difference between shallow copy and deep copy with examples.
