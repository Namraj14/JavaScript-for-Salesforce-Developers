# 📁 05 - Arrays (Part 2 - Array Methods)

# Introduction

JavaScript provides many built-in methods to manipulate arrays.

Some methods modify the original array.

Some methods return a new array without changing the original.

Knowing which methods mutate the array is a very common interview question.

---

# Array Methods Classification

## Methods that Modify the Original Array (Mutating)

- push()
- pop()
- shift()
- unshift()
- splice()
- sort()
- reverse()
- fill()
- copyWithin()

---

## Methods that Return a New Array (Non-Mutating)

- concat()
- slice()
- map()
- filter()
- flat()
- flatMap()
- toSorted()
- toReversed()
- toSpliced()

---

## Methods that Return Other Values

- includes()
- indexOf()
- lastIndexOf()
- find()
- findIndex()
- some()
- every()
- join()
- reduce()
- reduceRight()
- forEach()

---

# 1. push()

Adds one or more elements to the end.

### Syntax

```javascript
array.push(element1, element2);
```

Example

```javascript
let fruits = ["Apple", "Banana"];

fruits.push("Orange");

console.log(fruits);
```

Output

```javascript
["Apple","Banana","Orange"]
```

Returns

```
New length of array
```

---

# 2. pop()

Removes the last element.

### Syntax

```javascript
array.pop();
```

Example

```javascript
let fruits = ["Apple","Banana","Orange"];

let removed = fruits.pop();

console.log(removed);
```

Output

```
Orange
```

Remaining

```javascript
["Apple","Banana"]
```

---

# 3. shift()

Removes the first element.

Example

```javascript
let fruits = ["Apple","Banana","Orange"];

fruits.shift();

console.log(fruits);
```

Output

```javascript
["Banana","Orange"]
```

---

# 4. unshift()

Adds elements to the beginning.

Example

```javascript
let fruits = ["Banana","Orange"];

fruits.unshift("Apple");

console.log(fruits);
```

Output

```javascript
["Apple","Banana","Orange"]
```

---

# push() vs unshift()

| push() | unshift() |
|----------|-----------|
| Adds at end | Adds at beginning |

---

# pop() vs shift()

| pop() | shift() |
|--------|----------|
| Removes last | Removes first |

---

# 5. concat()

Combines arrays.

Does not modify the original array.

Example

```javascript
let a = [1,2];

let b = [3,4];

let c = a.concat(b);

console.log(c);
```

Output

```javascript
[1,2,3,4]
```

---

# 6. slice()

Extracts part of an array.

Original array remains unchanged.

Syntax

```javascript
array.slice(start,end)
```

Example

```javascript
let arr = [10,20,30,40];

console.log(arr.slice(1,3));
```

Output

```javascript
[20,30]
```

---

Negative Index

```javascript
console.log(arr.slice(-2));
```

Output

```javascript
[30,40]
```

---

# 7. splice()

Adds, removes, or replaces elements.

Modifies the original array.

Syntax

```javascript
array.splice(start,deleteCount,item1,item2...)
```

Remove

```javascript
let arr = [10,20,30,40];

arr.splice(1,2);

console.log(arr);
```

Output

```javascript
[10,40]
```

---

Insert

```javascript
let arr = [10,40];

arr.splice(1,0,20,30);

console.log(arr);
```

Output

```javascript
[10,20,30,40]
```

---

Replace

```javascript
let arr = [10,20,30];

arr.splice(1,1,100);

console.log(arr);
```

Output

```javascript
[10,100,30]
```

---

# slice() vs splice()

| slice() | splice() |
|-----------|-----------|
| Does not modify | Modifies |
| Returns extracted part | Removes/adds/replaces |

---

# 8. includes()

Checks if an element exists.

Example

```javascript
let fruits = ["Apple","Banana"];

console.log(fruits.includes("Banana"));
```

Output

```
true
```

---

# 9. indexOf()

Returns first index.

Example

```javascript
let arr = [10,20,30];

console.log(arr.indexOf(20));
```

Output

```
1
```

Not Found

```
-1
```

---

# 10. lastIndexOf()

Returns last occurrence.

Example

```javascript
let arr = [10,20,30,20];

console.log(arr.lastIndexOf(20));
```

Output

```
3
```

---

# 11. join()

Converts array into a string.

Example

```javascript
let fruits = ["Apple","Banana","Orange"];

console.log(fruits.join(", "));
```

Output

```
Apple, Banana, Orange
```

---

# 12. reverse()

Reverses the array.

Original array changes.

Example

```javascript
let arr = [1,2,3];

arr.reverse();

console.log(arr);
```

Output

```javascript
[3,2,1]
```

---

# 13. sort()

Sorts the array.

Default sorting is alphabetical.

Example

```javascript
let names = ["John","Alice","Bob"];

names.sort();

console.log(names);
```

Output

```javascript
["Alice","Bob","John"]
```

---

Problem with Numbers

```javascript
let nums = [100,2,30];

nums.sort();

console.log(nums);
```

Output

```javascript
[100,2,30]
```

Wrong.

Correct

```javascript
nums.sort((a,b)=>a-b);
```

Output

```javascript
[2,30,100]
```

Descending

```javascript
nums.sort((a,b)=>b-a);
```

---

# 14. fill()

Fills array with a value.

Example

