# 📁 05 - Arrays (Part 3 - Advanced Array Methods)

# Introduction

Advanced array methods are called **Higher-Order Array Methods** because they accept a function (callback) as an argument.

These methods are among the most commonly asked JavaScript and LWC interview topics.

Most of them do **not** modify the original array.

---

# What is a Callback Function?

A callback is a function passed as an argument to another function.

Example

```javascript
const numbers = [1, 2, 3];

numbers.forEach(function (num) {
    console.log(num);
});
```

The function passed to `forEach()` is called a callback.

---

# Arrow Function Syntax

Most array methods use arrow functions.

```javascript
array.method((element) => {
    // logic
});
```

With index

```javascript
array.method((element, index) => {
    // logic
});
```

With array

```javascript
array.method((element, index, array) => {
    // logic
});
```

---

# 1. forEach()

Executes a function for every element.

Returns **undefined**.

Does **not** create a new array.

### Syntax

```javascript
array.forEach((element, index, array) => {
    // code
});
```

Example

```javascript
const numbers = [10, 20, 30];

numbers.forEach(num => {
    console.log(num);
});
```

Output

```
10
20
30
```

---

# 2. map()

Creates a new array after transforming every element.

Original array remains unchanged.

### Syntax

```javascript
array.map(callback)
```

Example

```javascript
const numbers = [1, 2, 3];

const doubled = numbers.map(num => num * 2);

console.log(doubled);
```

Output

```javascript
[2,4,6]
```

---

# map() vs forEach()

| map() | forEach() |
|--------|-----------|
| Returns new array | Returns undefined |
| Used for transformation | Used for iteration |
| Chainable | Not useful for chaining |

---

# 3. filter()

Returns elements that satisfy a condition.

### Syntax

```javascript
array.filter(callback)
```

Example

```javascript
const numbers = [10, 20, 30, 40];

const result = numbers.filter(num => num > 20);

console.log(result);
```

Output

```javascript
[30,40]
```

---

# 4. find()

Returns the **first matching element**.

Example

```javascript
const numbers = [5, 10, 15, 20];

const value = numbers.find(num => num > 10);

console.log(value);
```

Output

```
15
```

---

# 5. findIndex()

Returns index of first matching element.

Example

```javascript
const numbers = [5, 10, 15];

console.log(numbers.findIndex(num => num > 10));
```

Output

```
2
```

---

# 6. some()

Returns true if **at least one** element satisfies the condition.

Example

```javascript
const marks = [30, 40, 90];

console.log(marks.some(mark => mark > 80));
```

Output

```
true
```

---

# 7. every()

Returns true only if **all** elements satisfy the condition.

Example

```javascript
const marks = [60, 70, 80];

console.log(marks.every(mark => mark >= 35));
```

Output

```
true
```

---

# some() vs every()

| some() | every() |
|----------|----------|
| One match required | All must match |
| Returns true quickly | Checks until failure |

---

# 8. reduce()

Reduces an array into a single value.

### Syntax

```javascript
array.reduce((accumulator, currentValue) => {

}, initialValue)
```

Example

```javascript
const numbers = [10, 20, 30];

const total = numbers.reduce((sum, num) => sum + num, 0);

console.log(total);
```

Output

```
60
```

---

Find Maximum

```javascript
const max = [10, 50, 30].reduce((a, b) => Math.max(a, b));
```

Output

```
50
```

---

# 9. reduceRight()

Works like reduce(), but starts from the right.

Example

```javascript
const text = ["A", "B", "C"];

console.log(text.reduceRight((a, b) => a + b));
```

Output

```
CBA
```

---

# 10. flat()

Flattens nested arrays.

Example

```javascript
const arr = [1, [2, 3], [4, 5]];

console.log(arr.flat());
```

Output

```javascript
[1,2,3,4,5]
```

---

Depth

```javascript
const arr = [1, [2, [3]]];

console.log(arr.flat(2));
```

Output

```javascript
[1,2,3]
```

---

# 11. flatMap()

Combines map() and flat().

Example

```javascript
const arr = [1, 2, 3];

const result = arr.flatMap(num => [num, num * 2]);

console.log(result);
```

Output

```javascript
[1,2,2,4,3,6]
```

---

# 12. Array.from()

Creates an array from iterable objects.

Example

```javascript
console.log(Array.from("Hello"));
```

Output

```javascript
["H","e","l","l","o"]
```

---

# 13. Array.of()

Creates an array from arguments.

Example

```javascript
console.log(Array.of(1,2,3));
```

Output

```javascript
[1,2,3]
```

---

Difference

```javascript
new Array(5)
```

Creates

```
[empty × 5]
```

Whereas

```javascript
Array.of(5)
```

Creates

```javascript
[5]
```

---

# 14. keys()

Returns an iterator of indexes.

Example

```javascript
const arr = ["A","B","C"];

for(const key of arr.keys()){

console.log(key);

}
```

Output

```
0
1
2
```

---

# 15. values()

Returns values.

Example

```javascript
for(const value of arr.values()){

console.log(value);

}
```

Output

```
A
B
C
```

---

# 16. entries()

Returns both index and value.

Example

```javascript
for(const [index,value] of arr.entries()){

console.log(index,value);

}
```

Output

```
0 A
1 B
2 C
```

---

# Method Summary

