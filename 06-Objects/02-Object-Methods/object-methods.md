# 📁 06 - Objects (Part 2 - Object Methods)

# Introduction

JavaScript provides several built-in methods through the `Object` class to work with objects.

These methods help us:

- Retrieve keys and values.
- Copy objects.
- Merge objects.
- Freeze or seal objects.
- Create new objects.
- Check property existence.
- Work with prototypes.
- Convert objects into arrays and vice versa.

Many of these methods are frequently used in Lightning Web Components (LWC).

---

# 1. Object.keys()

Returns an array containing all enumerable property names (keys).

### Syntax

```javascript
Object.keys(object)
```

Example

```javascript
const employee = {
    name: "John",
    age: 30,
    city: "Mumbai"
};

console.log(Object.keys(employee));
```

Output

```javascript
["name", "age", "city"]
```

---

# 2. Object.values()

Returns an array containing all property values.

### Syntax

```javascript
Object.values(object)
```

Example

```javascript
console.log(Object.values(employee));
```

Output

```javascript
["John", 30, "Mumbai"]
```

---

# 3. Object.entries()

Returns an array of key-value pairs.

### Syntax

```javascript
Object.entries(object)
```

Example

```javascript
console.log(Object.entries(employee));
```

Output

```javascript
[
    ["name", "John"],
    ["age", 30],
    ["city", "Mumbai"]
]
```

---

# Object.keys() vs Object.values() vs Object.entries()

| Method | Returns |
|----------|----------|
| Object.keys() | Array of keys |
| Object.values() | Array of values |
| Object.entries() | Array of key-value pairs |

---

# Looping Using Object.entries()

```javascript
const employee = {
    name: "John",
    age: 30
};

for (const [key, value] of Object.entries(employee)) {
    console.log(`${key}: ${value}`);
}
```

Output

```
name: John
age: 30
```

---

# 4. Object.assign()

Copies properties from one or more objects into another object.

### Syntax

```javascript
Object.assign(target, source1, source2)
```

Example

```javascript
const obj1 = {
    name: "John"
};

const obj2 = {
    age: 30
};

const merged = Object.assign({}, obj1, obj2);

console.log(merged);
```

Output

```javascript
{
    name: "John",
    age: 30
}
```

---

# Object.assign() vs Spread Operator

Object.assign()

```javascript
Object.assign({}, obj)
```

Spread Operator

```javascript
const copy = {
    ...obj
};
```

Both create shallow copies.

---

# 5. Object.freeze()

Makes an object completely immutable.

### Syntax

```javascript
Object.freeze(object)
```

Example

```javascript
const employee = {
    name: "John"
};

Object.freeze(employee);

employee.name = "David";

console.log(employee.name);
```

Output

```
John
```

Modification is ignored (or throws an error in strict mode).

---

# What freeze() Prevents

- Adding properties
- Updating properties
- Deleting properties

---

# 6. Object.seal()

Prevents adding or deleting properties.

Existing properties can still be updated.

Example

```javascript
const employee = {
    name: "John"
};

Object.seal(employee);

employee.name = "David";

console.log(employee.name);
```

Output

```
David
```

---

Attempting to add a property

```javascript
employee.city = "Mumbai";
```

Ignored.

---

# freeze() vs seal()

| freeze() | seal() |
|-----------|---------|
| No add | No add |
| No delete | No delete |
| No update | Update allowed |

---

# 7. Object.hasOwn()

Introduced in ES2022.

Checks whether an object directly owns a property.

### Syntax

```javascript
Object.hasOwn(object, property)
```

Example

```javascript
const employee = {
    name: "John"
};

console.log(Object.hasOwn(employee, "name"));
```

Output

```
true
```

---

# 8. hasOwnProperty()

Checks whether an object owns a property.

Example

```javascript
console.log(employee.hasOwnProperty("name"));
```

Output

```
true
```

---

Object.hasOwn() vs hasOwnProperty()

