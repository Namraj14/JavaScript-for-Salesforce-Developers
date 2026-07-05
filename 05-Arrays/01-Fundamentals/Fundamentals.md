# 📁 05 - Arrays (Part 1 - Fundamentals)

# What is an Array?

An Array is a special JavaScript object used to store multiple values in a single variable.

Instead of creating multiple variables:

```javascript
let student1 = "John";
let student2 = "David";
let student3 = "Alice";
```

You can use an array:

```javascript
let students = ["John", "David", "Alice"];
```

---

# Why Do We Need Arrays?

Arrays help us:

- Store multiple values together.
- Access data using indexes.
- Iterate through collections.
- Perform searching, sorting, filtering, and transformations.
- Manage lists returned from APIs or databases.

Arrays are heavily used in Lightning Web Components to store records returned from Apex.

---

# Characteristics of Arrays

- Ordered collection.
- Zero-based indexing.
- Can store different data types.
- Dynamic in size.
- Arrays are objects.
- Stored by reference.

Example:

```javascript
let data = [
    "John",
    25,
    true,
    null,
    { city: "Mumbai" }
];
```

---

# Creating Arrays

## Using Array Literal (Recommended)

```javascript
let fruits = ["Apple", "Banana", "Orange"];
```

---

## Using Array Constructor

```javascript
let fruits = new Array("Apple", "Banana", "Orange");
```

Not recommended.

---

## Empty Array

```javascript
let records = [];
```

---

# Array Index

Every element has an index.

```text
["Apple","Banana","Orange"]

   0       1        2
```

Indexes always begin with **0**.

---

# Accessing Elements

```javascript
let fruits = ["Apple", "Banana", "Orange"];

console.log(fruits[0]);
```

Output

```
Apple
```

---

```javascript
console.log(fruits[2]);
```

Output

```
Orange
```

---

Invalid Index

```javascript
console.log(fruits[10]);
```

Output

```
undefined
```

---

# Updating Elements

```javascript
let fruits = ["Apple", "Banana", "Orange"];

fruits[1] = "Mango";

console.log(fruits);
```

Output

```javascript
["Apple","Mango","Orange"]
```

---

# Array Length

Returns total elements.

```javascript
let fruits = ["Apple", "Banana", "Orange"];

console.log(fruits.length);
```

Output

```
3
```

---

# Last Element

```javascript
let fruits = ["Apple", "Banana", "Orange"];

console.log(fruits[fruits.length - 1]);
```

Output

```
Orange
```

---

# Arrays Can Store Different Types

```javascript
let values = [
    "John",
    25,
    true,
    null,
    undefined,
    [1,2,3],
    {
        city:"Mumbai"
    }
];
```

---

# Nested Arrays

```javascript
let matrix = [

    [1,2],

    [3,4],

    [5,6]

];
```

Access

```javascript
console.log(matrix[1][0]);
```

Output

```
3
```

---

# Arrays are Objects

```javascript
let fruits = ["Apple"];

console.log(typeof fruits);
```

Output

```
object
```

To check whether something is an array:

```javascript
Array.isArray(fruits);
```

Output

```
true
```

---

# Array Reference

Arrays are copied by reference.

```javascript
let arr1 = [1,2,3];

let arr2 = arr1;

arr2[0] = 100;

console.log(arr1);
```

Output

```javascript
[100,2,3]
```

Both variables point to the same array.

---

# Copying Arrays

Wrong

```javascript
let arr2 = arr1;
```

Correct

```javascript
let arr2 = [...arr1];
```

Example

```javascript
let arr1 = [1,2,3];

let arr2 = [...arr1];

arr2[0] = 100;

console.log(arr1);
```

Output

```javascript
[1,2,3]
```

---

# Array Destructuring

Extract values easily.

```javascript
let fruits = ["Apple","Banana","Orange"];

let [first,second,third] = fruits;

console.log(first);
```

Output

```
Apple
```

---

Skipping Values

```javascript
let [first,,third] = fruits;
```

---

Using Rest Operator

```javascript
let [first,...others] = fruits;

console.log(others);
```

Output

```javascript
["Banana","Orange"]
```

---

# Empty Slots

```javascript
let arr = [];

console.log(arr.length);
```

Output

```
0
```

---

# const Arrays

Arrays declared with `const` cannot be reassigned, but their contents can be modified.

```javascript
const fruits = ["Apple"];

fruits.push("Banana");
```

Valid.

---

```javascript
fruits = [];
```

Error.

---

# Array Equality

```javascript
let a = [1,2];

let b = [1,2];

console.log(a === b);
```

Output

```
false
```

Reason:

Different memory references.

---

```javascript
let a = [1,2];

let b = a;

console.log(a === b);
```

Output

```
true
```

---

# Sparse Arrays

Arrays can contain empty slots.

```javascript
let arr = [];

arr[5] = "Hello";

console.log(arr);
```

Output

```javascript
[empty × 5, "Hello"]
```

Length

```
6
```

---

# Best Practices

✅ Use array literals (`[]`) instead of `new Array()`.

✅ Use `const` if the array reference doesn't change.

✅ Use meaningful variable names.

