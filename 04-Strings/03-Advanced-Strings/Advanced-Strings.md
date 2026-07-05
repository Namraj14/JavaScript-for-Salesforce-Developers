# 📁 04 - Strings (Part 3 - Advanced Strings)

# String Comparison

Strings can be compared using comparison operators.

Example

```javascript
console.log("Apple" === "Apple");
```

Output

```
true
```

---

```javascript
console.log("Apple" === "apple");
```

Output

```
false
```

JavaScript is case-sensitive.

---

## Lexicographical Comparison

Strings are compared character by character based on Unicode values.

Example

```javascript
console.log("Apple" < "Banana");
```

Output

```
true
```

---

```javascript
console.log("Zebra" > "Apple");
```

Output

```
true
```

---

```javascript
console.log("9" > "10");
```

Output

```
true
```

Explanation

JavaScript compares strings character by character.

```
"9"

vs

"1"
```

Since `9 > 1`, the result is `true`.

---

# String Equality

## Loose Equality (==)

Performs type conversion.

```javascript
console.log("10" == 10);
```

Output

```
true
```

---

## Strict Equality (===)

Checks both value and type.

```javascript
console.log("10" === 10);
```

Output

```
false
```

Always prefer `===`.

---

# String Type Conversion

Convert Number to String

```javascript
let age = 25;

console.log(String(age));
```

Output

```
"25"
```

---

Using toString()

```javascript
console.log(age.toString());
```

---

Boolean to String

```javascript
console.log(String(true));
```

Output

```
true
```

---

Array to String

```javascript
console.log([1,2,3].toString());
```

Output

```
1,2,3
```

---

Object to String

```javascript
console.log(String({
name:"John"
}));
```

Output

```
[object Object]
```

---

# String Coercion

JavaScript automatically converts values when needed.

Example

```javascript
console.log("10" + 5);
```

Output

```
105
```

---

```javascript
console.log("10" - 5);
```

Output

```
5
```

---

```javascript
console.log("10" * 5);
```

Output

```
50
```

---

```javascript
console.log("10" / 2);
```

Output

```
5
```

---

```javascript
console.log("10" % 3);
```

Output

```
1
```

---

# Why Does + Behave Differently?

The `+` operator performs both:

- Addition
- String Concatenation

If either operand is a string, concatenation occurs.

Example

```javascript
console.log(5 + "5");
```

Output

```
55
```

---

Other arithmetic operators force numeric conversion.

---

# String to Number Conversion

Using Number()

```javascript
Number("100")
```

Output

```
100
```

---

Using parseInt()

```javascript
parseInt("100px")
```

Output

```
100
```

---

Using parseFloat()

```javascript
parseFloat("12.45kg")
```

Output

```
12.45
```

---

Invalid Conversion

```javascript
Number("Hello")
```

Output

```
NaN
```

---

# Regular Expressions (Basics)

Regular Expressions (Regex) are patterns used to search, match, and replace text.

Syntax

```javascript
/pattern/
```

---

Check Digits

```javascript
let text = "123";

console.log(/^\d+$/.test(text));
```

Output

```
true
```

---

Check Email

```javascript
let email = "john@gmail.com";

console.log(/@/.test(email));
```

Output

```
true
```

---

Replace Using Regex

```javascript
let text = "cat bat rat";

console.log(text.replace(/at/g,"oo"));
```

Output

```
coo boo roo
```

---

Find All Numbers

```javascript
let text = "Age 25 Salary 5000";

console.log(text.match(/\d+/g));
```

Output

```javascript
["25","5000"]
```

---

# Memory Behavior

Strings are stored by value.

Example

```javascript
let first = "Salesforce";

let second = first;

second = "JavaScript";

console.log(first);
```

Output

```
Salesforce
```

The original string remains unchanged.

---

# Performance Considerations

Avoid repeated concatenation inside loops.

Bad

```javascript
let result = "";

for(let i=0;i<1000;i++){

result += i;

}
```

Better

```javascript
let values = [];

for(let i=0;i<1000;i++){

values.push(i);

}

console.log(values.join(""));
```

---

# Common String Problems

Reverse String

```javascript
let text = "Sales";

let reverse = text.split("").reverse().join("");

console.log(reverse);
```

Output

```
selaS
```

---

Palindrome

```javascript
let text = "madam";

console.log(text === text.split("").reverse().join(""));
```

Output

```
true
```

---

Count Characters

```javascript
console.log("Salesforce".length);
```

---

Remove Spaces

```javascript
let text = " Hello World ";

console.log(text.trim());
```

---

Convert to Title Case

```javascript
let text = "hello world";

let result = text
.split(" ")
.map(word=>word.charAt(0).toUpperCase()+word.slice(1))
.join(" ");

console.log(result);
```

Output

```
Hello World
```

---

# Best Practices

✅ Always use `===`.

✅ Use template literals instead of repeated `+`.

✅ Validate user input using `trim()`.

✅ Use `includes()` instead of `indexOf()` for readability.

✅ Avoid `new String()`.

✅ Handle `null` and `undefined` before calling string methods.

---

# Common Mistakes

Calling methods on `null`.

```javascript
let text = null;

text.toUpperCase();
```