| Object.hasOwn() | hasOwnProperty() |
|-----------------|------------------|
| Modern | Older |
| Static method | Instance method |

---

# 9. Object.fromEntries()

Converts key-value pairs into an object.

Example

```javascript
const entries = [
    ["name", "John"],
    ["age", 30]
];

const employee = Object.fromEntries(entries);

console.log(employee);
```

Output

```javascript
{
    name: "John",
    age: 30
}
```

---

# 10. Object.create()

Creates a new object using another object as its prototype.

Example

```javascript
const person = {
    greet() {
        console.log("Hello");
    }
};

const employee = Object.create(person);

employee.name = "John";

employee.greet();
```

Output

```
Hello
```

---

# 11. Object.is()

Compares two values.

Similar to `===`, but handles special cases.

Example

```javascript
console.log(Object.is(10, 10));
```

Output

```
true
```

---

Special Case

```javascript
console.log(Object.is(NaN, NaN));
```

Output

```
true
```

Unlike

```javascript
console.log(NaN === NaN);
```

Output

```
false
```

---

# 12. Object.getOwnPropertyNames()

Returns all property names.

Example

```javascript
const employee = {
    name: "John",
    age: 30
};

console.log(Object.getOwnPropertyNames(employee));
```

Output

```javascript
["name", "age"]
```

---

# 13. Object.getPrototypeOf()

Returns an object's prototype.

Example

```javascript
const employee = {};

console.log(Object.getPrototypeOf(employee));
```

Output

```javascript
{}
```

---

# 14. Object.setPrototypeOf()

Sets an object's prototype.

Example

```javascript
const person = {
    greet() {
        console.log("Hello");
    }
};

const employee = {};

Object.setPrototypeOf(employee, person);

employee.greet();
```

Output

```
Hello
```

---

# Method Summary

| Method | Purpose |
|----------|----------|
| Object.keys() | Get keys |
| Object.values() | Get values |
| Object.entries() | Get key-value pairs |
| Object.assign() | Merge/Copy objects |
| Object.freeze() | Prevent all changes |
| Object.seal() | Prevent add/delete |
| Object.hasOwn() | Check property |
| hasOwnProperty() | Check property |
| Object.fromEntries() | Array → Object |
| Object.create() | Create object |
| Object.is() | Compare values |
| Object.getOwnPropertyNames() | Get property names |
| Object.getPrototypeOf() | Get prototype |
| Object.setPrototypeOf() | Set prototype |

---

# Best Practices

✅ Use the spread operator or `Object.assign()` for shallow copies.

✅ Use `Object.freeze()` for configuration objects.

✅ Use `Object.keys()` when iterating over property names.

✅ Use `Object.entries()` when both keys and values are needed.

✅ Prefer `Object.hasOwn()` in modern JavaScript.

---

# Common Mistakes

Using `Object.keys()` expecting values.

Using `Object.freeze()` expecting nested objects to become immutable.

Assuming `Object.assign()` performs a deep copy.

Using `hasOwnProperty()` on values that may not inherit from `Object.prototype`.

---

# Object Methods in Lightning Web Components

Display field names

```javascript
const fields = Object.keys(this.account);
```

Display field values

```javascript
const values = Object.values(this.account);
```

Loop through fields

```javascript
for (const [field, value] of Object.entries(this.account)) {
    console.log(field, value);
}
```

Copy Account

```javascript
const accountCopy = {
    ...this.account
};
```

Merge Objects

```javascript
const updatedAccount = Object.assign({}, account, changes);
```

---

# Interview Questions (With Answers)

## 1. What does Object.keys() return?

**Answer**

It returns an array containing all enumerable property names of an object.

---

## 2. Difference between Object.keys() and Object.values()?

**Answer**

`Object.keys()` returns property names.

`Object.values()` returns property values.

---

## 3. Difference between Object.freeze() and Object.seal()?