✅ Check arrays using `Array.isArray()`.

✅ Copy arrays using the spread operator when needed.

---

# Common Mistakes

Assigning one array to another expecting a copy.

```javascript
let a = [1,2];

let b = a;
```

Both refer to the same array.

---

Comparing arrays.

```javascript
[1,2] === [1,2]
```

Returns

```
false
```

---

Using `typeof` to check arrays.

```javascript
typeof []
```

Returns

```
object
```

Use

```javascript
Array.isArray()
```

---

Accessing an invalid index.

Returns

```
undefined
```

---

# Arrays in Lightning Web Components

Apex usually returns a list of records.

```javascript
accounts = [];
```

Store records

```javascript
this.accounts = result;
```

Selected rows

```javascript
selectedRows = [];
```

Store picklist values

```javascript
options = [];
```

Store datatable columns

```javascript
columns = [];
```

Store errors

```javascript
errors = [];
```

---

# Interview Questions (With Answers)

## 1. What is an Array?

**Answer**

An array is a special JavaScript object that stores multiple values in a single variable. Elements are accessed using zero-based indexes.

---

## 2. Why are arrays considered objects?

**Answer**

Arrays are implemented as specialized objects in JavaScript. Therefore, `typeof []` returns `"object"`.

---

## 3. How do you check if a variable is an array?

**Answer**

Use:

```javascript
Array.isArray(variable)
```

Example

```javascript
Array.isArray([1,2,3]);
```

Returns

```
true
```

---

## 4. Why does `[1,2] === [1,2]` return false?

**Answer**

Each array is stored at a different memory location. `===` compares references, not contents.

---

## 5. Difference between an Array and an Object?

**Answer**

| Array | Object |
|--------|---------|
| Ordered collection | Key-value collection |
| Indexed by numbers | Indexed by keys |
| Best for lists | Best for structured data |

---

## 6. Can an array store different data types?

**Answer**

Yes. JavaScript arrays can contain strings, numbers, booleans, objects, arrays, functions, `null`, and `undefined` in the same array.

---

## 7. What is array destructuring?

**Answer**

Array destructuring extracts array elements into variables.

Example

```javascript
const colors = ["Red", "Green"];

const [first, second] = colors;
```

---

## 8. Can you modify a `const` array?

**Answer**

Yes. You can modify its contents, but you cannot reassign the array.

```javascript
const arr = [1];
arr.push(2); // Valid
arr = [];    // Error
```

---

# Output-Based Questions (With Answers)

## Question 1

```javascript
const fruits = ["Apple", "Banana", "Orange"];

console.log(fruits[1]);
```

**Answer**

```
Banana
```

---

## Question 2

```javascript
const arr = [10,20,30];

console.log(arr.length);
```

**Answer**

```
3
```

---

## Question 3

```javascript
const arr = [1,2];

const copy = arr;

copy[0] = 100;

console.log(arr);
```

**Answer**

```javascript
[100,2]
```

Both variables reference the same array.

---

## Question 4

```javascript
const arr = [1,2];

const copy = [...arr];

copy[0] = 100;

console.log(arr);
```

**Answer**

```javascript
[1,2]
```

The spread operator creates a shallow copy.

---

## Question 5

```javascript
console.log(typeof []);
```

**Answer**

```
object
```

---

## Question 6

```javascript
console.log(Array.isArray([]));
```

**Answer**

```
true
```

---

## Question 7

```javascript
const colors = ["Red", "Green", "Blue"];

const [first, second] = colors;

console.log(first);
console.log(second);
```

**Answer**

```
Red
Green
```

---

## Question 8

```javascript
const arr = [];

arr[5] = "Hello";

console.log(arr.length);
```

**Answer**

```
6
```

---

# Scenario-Based Questions (With Answers)

## Scenario 1

An Apex method returns a list of Accounts. Where should you store the response?

**Answer**

```javascript
accounts = [];

getAccounts()
    .then(result => {
        this.accounts = result;
    });
```

---

## Scenario 2

You need to keep track of selected rows in a Lightning Datatable.

**Answer**

```javascript
selectedRows = [];
```

---

## Scenario 3

You need to create a copy of an array before modifying it to avoid changing the original.

**Answer**

```javascript
const copiedAccounts = [...this.accounts];
```

---

## Scenario 4

You receive data from an unknown source. How do you verify it is an array?

**Answer**

```javascript
if (Array.isArray(data)) {
    console.log("Valid Array");
}
```

---

## Scenario 5

You need the last Account from an array.

**Answer**

```javascript
const lastAccount = this.accounts[this.accounts.length - 1];
```

---

# Practice Questions

1. Create an array containing five fruits.
2. Print the first, middle, and last element.
3. Update the third element of an array.
4. Find the length of an array.
5. Print the last element without using a fixed index.
6. Create a nested array and access one inner value.
7. Copy an array using the spread operator.
8. Demonstrate that arrays are copied by reference.
9. Use array destructuring to extract the first two elements.
10. Check whether a variable is an array.
11. Create a sparse array with an element at index `10`.
12. Compare two arrays with identical values using `===` and explain the result.