Throws

```
TypeError
```

---

Assuming `replace()` changes the original string.

---

Using `==`.

---

Ignoring case sensitivity.

---

Using `substring()` with negative indexes.

---

# Strings in Lightning Web Components

## Search Input

```javascript
handleSearch(event){

this.searchKey = event.target.value.trim();

}
```

---

## Email Validation

```javascript
if(email.includes("@")){

}
```

---

## Record Prefix

```javascript
if(recordId.startsWith("001")){

}
```

---

## Display User Name

```javascript
this.message = `Welcome ${this.userName}`;
```

---

## Error Handling

```javascript
this.errorMessage = "Something went wrong.";
```

---

## URL Building

```javascript
const url = `/lightning/r/Account/${recordId}/view`;
```

---

## Dynamic Labels

```javascript
this.title = `${count} Accounts Found`;
```

---

# Interview Questions (With Answers)

## 1. Are strings stored by value or reference?

**Answer**

Strings are primitive values and are stored by value. Assigning one string to another copies the value rather than sharing the same memory reference.

---

## 2. Why are strings immutable?

**Answer**

Immutability makes strings predictable and prevents accidental modification. Methods like `replace()`, `slice()`, and `toUpperCase()` return new strings instead of changing the original.

---

## 3. What is type coercion?

**Answer**

Type coercion is JavaScript's automatic conversion of one data type to another during operations.

Example

```javascript
"10" * 2
```

Result

```
20
```

---

## 4. Difference between String() and toString()?

**Answer**

`String(value)` can convert almost any value, including `null` and `undefined`, to a string.

```javascript
String(null); // "null"
String(undefined); // "undefined"
```

`toString()` is a method available on many values, but calling it on `null` or `undefined` throws an error.

```javascript
null.toString(); // TypeError
undefined.toString(); // TypeError
```

---

## 5. Why should we avoid `new String()`?

**Answer**

It creates a String object instead of a primitive string. It uses more memory, is slower, and can lead to unexpected comparison behavior.

---

## 6. What is a Regular Expression?

**Answer**

A Regular Expression (Regex) is a pattern used to search, validate, match, or replace text.

---

## 7. What happens when you call a string method on `null`?

**Answer**

JavaScript throws a `TypeError` because `null` does not have string methods.

---

## 8. Why is `===` preferred over `==`?

**Answer**

`===` compares both the value and the data type without performing type coercion, making comparisons safer and more predictable.

---

# Output-Based Questions (With Answers)

## Question 1

```javascript
console.log("10" + 5);
```

**Answer**

```
105
```

---

## Question 2

```javascript
console.log("10" - 5);
```

**Answer**

```
5
```

---

## Question 3

```javascript
console.log("10" * "2");
```

**Answer**

```
20
```

---

## Question 4

```javascript
console.log("abc" > "ABC");
```

**Answer**

```
true
```

Lowercase letters have higher Unicode values than uppercase letters.

---

## Question 5

```javascript
console.log(String(100));
```

**Answer**

```
"100"
```

---

## Question 6

```javascript
console.log(parseInt("100px"));
```

**Answer**

```
100
```

---

## Question 7

```javascript
console.log(parseFloat("25.75kg"));
```

**Answer**

```
25.75
```

---

## Question 8

```javascript
console.log(Number("Hello"));
```

**Answer**

```
NaN
```

---

## Question 9

```javascript
console.log("madam" === "madam".split("").reverse().join(""));
```

**Answer**

```
true
```

---

## Question 10

```javascript
console.log([1,2,3].toString());
```

**Answer**

```
1,2,3
```

---

# Scenario-Based Questions (With Answers)

## Scenario 1

A user enters `"  John Doe  "` into a text field. You want to remove the extra spaces before saving it.

**Answer**

```javascript
this.fullName = event.target.value.trim();
```

---

## Scenario 2

You receive the string `"100px"` from a CSS property and need the numeric value.

**Answer**

```javascript
const width = parseInt("100px");
```

Result

```
100
```

---

## Scenario 3

You need to verify that a phone number contains only digits.

**Answer**

```javascript
const isValid = /^\d+$/.test(phoneNumber);
```

---

## Scenario 4

An LWC receives a record ID and needs to navigate to the record page.

**Answer**

```javascript
const url = `/lightning/r/Account/${recordId}/view`;
```

---

## Scenario 5

You need to display:

```
Found 25 Accounts
```

where the count is dynamic.

**Answer**

```javascript
const message = `Found ${count} Accounts`;
```

---

# Practice Questions

1. Reverse a string without using the built-in `reverse()` method.
2. Check whether a string is a palindrome.
3. Count the number of vowels in a string.
4. Count the number of words in a sentence.
5. Remove all spaces from a string.
6. Convert a sentence to Title Case.
7. Validate that a string contains only digits using Regex.
8. Validate a Gmail address using Regex.
9. Replace all spaces with hyphens.
10. Convert `"250px"` into the number `250`.
11. Compare two strings ignoring case.
12. Check whether a string starts and ends with the same character.
13. Find the most frequently occurring character in a string.
14. Count the occurrences of each character in `"Salesforce"`.
15. Create a URL using a dynamic `recordId` with template literals.
