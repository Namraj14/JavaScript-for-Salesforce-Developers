# 📁 10 - Arrow Functions (Part 1 - Fundamentals)

# What are Arrow Functions?

Arrow functions are a shorter and more concise way to write functions in JavaScript.

They were introduced in **ES6 (ECMAScript 2015)**.

Syntax

```javascript
const functionName = () => {

};
```

Example

```javascript
const greet = () => {
    console.log("Hello");
};

greet();
```

Output

```
Hello
```

---

# Why Were Arrow Functions Introduced?

Arrow functions were introduced to:

- Write less code.
- Improve readability.
- Preserve lexical `this`.
- Simplify callback functions.
- Make functional programming easier.

---

# Function Syntax Comparison

## Function Declaration

```javascript
function greet() {
    console.log("Hello");
}
```

---

## Function Expression

```javascript
const greet = function () {
    console.log("Hello");
};
```

---

## Arrow Function

```javascript
const greet = () => {
    console.log("Hello");
};
```

---

# Function Declaration vs Function Expression vs Arrow Function

| Feature | Function Declaration | Function Expression | Arrow Function |
|---------|----------------------|---------------------|----------------|
| Hoisted | ✅ Yes | ❌ No | ❌ No |
| Own `this` | ✅ Yes | ✅ Yes | ❌ No |
| Short Syntax | ❌ No | ❌ No | ✅ Yes |
| Constructor | ✅ Yes | ✅ Yes | ❌ No |
| `arguments` Object | ✅ Yes | ✅ Yes | ❌ No |

---

# Arrow Function with No Parameters

```javascript
const welcome = () => {
    console.log("Welcome");
};

welcome();
```

Output

```
Welcome
```

---

# Arrow Function with One Parameter

If there is only one parameter, parentheses are optional.

```javascript
const square = number => {
    return number * number;
};

console.log(square(5));
```

Output

```
25
```

---

You can also write

```javascript
const square = (number) => {
    return number * number;
};
```

Both are valid.

---

# Arrow Function with Multiple Parameters

```javascript
const add = (a, b) => {
    return a + b;
};

console.log(add(10, 20));
```

Output

```
30
```

---

# Arrow Function with Default Parameters

```javascript
const greet = (name = "Guest") => {
    console.log(`Hello ${name}`);
};

greet();
```

Output

```
Hello Guest
```

---

# Arrow Function with Rest Parameters

```javascript
const sum = (...numbers) => {
    console.log(numbers);
};

sum(10, 20, 30);
```

Output

```javascript
[10, 20, 30]
```

---

# Explicit Return

Use the `return` keyword when the function body uses `{}`.

```javascript
const multiply = (a, b) => {
    return a * b;
};

console.log(multiply(4, 5));
```

Output

```
20
```

---

# Implicit Return

If the function has only one expression, `{}` and `return` can be omitted.

```javascript
const multiply = (a, b) => a * b;

console.log(multiply(4, 5));
```

Output

```
20
```

---

# Returning Objects

Objects must be wrapped in parentheses.

Wrong

```javascript
const getUser = () => {
    name: "John";
};
```

Output

```
undefined
```

JavaScript treats `{}` as a function body.

---

Correct

```javascript
const getUser = () => ({
    name: "John",
    age: 30
});

console.log(getUser());
```

Output

```javascript
{
    name: "John",
    age: 30
}
```

---

# Multi-Line Arrow Functions

```javascript
const calculate = (a, b) => {

    const total = a + b;

    return total;

};

console.log(calculate(5, 6));
```

Output

```
11
```

---

# Single-Line Arrow Functions

```javascript
const divide = (a, b) => a / b;

console.log(divide(20, 4));
```

Output

```
5
```

---

# Arrow Function with Conditional Logic

```javascript
const checkEven = number =>
    number % 2 === 0 ? "Even" : "Odd";

console.log(checkEven(8));
```

Output

```
Even
```

---

# Arrow Function Returning Arrays

```javascript
const getNumbers = () => [10, 20, 30];

console.log(getNumbers());
```

Output

```javascript
[10, 20, 30]
```

---

# Best Practices

✅ Use arrow functions for short functions.

✅ Use implicit return for single expressions.

✅ Use explicit return for complex logic.

✅ Keep arrow functions readable.

✅ Use meaningful parameter names.

---

# Common Mistakes

## Forgetting Parentheses Around Returned Objects

Wrong

```javascript
const user = () => {
    name: "John";
};
```

Correct

```javascript
const user = () => ({
    name: "John"
});
```

---

## Omitting Parentheses with Multiple Parameters

Wrong

```javascript
const add = a, b => a + b;
```

Correct

