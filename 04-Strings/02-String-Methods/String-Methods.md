# 📁 04 - Strings (Part 2 - String Methods)

# Introduction

JavaScript provides many built-in methods to manipulate strings.

**Important:** Since strings are **immutable**, none of these methods modify the original string. They always return a **new string** or another value.

Example

```javascript
let text = "Salesforce";

text.toUpperCase();

console.log(text);
```

Output

```
Salesforce
```

Correct

```javascript
text = text.toUpperCase();
```

Output

```
SALESFORCE
```

---

# 1. charAt()

Returns the character at a specified index.

### Syntax

```javascript
string.charAt(index)
```

Example

```javascript
let text = "Salesforce";

console.log(text.charAt(0));
```

Output

```
S
```

If the index doesn't exist:

```javascript
console.log(text.charAt(100));
```

Output

```
""
```

---

# 2. at()

Returns the character at the specified position.

Supports negative indexing.

### Syntax

```javascript
string.at(index)
```

Example

```javascript
let text = "Salesforce";

console.log(text.at(0));
```

Output

```
S
```

Negative Index

```javascript
console.log(text.at(-1));
```

Output

```
e
```

---

# charAt() vs at()

| charAt() | at() |
|-----------|------|
| No negative index | Supports negative index |
| Older method | Modern method |
| Returns empty string | Returns undefined for invalid negative access |

---

# 3. concat()

Joins two or more strings.

### Syntax

```javascript
string.concat(value1, value2...)
```

Example

```javascript
let first = "Hello";

let second = "World";

console.log(first.concat(" ", second));
```

Output

```
Hello World
```

---

# 4. includes()

Checks whether a string contains another string.

Returns boolean.

### Syntax

```javascript
string.includes(value)
```

Example

```javascript
let text = "Salesforce";

console.log(text.includes("force"));
```

Output

```
true
```

---

Case Sensitive

```javascript
console.log(text.includes("Force"));
```

Output

```
false
```

---

# 5. startsWith()

Checks if a string starts with a given value.

Example

```javascript
console.log("Salesforce".startsWith("Sales"));
```

Output

```
true
```

---

# 6. endsWith()

Checks if a string ends with a given value.

Example

```javascript
console.log("Salesforce".endsWith("force"));
```

Output

```
true
```

---

# 7. indexOf()

Returns the first index of a value.

Example

```javascript
let text = "Salesforce";

console.log(text.indexOf("f"));
```

Output

```
5
```

If not found

```javascript
console.log(text.indexOf("z"));
```

Output

```
-1
```

---

# 8. lastIndexOf()

Returns the last occurrence.

Example

```javascript
let text = "banana";

console.log(text.lastIndexOf("a"));
```

Output

```
5
```

---

# 9. slice()

Extracts part of a string.

Original string remains unchanged.

### Syntax

```javascript
string.slice(start,end)
```

Example

```javascript
let text = "Salesforce";

console.log(text.slice(0,5));
```

Output

```
Sales
```

---

Negative Index

```javascript
console.log(text.slice(-5));
```

Output

```
force
```

---

# 10. substring()

Similar to slice().

Difference:

- Negative indexes become 0.

Example

```javascript
console.log("Salesforce".substring(0,5));
```

Output

```
Sales
```

Negative

```javascript
console.log("Salesforce".substring(-2,5));
```

Output

```
Sales
```

---

# slice() vs substring()

| slice() | substring() |
|----------|-------------|
| Supports negative index | Does not |
| More commonly used | Older method |

---

# 11. substr() (Deprecated)

Extracts characters using:

Start index

Length

Example

```javascript
console.log("Salesforce".substr(0,5));
```

Output

```
Sales
```

Do not use in new code.

---

# 12. replace()

Replaces the first matching value.

Example

```javascript
let text = "Hello World";

console.log(text.replace("World","JavaScript"));
```

Output

```
Hello JavaScript
```

Original string remains unchanged.

---

# 13. replaceAll()

Replaces every occurrence.

Example

```javascript
let text = "apple apple apple";

console.log(text.replaceAll("apple","orange"));
```

Output

```
orange orange orange
```

---

# replace() vs replaceAll()

replace()

Only first occurrence.

replaceAll()

Every occurrence.

---

# 14. split()

Converts a string into an array.

Example

```javascript
let text = "A,B,C";

console.log(text.split(","));
```

Output

```
["A","B","C"]
```

Split into characters

```javascript
console.log("Hello".split(""));
```

Output

```
["H","e","l","l","o"]
```

---

# 15. trim()

Removes spaces from both sides.

Example

```javascript
let text = " Hello ";

console.log(text.trim());
```

Output

```
Hello
```

---

# 16. trimStart()

Removes spaces from the beginning.

Example

```javascript
console.log(" Hello".trimStart());
```

Output

```
Hello
```

---

# 17. trimEnd()

Removes spaces from the end.

Example

```javascript
console.log("Hello ".trimEnd());
```

Output

```
Hello
```

---

# 18. toUpperCase()

Converts to uppercase.

Example

```javascript
console.log("salesforce".toUpperCase());
```

Output

```
SALESFORCE
```

---

# 19. toLowerCase()

Converts to lowercase.

Example

```javascript
console.log("SALESFORCE".toLowerCase());
```

Output

```
salesforce
```

---

# 20. repeat()

Repeats a string.

Example

```javascript
console.log("Hi ".repeat(3));
```

Output

```
Hi Hi Hi
```

---

# 21. padStart()

Pads characters at the beginning.

Example

```javascript
console.log("5".padStart(3,"0"));
```

Output

```
005
```

---

# 22. padEnd()

