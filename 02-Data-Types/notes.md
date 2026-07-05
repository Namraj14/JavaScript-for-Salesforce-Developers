# Data Types in JavaScript

## What is a Data Type?

A data type defines the kind of value a variable can store. It tells JavaScript how the value should be stored in memory and what operations can be performed on it.

Examples:

```javascript
let name = "John";      // String
let age = 25;           // Number
let isAdmin = true;     // Boolean
```

Every value in JavaScript has a data type.

---

# Why Are Data Types Important?

Understanding data types helps you:

- Store data correctly.
- Perform valid operations.
- Prevent unexpected bugs.
- Write cleaner and more efficient code.
- Handle API responses correctly.
- Build reliable Lightning Web Components (LWCs).

---

# JavaScript is Dynamically Typed

Unlike Java or Apex, JavaScript does **not** require you to declare a variable's type.

```javascript
let value = 10;

value = "Salesforce";

value = true;
```

The same variable can hold different types over time.

---

# Categories of Data Types

JavaScript has **8 data types**, divided into two categories:

## Primitive Data Types

Primitive values are immutable and stored by value.

- String
- Number
- BigInt
- Boolean
- Undefined
- Null
- Symbol

## Non-Primitive (Reference) Data Types

Reference values are stored by reference.

- Object

Arrays, Functions, Dates, Maps, Sets, and Classes are all specialized objects.

---

# Primitive vs Reference Types

## Primitive

Stored directly in memory.

```javascript
let a = 10;
let b = a;

b = 20;

console.log(a);
console.log(b);
```

Output:

```
10
20
```

Changing `b` does not affect `a`.

---

## Reference

Objects store a reference (memory address).

```javascript
let person1 = {
    name: "John"
};

let person2 = person1;

person2.name = "David";

console.log(person1.name);
```

Output:

```
David
```

Both variables point to the same object.

---

# 1. String

Stores text.

Example:

```javascript
let language = "JavaScript";
```

Strings can use:

```javascript
"Double Quotes"

'Single Quotes'

`Backticks`
```

---

## Template Literals

```javascript
let name = "John";

console.log(`Hello ${name}`);
```

Output:

```
Hello John
```

---

## Common String Methods

```javascript
let text = "Salesforce";
```

```javascript
text.length
```

```javascript
text.toUpperCase()
```

```javascript
text.toLowerCase()
```

```javascript
text.includes("force")
```

```javascript
text.startsWith("Sales")
```

```javascript
text.endsWith("force")
```

```javascript
text.substring(0,5)
```

```javascript
text.slice(0,5)
```

```javascript
text.replace("Sales","Service")
```

```javascript
text.trim()
```

```javascript
text.split(" ")
```

---

# 2. Number

Represents both integers and decimals.

```javascript
let age = 25;

let price = 99.99;
```

Unlike Apex or Java, JavaScript has only one numeric type.

Examples:

```javascript
100

3.14

-20

0
```

Special values:

```javascript
Infinity

-Infinity

NaN
```

---

## NaN

Means "Not a Number".

```javascript
console.log(10/"abc");
```

Output:

```
NaN
```

---

# Number Methods

```javascript
price.toFixed(2)

Number("10")

parseInt("100")

parseFloat("20.55")

isNaN(value)

isFinite(value)
```

---

# 3. Boolean

Represents true or false.

```javascript
let isLoggedIn = true;

let isLoading = false;
```

Mostly used in:

- Conditions
- Loops
- Validation
- UI rendering

---

# Truthy and Falsy Values

Falsy values:

```javascript
false

0

-0

0n

""

null

undefined

NaN
```

Everything else is truthy.

Example:

```javascript
if("Salesforce"){

}
```

Runs because the string is truthy.

---

# 4. Undefined

Means a variable exists but has no assigned value.

```javascript
let city;

console.log(city);
```

Output:

```
undefined
```

---

# 5. Null

Represents the intentional absence of a value.

```javascript
let selectedAccount = null;
```

Difference:

Undefined → not assigned

Null → intentionally empty

---

# Undefined vs Null

```javascript
let a;

let b = null;
```

```
a → undefined

b → null
```

---

# 6. BigInt

Used for extremely large integers.

```javascript
const population = 9007199254740995n;
```

Normal numbers lose precision after:

```
9007199254740991
```