```javascript
const add = (a, b) => a + b;
```

---

## Using `return` with Implicit Return

Wrong

```javascript
const add = (a, b) => return a + b;
```

Correct

```javascript
const add = (a, b) => a + b;
```

Or

```javascript
const add = (a, b) => {
    return a + b;
};
```

---

# Arrow Functions in Lightning Web Components

Simple Helper

```javascript
calculateTotal = (price, quantity) => {
    return price * quantity;
};
```

---

Event Callback

```javascript
setTimeout(() => {
    this.isLoading = false;
}, 1000);
```

---

Array Mapping

```javascript
const names = this.accounts.map(
    account => account.Name
);
```

---

Filtering

```javascript
const activeAccounts = this.accounts.filter(
    account => account.IsActive
);
```

---

# Interview Questions (With Answers)

## 1. What is an arrow function?

**Answer**

An arrow function is a shorter syntax for writing functions introduced in ES6. It also provides lexical `this`, making it useful for callbacks and asynchronous code.

---

## 2. Why were arrow functions introduced?

**Answer**

To reduce boilerplate code, improve readability, preserve lexical `this`, and simplify callback functions.

---

## 3. Can arrow functions have default parameters?

**Answer**

Yes.

Example

```javascript
const greet = (name = "Guest") => {
    console.log(name);
};
```

---

## 4. What is implicit return?

**Answer**

If an arrow function contains only one expression, JavaScript automatically returns the result without using the `return` keyword.

Example

```javascript
const square = n => n * n;
```

---

## 5. Why must returned objects be wrapped in parentheses?

**Answer**

Without parentheses, JavaScript interprets `{}` as the function body instead of an object literal.

---

## 6. Can arrow functions have multiple parameters?

**Answer**

Yes. Multiple parameters must be enclosed in parentheses.

```javascript
const add = (a, b) => a + b;
```

---

## 7. Can arrow functions return arrays?

**Answer**

Yes.

```javascript
const numbers = () => [1, 2, 3];
```

---

## 8. Are arrow functions hoisted?

**Answer**

No.

Since they are typically assigned to variables (`const`, `let`), they cannot be called before initialization.

---

# Output-Based Questions (With Answers)

## Question 1

```javascript
const greet = () => "Hello";

console.log(greet());
```

**Answer**

```
Hello
```

---

## Question 2

```javascript
const add = (a, b) => a + b;

console.log(add(5, 10));
```

**Answer**

```
15
```

---

## Question 3

```javascript
const square = number => number * number;

console.log(square(8));
```

**Answer**

```
64
```

---

## Question 4

```javascript
const getUser = () => ({
    name: "John"
});

console.log(getUser().name);
```

**Answer**

```
John
```

---

## Question 5

```javascript
const greet = (name = "Guest") => name;

console.log(greet());
```

**Answer**

```
Guest
```

---

## Question 6

```javascript
const numbers = () => [10, 20];

console.log(numbers()[1]);
```

**Answer**

```
20
```

---

## Question 7

```javascript
const even = number =>
    number % 2 === 0;

console.log(even(7));
```

**Answer**

```
false
```

---

# Scenario-Based Questions (With Answers)

## Scenario 1

You need a helper function that calculates the total price.

**Answer**

```javascript
const calculateTotal = (price, quantity) =>
    price * quantity;
```

---

## Scenario 2

You need to return an Account object from an arrow function.

**Answer**

```javascript
const getAccount = () => ({
    name: "ABC Corp",
    industry: "Technology"
});
```

---

## Scenario 3

You need an arrow function that accepts any number of values.

**Answer**

```javascript
const collectValues = (...values) => values;
```

---

## Scenario 4

You need a one-line function that checks if a number is positive.

**Answer**

```javascript
const isPositive = number => number > 0;
```

---

## Scenario 5

You need to transform an array of Account records into an array of names.

**Answer**

```javascript
const names = accounts.map(
    account => account.Name
);
```

---

# Practice Questions

1. Write an arrow function that prints `"Hello JavaScript"`.
2. Write an arrow function that adds two numbers.
3. Write an arrow function with one parameter.
4. Write an arrow function with default parameters.
5. Write an arrow function using rest parameters.
6. Write an arrow function that returns an object.
7. Write an arrow function that returns an array.
8. Convert a regular function into an arrow function.
9. Write an arrow function with implicit return.
10. Write an arrow function with explicit return.
11. Write an arrow function to determine whether a number is even.
12. Write an arrow function that returns the maximum of two numbers.
13. Write an arrow function that reverses a string.
14. Write an arrow function that counts vowels in a string.
15. Explain the differences between function declarations, function expressions, and arrow functions.