Pads characters at the end.

Example

```javascript
console.log("5".padEnd(3,"0"));
```

Output

```
500
```

---

# 23. search()

Returns first matching index.

Example

```javascript
console.log("Salesforce".search("force"));
```

Output

```
5
```

Not found

```
-1
```

---

# 24. match()

Returns matching values.

Example

```javascript
console.log("JavaScript".match("Script"));
```

Output

```
["Script"]
```

Can also be used with Regular Expressions.

---

# 25. matchAll()

Returns all matches.

Example

```javascript
const text = "cat bat rat";

console.log([...text.matchAll(/at/g)]);
```

---

# 26. localeCompare()

Compares two strings.

Returns

```
-1

0

1
```

Example

```javascript
console.log("abc".localeCompare("abc"));
```

Output

```
0
```

---

# 27. valueOf()

Returns primitive string value.

Example

```javascript
let text = new String("Hello");

console.log(text.valueOf());
```

Output

```
Hello
```

---

# 28. toString()

Converts to string.

Example

```javascript
let text = new String("Salesforce");

console.log(text.toString());
```

Output

```
Salesforce
```

---

# Best Practices

✅ Use `includes()` instead of checking `indexOf() != -1`.

✅ Prefer `slice()` over `substring()`.

✅ Use template literals instead of `concat()`.

✅ Always `trim()` user input.

✅ Use `replaceAll()` when replacing multiple occurrences.

---

# Common Mistakes

Using `replace()` expecting every occurrence to change.

Forgetting strings are immutable.

Using `substring()` with negative indexes.

Using deprecated `substr()`.

Ignoring case sensitivity.

---

# String Methods in Lightning Web Components

Search

```javascript
this.searchKey = event.target.value.trim();
```

Validation

```javascript
if(email.includes("@"))
```

Uppercase

```javascript
this.code = this.code.toUpperCase();
```

Check Prefix

```javascript
if(recordId.startsWith("001"))
```

Split CSV

```javascript
const values = csv.split(",");
```

---

# Interview Questions (With Answers)

## 1. Does replace() modify the original string?

**Answer**

No.

Strings are immutable.

`replace()` returns a new string.

---

## 2. Difference between slice() and substring()?

**Answer**

`slice()` supports negative indexes.

`substring()` converts negative indexes to 0.

---

## 3. Difference between replace() and replaceAll()?

**Answer**

`replace()` changes only the first occurrence.

`replaceAll()` changes every occurrence.

---

## 4. Why should trim() be used in forms?

**Answer**

It removes unwanted leading and trailing spaces entered by users, improving validation and preventing unnecessary Apex calls.

---

## 5. Which method checks if a string contains another string?

**Answer**

`includes()`

Example

```javascript
text.includes("Sales");
```

---

## 6. Which method supports negative indexes?

**Answer**

`at()` and `slice()`.

---

## 7. Why is includes() preferred over indexOf()?

**Answer**

`includes()` directly returns a boolean, making the code easier to read.

Instead of:

```javascript
text.indexOf("abc") !== -1
```

Use:

```javascript
text.includes("abc")
```

---

# Output-Based Questions (With Answers)

## Question 1

```javascript
console.log("Salesforce".slice(0,5));
```

**Answer**

```
Sales
```

---

## Question 2

```javascript
console.log("Hello".replace("l","X"));
```

**Answer**

```
HeXlo
```

Only the first `l` is replaced.

---

## Question 3

```javascript
console.log("apple apple".replaceAll("apple","orange"));
```

**Answer**

```
orange orange
```

---

## Question 4

```javascript
console.log(" Hello ".trim().length);
```

**Answer**

```
5
```

---

## Question 5

```javascript
console.log("JavaScript".includes("Script"));
```

**Answer**

```
true
```

---

## Question 6

```javascript
console.log("Hello".split(""));
```

**Answer**

```javascript
["H","e","l","l","o"]
```

---

## Question 7

```javascript
console.log("abc".repeat(2));
```

**Answer**

```
abcabc
```

---

## Question 8

```javascript
console.log("5".padStart(4,"0"));
```

**Answer**

```
0005
```

---

# Scenario-Based Questions (With Answers)

## Scenario 1

Users enter spaces before and after an email address.

**Answer**

```javascript
this.email = event.target.value.trim();
```

---

## Scenario 2

You receive a CSV string from Apex.

```
John,Mary,David
```

Convert it into an array.

**Answer**

```javascript
const names = csv.split(",");
```

---

## Scenario 3

You want to check whether a record ID belongs to an Account.

**Answer**

```javascript
if(recordId.startsWith("001")){
    // Account
}
```

---

## Scenario 4

Convert every customer name to uppercase before displaying it.

**Answer**

```javascript
this.customerName = this.customerName.toUpperCase();
```

---

## Scenario 5

Validate that the user entered a Gmail address.

**Answer**

```javascript
if(email.endsWith("@gmail.com")){
    // Valid Gmail address
}
```

---

# Practice Questions

1. Extract `"Lightning"` from `"Lightning Web Components"` using `slice()`.
2. Replace every `"Salesforce"` with `"CRM"` using `replaceAll()`.
3. Convert `"hello world"` to uppercase.
4. Split `"Red,Blue,Green"` into an array.
5. Remove spaces from `"  JavaScript  "`.
6. Print the last character of `"Developer"` using `at()`.
7. Check if `"Lightning"` starts with `"Light"`.
8. Pad `"25"` to five digits using `padStart()`.
9. Replace only the first `"cat"` in `"cat cat cat"` with `"dog"`.
10. Check if `"Salesforce Developer"` contains `"Developer"` using `includes()`.