**Answer**

`Object.freeze()` prevents adding, deleting, and updating properties.

`Object.seal()` prevents adding and deleting properties but allows updating existing properties.

---

## 4. What does Object.assign() do?

**Answer**

It copies properties from one or more source objects into a target object. It is commonly used for shallow copying and merging objects.

---

## 5. Difference between Object.entries() and Object.fromEntries()?

**Answer**

`Object.entries()` converts an object into an array of key-value pairs.

`Object.fromEntries()` converts an array of key-value pairs back into an object.

---

## 6. What is Object.hasOwn()?

**Answer**

`Object.hasOwn()` checks whether an object directly owns a property. It is the modern alternative to `hasOwnProperty()`.

---

## 7. Does Object.freeze() create a deep freeze?

**Answer**

No. It only freezes the first level of the object. Nested objects remain mutable unless they are frozen separately.

---

## 8. What is Object.is() used for?

**Answer**

It compares two values like `===`, but correctly handles special cases such as `NaN` and `-0`.

---

# Output-Based Questions (With Answers)

## Question 1

```javascript
const obj = {
    a: 1,
    b: 2
};

console.log(Object.keys(obj));
```

**Answer**

```javascript
["a", "b"]
```

---

## Question 2

```javascript
const obj = {
    a: 1,
    b: 2
};

console.log(Object.values(obj));
```

**Answer**

```javascript
[1, 2]
```

---

## Question 3

```javascript
const obj = {
    a: 1
};

Object.freeze(obj);

obj.a = 5;

console.log(obj.a);
```

**Answer**

```
1
```

---

## Question 4

```javascript
const obj = {
    a: 1
};

Object.seal(obj);

obj.a = 10;

console.log(obj.a);
```

**Answer**

```
10
```

---

## Question 5

```javascript
console.log(Object.is(NaN, NaN));
```

**Answer**

```
true
```

---

## Question 6

```javascript
const entries = [
    ["name", "John"],
    ["age", 30]
];

console.log(Object.fromEntries(entries));
```

**Answer**

```javascript
{
    name: "John",
    age: 30
}
```

---

## Question 7

```javascript
const obj = {
    x: 10
};

console.log(Object.hasOwn(obj, "x"));
```

**Answer**

```
true
```

---

# Scenario-Based Questions (With Answers)

## Scenario 1

You need to display all field names of an Account returned from Apex.

**Answer**

```javascript
const fields = Object.keys(this.account);
```

---

## Scenario 2

You want to iterate through every field and value of an object.

**Answer**

```javascript
for (const [key, value] of Object.entries(this.account)) {
    console.log(key, value);
}
```

---

## Scenario 3

You want to merge edited values into an existing Account object.

**Answer**

```javascript
const updatedAccount = Object.assign({}, this.account, changes);
```

---

## Scenario 4

You want to prevent accidental modification of a configuration object.

**Answer**

```javascript
Object.freeze(config);
```

---

## Scenario 5

You receive key-value pairs from an API and need to convert them into an object.

**Answer**

```javascript
const obj = Object.fromEntries(apiResponse);
```

---

# Practice Questions

1. Print all keys of an object.
2. Print all values of an object.
3. Print all key-value pairs using `Object.entries()`.
4. Merge two objects using `Object.assign()`.
5. Freeze an object and attempt to modify it.
6. Seal an object and attempt to add a new property.
7. Check whether an object owns a property using `Object.hasOwn()`.
8. Convert an array of entries into an object using `Object.fromEntries()`.
9. Compare `NaN` using both `===` and `Object.is()`.
10. Create an object using `Object.create()`.
11. Retrieve an object's prototype.
12. Set a new prototype for an object.
13. Print all property names using `Object.getOwnPropertyNames()`.
14. Explain the difference between `Object.freeze()` and `Object.seal()` with examples.
15. Explain the difference between `Object.entries()` and `Object.fromEntries()` with examples.
