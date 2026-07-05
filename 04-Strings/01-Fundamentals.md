# 📁 04 - Strings (Part 1 - Fundamentals)

# What is a String?

A String is a primitive data type used to store and represent textual data.

A string consists of zero or more characters enclosed within quotes.

Examples:

```javascript
let firstName = "John";
let lastName = 'Doe';
let message = `Welcome`;
```

Everything inside the quotes is treated as a string.

---

# Why Do We Need Strings?

Strings are used whenever we deal with text.

Examples:

- Customer Names
- Email Addresses
- Phone Numbers
- URLs
- IDs
- Labels
- Error Messages
- API Responses
- Search Keywords

Almost every LWC component works with strings.

---

# Ways to Create Strings

JavaScript provides three ways.

## Double Quotes

```javascript
let company = "Salesforce";
```

---

## Single Quotes

```javascript
let company = 'Salesforce';
```

---

## Template Literals (Backticks)

```javascript
let company = `Salesforce`;
```

Uses the backtick (`).

Template literals allow:

- String interpolation
- Multi-line strings
- Embedded expressions

---

# String Primitive

Most strings are primitive values.

Example

```javascript
let language = "JavaScript";
```

Check:

```javascript
console.log(typeof language);
```

Output

```
string
```

---

# String Object

Strings can also be created using the String constructor.

```javascript
let language = new String("JavaScript");
```

Check

```javascript
console.log(typeof language);
```

Output

```
object
```

Although possible, this approach is not recommended.

---

# Primitive vs String Object

Primitive

```javascript
let name = "John";
```

String Object

```javascript
let name = new String("John");
```

Comparison

| Primitive | String Object |
|------------|---------------|
| Faster | Slower |
| Memory Efficient | Uses More Memory |
| Type = string | Type = object |
| Recommended | Not Recommended |

Always use primitive strings.

---

# String Immutability

Strings are immutable.

This means once a string is created, its characters cannot be changed.

Example

```javascript
let name = "John";

name[0] = "D";

console.log(name);
```

Output

```
John
```

Nothing changes.

---

Another Example

```javascript
let company = "Salesforce";

company.toUpperCase();

console.log(company);
```

Output

```
Salesforce
```

Because toUpperCase() returns a new string.

Correct

```javascript
company = company.toUpperCase();
```

Output

```
SALESFORCE
```

---

# String Length

Returns total characters.

Example

```javascript
let text = "Salesforce";

console.log(text.length);
```

Output

```
10
```

Spaces are counted.

Example

```javascript
let text = "Hello World";
```

Length = 11

---

# Character Index

Every character has an index.

Example

```
S a l e s f o r c e

0 1 2 3 4 5 6 7 8 9
```

Index starts from 0.

---

# Accessing Characters

Method 1

```javascript
let company = "Salesforce";

console.log(company[0]);
```

Output

```
S
```

---

Method 2

```javascript
console.log(company.charAt(0));
```

Output

```
S
```

---

Method 3

```javascript
console.log(company.at(0));
```

Output

```
S
```

---

Negative Index

Only at() supports negative indexes.

```javascript
console.log(company.at(-1));
```

Output

```
e
```

---

# Escape Characters

Escape characters begin with a backslash (\).

## Double Quote

```javascript
let text = "He said \"Hello\"";
```

Output

```
He said "Hello"
```

---

## Single Quote

```javascript
let text = 'It\'s JavaScript';
```

Output

```
It's JavaScript
```

---

## New Line

```javascript
let text = "Hello\nWorld";
```

Output

```
Hello
World
```

---

## Tab

```javascript
let text = "A\tB";
```

Output

```
A    B
```

---

## Backslash

```javascript
let path = "C:\\Users\\John";
```

Output

```
C:\Users\John
```

---

# Template Literals

Introduced in ES6.

Uses backticks.

Example

```javascript
let name = "John";

console.log(`Hello ${name}`);
```

Output

```
Hello John
```

---

Without Template Literals

```javascript
let message = "Hello " + name;
```

---

With Template Literals

```javascript
let message = `Hello ${name}`;
```

Much cleaner.

---

# Expression Interpolation

Expressions can be evaluated.

```javascript
let a = 10;
let b = 20;

console.log(`${a+b}`);
```

Output

```
30
```

---

Function Example

```javascript
function greet(){

return "Welcome";

}

console.log(`${greet()}`);
```

Output

```
Welcome
```

---

# Multi-line Strings

Without template literals

```javascript
let text = "Hello\nWorld";
```

---

Using Template Literals

```javascript
let text = `Hello

World`;
```

Output

```
Hello

World
```

---

# Empty String

```javascript
let text = "";
```

Length

```
0
```

---

# String Concatenation

Joining two strings.

Using +

```javascript
let first = "Hello";

let second = "World";

console.log(first + " " + second);
```

Output

```
Hello World
```

---

Using concat()

```javascript
console.log(first.concat(" ", second));
```

Output

```
Hello World
```

---

Using Template Literals

```javascript
console.log(`${first} ${second}`);
```

Output

```
Hello World
```

Recommended approach.

---

# Unicode

JavaScript stores strings using Unicode.

Example

```javascript
let heart = "❤️";
```

Unicode allows:

- English
- Hindi
- Chinese
- Japanese
- Emojis
- Symbols

---

# Case Sensitivity

JavaScript strings are case-sensitive.

```javascript
"Salesforce"

"salesforce"
```

Both are different.

Example

```javascript
console.log("A" == "a");
```

Output

```
false
```

---

# String Comparison

```javascript
console.log("abc" === "abc");
```

Output

```
true
```

---

```javascript
console.log("abc" === "ABC");
```

Output

```
false
```

---

# Memory Representation

Primitive strings are stored by value.

Example

```javascript
let a = "Hello";

let b = a;

b = "World";
```

Output

```
a = Hello

b = World
```

Changing b does not affect a.

---

# Best Practices

✅ Prefer template literals.

✅ Use primitive strings.

✅ Use meaningful variable names.

✅ Avoid String constructor.

✅ Store reusable text in constants.

---

# Common Mistakes

Using String object

```javascript
new String("Hello")
```

Not recommended.

---

Trying to modify characters.

```javascript
text[0] = "A";
```

Will not work.

---

Forgetting strings are case-sensitive.

```javascript
"ABC"

"abc"
```

Different values.

---

Using + for long concatenations.

Prefer template literals.

---

# Strings in Lightning Web Components

Strings are commonly used for:

```javascript
recordId = "";

searchKey = "";

errorMessage = "";

accountName = "";

selectedValue = "";

label = "Accounts";
```

Example

```javascript
handleChange(event){

this.searchKey = event.target.value;

}
```

Example

```javascript
this.errorMessage = "Unable to fetch Accounts";
```

Example

```javascript
this.recordId = event.detail.recordId;
```

---

# Interview Questions (With Answers)

## 1. What is a String?

Answer

A String is a primitive data type used to store textual data. It consists of zero or more characters enclosed in single quotes, double quotes, or backticks.

---

## 2. Are Strings mutable?

Answer

No.

Strings are immutable.

Any operation like replace(), slice(), or toUpperCase() returns a new string instead of modifying the original string.

---

## 3. Difference between String primitive and String object?

Answer

Primitive

```javascript
let name = "John";
```

String Object

```javascript
let name = new String("John");
```

Primitive strings are faster, consume less memory, and are recommended.

---

## 4. What is a Template Literal?

Answer

A Template Literal is a string enclosed using backticks.

It allows:

- Variable interpolation
- Multi-line strings
- Expression evaluation

Example

```javascript
let name = "John";

console.log(`Hello ${name}`);
```

---

## 5. Why are Template Literals preferred?

Answer

They improve readability and eliminate the need for repeated string concatenation using the + operator.

---

## 6. What is String Immutability?

Answer

Once a string is created, it cannot be modified.

Methods such as replace() or toUpperCase() return new strings.

---

## 7. How do you access the last character of a string?

Answer

```javascript
let text = "Salesforce";

console.log(text.at(-1));
```

Output

```
e
```

---

## 8. What is Unicode?

Answer

Unicode is a universal character encoding standard that allows JavaScript to represent characters from almost every language, including emojis and symbols.

---

# Output Based Questions (With Answers)

## Question 1

```javascript
let text = "JavaScript";

console.log(text.length);
```

Answer

```
10
```

---

## Question 2

```javascript
let name = "John";

name[0] = "D";

console.log(name);
```

Answer

```
John
```

Strings are immutable.

---

## Question 3

```javascript
let company = "Salesforce";

console.log(company[3]);
```

Answer

```
e
```

---

## Question 4

```javascript
console.log(`10 + 20 = ${10+20}`);
```

Answer

```
10 + 20 = 30
```

---

## Question 5

```javascript
let text = "ABC";

console.log(text === "abc");
```

Answer

```
false
```

JavaScript strings are case-sensitive.

---

# Scenario-Based Questions (With Answers)

## Scenario 1

You are building an Account Search LWC. Users sometimes enter spaces before or after the account name.

How would you store the input?

Answer

```javascript
this.searchKey = event.target.value.trim();
```

The `trim()` method removes unnecessary spaces before sending the value to Apex.

---

## Scenario 2

You need to display:

```
Welcome, John
```

The username changes dynamically.

Answer

```javascript
const message = `Welcome, ${userName}`;
```

Template literals make the code cleaner than using string concatenation.

---

## Scenario 3

An Apex method returns an error. You want to display it in the component.

Answer

```javascript
this.errorMessage = "Unable to fetch records.";
```

Store user-facing messages as strings so they can be rendered in the template.

---

# Practice Questions

1. Create a string using all three ways of declaration.
2. Find the length of `"Lightning Web Components"`.
3. Print the first and last character of `"Salesforce"`.
4. Write a program using template literals to display:
   ```
   My name is John and I am 25 years old.
   ```
5. Create a multi-line string using backticks.
6. Show the difference between a String primitive and a String object.
7. Demonstrate that strings are immutable with an example.
8. Print the Unicode heart emoji in JavaScript.