BigInt avoids that.

---

# 7. Symbol

Creates unique identifiers.

```javascript
const id = Symbol();
```

Every Symbol is unique.

```javascript
Symbol() === Symbol()
```

Output:

```
false
```

Mostly used in advanced JavaScript libraries and frameworks.

---

# 8. Object

Stores collections of data.

```javascript
const employee = {

    name: "John",

    age: 30

};
```

Objects contain key-value pairs.

---

## Nested Objects

```javascript
const account = {

    name: "ABC",

    address: {

        city: "Mumbai"

    }

};
```

---

# Arrays

Arrays are objects.

```javascript
const fruits = [

"Apple",

"Orange",

"Mango"

];
```

Check:

```javascript
typeof fruits
```

Output:

```
object
```

Use:

```javascript
Array.isArray(fruits)
```

---

# Functions

Functions are also objects.

```javascript
function demo(){

}
```

```
typeof demo
```

Output:

```
function
```

---

# typeof Operator

Returns the data type.

Examples:

```javascript
typeof "John"
```

```
string
```

```javascript
typeof 25
```

```
number
```

```javascript
typeof true
```

```
boolean
```

```javascript
typeof undefined
```

```
undefined
```

```javascript
typeof {}
```

```
object
```

```javascript
typeof []
```

```
object
```

```javascript
typeof function(){}
```

```
function
```

---

# typeof null

One of JavaScript's oldest bugs.

```javascript
typeof null
```

Output:

```
object
```

Although `null` is a primitive value.

---

# Copy by Value

Primitive types copy the value.

```javascript
let x = 10;

let y = x;
```

Changing `y` does not change `x`.

---

# Copy by Reference

Objects copy the reference.

```javascript
const user1 = {

name:"John"

};

const user2 = user1;
```

Changing one changes both.

---

# Equality Operators

Loose Equality

```javascript
==
```

Converts types before comparing.

```javascript
5 == "5"
```

Output:

```
true
```

---

Strict Equality

```javascript
===
```

Compares both value and type.

```javascript
5 === "5"
```

Output:

```
false
```

Always prefer `===`.

---

# Type Conversion

Implicit Conversion

JavaScript converts automatically.

```javascript
5 + "5"
```

Output:

```
55
```

---

Explicit Conversion

```javascript
Number("100")

String(100)

Boolean(1)
```

---

# Type Coercion

Automatic conversion performed by JavaScript.

Examples:

```javascript
"5" * 2
```

Output:

```
10
```

```javascript
"5" + 2
```

Output:

```
52
```

Understanding coercion helps avoid many bugs.

---

# Best Practices

✅ Use `===` instead of `==`.

✅ Use `const` whenever possible.

✅ Check arrays with `Array.isArray()`.

✅ Handle `null` and `undefined` explicitly.

✅ Avoid relying on automatic type coercion.

---

# Common Mistakes

Using `==` instead of `===`.

Assuming `typeof null` returns `"null"`.

Comparing objects using `===`.

```javascript
{} === {}
```

Output:

```
false
```

Forgetting that arrays are objects.

Confusing `null` and `undefined`.

---

# Data Types in Lightning Web Components

Common property types:

```javascript
accounts = [];

selectedAccount = {};

isLoading = false;

errorMessage = "";

pageNumber = 1;

record = null;
```

Examples:

Store Apex responses in arrays.

Store selected records as objects.

Store loading indicators as booleans.

Store search text as strings.

Store record IDs as strings.

Store optional values as null.

---

# Interview Questions

## Beginner

- What are data types in JavaScript?
- How many data types are there?
- What is the difference between primitive and reference types?
- What is `typeof`?
- Why is `typeof null` `"object"`?
- What is `NaN`?
- What is the difference between `null` and `undefined`?
- What are truthy and falsy values?

---

## Intermediate

- Explain memory allocation for primitive and reference values.
- What is type coercion?
- Explain implicit vs explicit conversion.
- Difference between `==` and `===`.
- Why are arrays considered objects?
- Why are functions objects?

---

## Salesforce Interview Questions

- Why is an Apex response usually stored in an array or object?
- Why do we use boolean variables for loading spinners?
- How do you safely check if an Apex response returned no data?
- Why should you initialize arrays before using them in LWC?
- Why is `===` preferred in Lightning Web Components?