```javascript
let arr = [1,2,3];

arr.fill(0);

console.log(arr);
```

Output

```javascript
[0,0,0]
```

---

# 15. copyWithin()

Copies part of the array within itself.

Example

```javascript
let arr = [1,2,3,4];

arr.copyWithin(0,2);

console.log(arr);
```

Output

```javascript
[3,4,3,4]
```

---

# Best Practices

✅ Use `slice()` when you don't want to modify the array.

✅ Use `splice()` only when modification is intended.

✅ Use `includes()` instead of checking `indexOf() != -1`.

✅ Always provide a compare function when sorting numbers.

✅ Use `join()` when displaying arrays.

---

# Common Mistakes

Using `sort()` on numbers without a compare function.

Using `splice()` when `slice()` is needed.

Assuming `reverse()` returns a new array.

Expecting `push()` to return the added element.

Actually, `push()` returns the new array length.

---

# Array Methods in Lightning Web Components

Store new records

```javascript
this.accounts.push(account);
```

Remove last notification

```javascript
this.notifications.pop();
```

Pagination

```javascript
const page = this.records.slice(start,end);
```

Merge two arrays

```javascript
this.accounts = this.accounts.concat(newAccounts);
```

Display selected names

```javascript
const names = this.accounts.join(", ");
```

Sort Accounts

```javascript
accounts.sort((a,b)=>
a.Name.localeCompare(b.Name)
);
```

---

# Interview Questions (With Answers)

## 1. Difference between slice() and splice()?

**Answer**

`slice()` returns a new array and does not modify the original.

`splice()` modifies the original array by adding, removing, or replacing elements.

---

## 2. What does push() return?

**Answer**

It returns the new length of the array, not the inserted element.

---

## 3. Difference between pop() and shift()?

**Answer**

`pop()` removes the last element.

`shift()` removes the first element.

---

## 4. Difference between push() and unshift()?

**Answer**

`push()` adds elements at the end.

`unshift()` adds elements at the beginning.

---

## 5. Why is sort() dangerous for numbers?

**Answer**

By default, `sort()` compares values as strings, which can produce incorrect results for numbers.

Always use:

```javascript
arr.sort((a,b)=>a-b);
```

---

## 6. Which methods modify the original array?

**Answer**

- push()
- pop()
- shift()
- unshift()
- splice()
- sort()
- reverse()
- fill()
- copyWithin()

---

## 7. Which methods do not modify the original array?

**Answer**

- concat()
- slice()
- includes()
- indexOf()
- join()

---

# Output-Based Questions (With Answers)

## Question 1

```javascript
let arr = [1,2];

arr.push(3);

console.log(arr);
```

**Answer**

```javascript
[1,2,3]
```

---

## Question 2

```javascript
let arr = [1,2,3];

console.log(arr.pop());

console.log(arr);
```

**Answer**

```
3
```

```javascript
[1,2]
```

---

## Question 3

```javascript
let arr = [10,20,30];

console.log(arr.slice(1));
```

**Answer**

```javascript
[20,30]
```

---

## Question 4

```javascript
let arr = [10,20,30];

arr.splice(1,1);

console.log(arr);
```

**Answer**

```javascript
[10,30]
```

---

## Question 5

```javascript
console.log([1,2,3].includes(2));
```

**Answer**

```
true
```

---

## Question 6

```javascript
console.log([5,3,1].sort());
```

**Answer**

```javascript
[1,3,5]
```

Because the values are single-digit numbers, alphabetical and numeric order happen to match.

---

## Question 7

```javascript
console.log([100,2,30].sort());
```

**Answer**

```javascript
[100,2,30]
```

The array is sorted alphabetically, not numerically.

---

## Question 8

```javascript
console.log(["A","B","C"].join("-"));
```

**Answer**

```
A-B-C
```

---

# Scenario-Based Questions (With Answers)

## Scenario 1

An Apex method returns more Account records, and you want to append them to the existing list.

**Answer**

```javascript
this.accounts = this.accounts.concat(result);
```

---

## Scenario 2

You need to display only the first 10 records for pagination.

**Answer**

```javascript
const firstPage = this.accounts.slice(0,10);
```

---

## Scenario 3

You need to sort Opportunities by Amount in ascending order.

**Answer**

```javascript
this.opportunities.sort((a,b)=>a.Amount-b.Amount);
```

---

## Scenario 4

You need to display all selected Account names separated by commas.

**Answer**

```javascript
const names = this.selectedAccounts.join(", ");
```

---

## Scenario 5

A user deletes the most recently added notification.

**Answer**

```javascript
this.notifications.pop();
```

---

# Practice Questions

1. Add three elements using `push()`.
2. Remove the last element using `pop()`.
3. Remove the first element using `shift()`.
4. Add an element to the beginning using `unshift()`.
5. Merge two arrays using `concat()`.
6. Extract the middle three elements using `slice()`.
7. Remove two elements using `splice()`.
8. Replace an element using `splice()`.
9. Check whether an array contains `"Salesforce"` using `includes()`.
10. Find the index of `"JavaScript"` using `indexOf()`.
11. Convert an array into a comma-separated string using `join()`.
12. Sort numbers in ascending and descending order.
13. Reverse an array.
14. Fill an array with `"Pending"` using `fill()`.
15. Demonstrate the difference between `slice()` and `splice()` with code.