| Method | Returns | Original Array Modified |
|---------|----------|------------------------|
| forEach | undefined | No |
| map | New Array | No |
| filter | New Array | No |
| find | Element | No |
| findIndex | Number | No |
| some | Boolean | No |
| every | Boolean | No |
| reduce | Single Value | No |
| reduceRight | Single Value | No |
| flat | New Array | No |
| flatMap | New Array | No |

---

# Best Practices

✅ Use `map()` for transformations.

✅ Use `filter()` for filtering.

✅ Use `find()` when only one result is required.

✅ Use `some()` for existence checks.

✅ Use `every()` for validation.

✅ Use `reduce()` for calculations.

Avoid using `forEach()` when another method better expresses your intent.

---

# Common Mistakes

Using `forEach()` expecting a returned array.

Using `map()` without returning a value.

Using `filter()` expecting only one element.

Using `find()` expecting an array.

Forgetting the initial value in `reduce()`.

---

# Arrays in Lightning Web Components

Display Account Names

```javascript
const names = this.accounts.map(account => account.Name);
```

---

Filter Active Accounts

```javascript
const activeAccounts = this.accounts.filter(
    account => account.IsActive
);
```

---

Find One Record

```javascript
const account = this.accounts.find(
    account => account.Id === recordId
);
```

---

Calculate Total Amount

```javascript
const total = this.opportunities.reduce(
    (sum, opportunity) => sum + opportunity.Amount,
    0
);
```

---

Check Admin User

```javascript
const isAdmin = users.some(
    user => user.Role === "Admin"
);
```

---

Validate Records

```javascript
const valid = contacts.every(
    contact => contact.Email
);
```

---

# Interview Questions (With Answers)

## 1. Difference between map() and forEach()?

**Answer**

`map()` returns a new array after transforming each element.

`forEach()` only executes a function for each element and returns `undefined`.

---

## 2. Difference between filter() and find()?

**Answer**

`filter()` returns all matching elements in a new array.

`find()` returns only the first matching element.

---

## 3. Difference between some() and every()?

**Answer**

`some()` returns `true` if at least one element matches.

`every()` returns `true` only if all elements match.

---

## 4. What is reduce() used for?

**Answer**

It reduces an array into a single value such as a sum, average, maximum, minimum, or object.

---

## 5. Which method should be used to transform an array?

**Answer**

`map()`

---

## 6. Which method should be used to remove unwanted elements?

**Answer**

`filter()`

---

## 7. Which method should be used to calculate the total Amount of Opportunities?

**Answer**

`reduce()`

---

## 8. Which method should be used to find a record by Id?

**Answer**

`find()`

---

# Output-Based Questions (With Answers)

## Question 1

```javascript
console.log([1,2,3].map(x => x * 2));
```

**Answer**

```javascript
[2,4,6]
```

---

## Question 2

```javascript
console.log([10,20,30].filter(x => x > 15));
```

**Answer**

```javascript
[20,30]
```

---

## Question 3

```javascript
console.log([5,10,15].find(x => x > 6));
```

**Answer**

```
10
```

---

## Question 4

```javascript
console.log([5,10,15].findIndex(x => x > 6));
```

**Answer**

```
1
```

---

## Question 5

```javascript
console.log([1,2,3].some(x => x > 2));
```

**Answer**

```
true
```

---

## Question 6

```javascript
console.log([1,2,3].every(x => x > 0));
```

**Answer**

```
true
```

---

## Question 7

```javascript
console.log([10,20,30].reduce((a,b)=>a+b,0));
```

**Answer**

```
60
```

---

## Question 8

```javascript
console.log([1,[2,[3]]].flat(2));
```

**Answer**

```javascript
[1,2,3]
```

---

# Scenario-Based Questions (With Answers)

## Scenario 1

Display only active Accounts.

**Answer**

```javascript
const activeAccounts = this.accounts.filter(
    account => account.IsActive
);
```

---

## Scenario 2

Create a list containing only Account Names.

**Answer**

```javascript
const names = this.accounts.map(
    account => account.Name
);
```

---

## Scenario 3

Find the selected Opportunity using its Id.

**Answer**

```javascript
const opportunity = this.opportunities.find(
    opp => opp.Id === selectedId
);
```

---

## Scenario 4

Calculate the total Amount of all Opportunities.

**Answer**

```javascript
const totalAmount = this.opportunities.reduce(
    (sum, opp) => sum + opp.Amount,
    0
);
```

---

## Scenario 5

Check if any Contact has a missing Email.

**Answer**

```javascript
const hasMissingEmail = this.contacts.some(
    contact => !contact.Email
);
```

---

## Scenario 6

Verify that every Order has the Status `"Completed"`.

**Answer**

```javascript
const allCompleted = this.orders.every(
    order => order.Status === "Completed"
);
```

---

# Practice Questions

1. Double every number using `map()`.
2. Filter employees with a salary greater than 50,000.
3. Find the first product whose price is greater than 1,000.
4. Find the index of the first even number.
5. Check whether any student scored 100 marks.
6. Verify that all employees have an email address.
7. Calculate the sum of an array using `reduce()`.
8. Find the maximum number using `reduce()`.
9. Flatten a nested array using `flat()`.
10. Convert `"Salesforce"` into an array using `Array.from()`.
11. Create an array containing `10`, `20`, and `30` using `Array.of()`.
12. Print all indexes using `keys()`.
13. Print all values using `values()`.
14. Print indexes and values together using `entries()`.
15. Explain with examples when you would use `map()`, `filter()`, `find()`, `some()`, `every()`, and `reduce()`.
