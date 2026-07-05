# 📁 07 - Functions (Part 2 - Advanced Functions)

# Introduction

JavaScript treats functions as **first-class citizens**, meaning they can be:

- Assigned to variables
- Passed as arguments
- Returned from other functions
- Stored inside arrays and objects

Understanding these concepts is essential for writing modern JavaScript and Lightning Web Components (LWC).

---

# Arrow Functions

Arrow functions were introduced in ES6.

They provide a shorter syntax for writing functions.

### Syntax

```javascript
const functionName = (parameters) => {
    // code
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

# Arrow Function with One Parameter

Parentheses are optional.

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

# Implicit Return

If a function contains only one expression, `return` and `{}` can be omitted.

```javascript
const multiply = (a, b) => a * b;

console.log(multiply(5, 6));
```

Output

```
30
```

---

# Returning Objects

Objects must be wrapped in parentheses.

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

# Function Declaration vs Arrow Function

| Function Declaration | Arrow Function |
|----------------------|----------------|
| Hoisted | Not hoisted |
| Has its own `this` | Inherits `this` |
| Can be used as constructor | Cannot be used as constructor |
| Has `arguments` object | No `arguments` object |

---

# Callback Functions

A callback is a function passed as an argument to another function.

Example

```javascript
function greet(name) {
    console.log(`Hello ${name}`);
}

function processUser(callback) {
    callback("John");
}

processUser(greet);
```

Output

```
Hello John
```

---

# Anonymous Callback

```javascript
setTimeout(function () {
    console.log("Executed");
}, 1000);
```

---

# Arrow Callback

```javascript
setTimeout(() => {
    console.log("Executed");
}, 1000);
```

---

# Higher-Order Functions

A higher-order function is a function that:

- Accepts another function as an argument, or
- Returns another function.

Example

```javascript
function calculate(a, b, operation) {
    return operation(a, b);
}

function add(x, y) {
    return x + y;
}

console.log(calculate(10, 20, add));
```

Output

```
30
```

---

# Functions Returning Functions

```javascript
function greet(message) {

    return function(name){

        return `${message} ${name}`;

    };

}

const welcome = greet("Hello");

console.log(welcome("John"));
```

Output

```
Hello John
```

---

# Immediately Invoked Function Expression (IIFE)

Runs immediately after being defined.

Syntax

```javascript
(function(){

})();
```

Example

```javascript
(function(){

console.log("Executed");

})();
```

Output

```
Executed
```

---

Arrow Function IIFE

```javascript
(() => {

console.log("Arrow IIFE");

})();
```

Output

```
Arrow IIFE
```

---

# Why Use IIFE?

- Avoid polluting the global scope.
- Execute initialization code immediately.
- Create private variables.

---

# Recursive Functions

A recursive function calls itself.

Example

```javascript
function countdown(number){

    if(number===0){

        return;

    }

    console.log(number);

    countdown(number-1);

}

countdown(5);
```

Output

```
5
4
3
2
1
```

---

# Factorial Using Recursion

```javascript
function factorial(number){

    if(number===1){

        return 1;

    }

    return number * factorial(number-1);

}

console.log(factorial(5));
```

Output

```
120
```

---

# Base Case

Every recursive function must have a base case to stop recursion.

Without it, JavaScript throws:

```
RangeError: Maximum call stack size exceeded
```

---

# First-Class Functions

Functions in JavaScript are first-class objects.

This means they can:

Be stored in variables

```javascript
const greet = function(){

};
```

---

Be passed as arguments

```javascript
process(greet);
```

---

Be returned from functions

```javascript
return function(){

};
```

---

Be stored inside arrays

```javascript
const arr = [

function(){

},

function(){

}

];
```

---

Be stored inside objects

```javascript
const user = {

greet(){

}

};
```

---

# Pure Functions

A pure function:

- Always produces the same output for the same input.
- Has no side effects.

Example

```javascript
function add(a,b){

return a+b;

}
```

Pure.

---

# Impure Functions

Depends on external data or modifies external state.

```javascript
let total = 0;

function add(value){

total += value;

}
```

Impure.

---

# Generator Functions

Generator functions pause execution using `yield`.

Syntax

```javascript
function* generator(){

}
```

Example

```javascript
function* numbers(){

yield 1;

yield 2;

yield 3;

}

const gen = numbers();

console.log(gen.next());

console.log(gen.next());

console.log(gen.next());
```

Output

```javascript
{value:1,done:false}

{value:2,done:false}

{value:3,done:false}
```

---

# Yield

`yield` pauses execution and returns a value.

Execution resumes when `next()` is called.

---

# Best Practices

✅ Use arrow functions for short callbacks.

✅ Use function declarations for reusable functions.

✅ Keep functions pure whenever possible.

✅ Always define a base case in recursion.

✅ Use descriptive function names.

---

# Common Mistakes

Using arrow functions as constructors.

Using recursion without a base case.

Forgetting that arrow functions inherit `this`.

Returning an object without parentheses.

Wrong

```javascript
const getUser = () => {

name:"John"

};
```

Correct

```javascript
const getUser = () => ({

name:"John"

});
```

---

# Functions in Lightning Web Components

Button Click

```javascript
handleClick = () => {

console.log("Clicked");

};
```

---

Map Callback

```javascript
const names = accounts.map(

account => account.Name

);
```

---

Filter Callback

```javascript
const active = accounts.filter(

account => account.IsActive

);
```

---

Timeout

```javascript
setTimeout(()=>{

this.isLoading=false;

},2000);
```

---

# Interview Questions (With Answers)

## 1. What is an arrow function?

**Answer**

An arrow function is a shorter syntax for writing functions introduced in ES6. It has lexical `this`, cannot be used as a constructor, and does not have its own `arguments` object.

---

## 2. Difference between function declaration and arrow function?

**Answer**

Function declarations are hoisted and have their own `this`.

Arrow functions are not hoisted and inherit `this` from their surrounding scope.

---

## 3. What is a callback function?

**Answer**

A callback function is a function passed as an argument to another function and executed later.

---

## 4. What is a higher-order function?

**Answer**

A higher-order function accepts another function as an argument or returns another function.

Examples include `map()`, `filter()`, and `reduce()`.

---

## 5. What is an IIFE?

**Answer**

An IIFE (Immediately Invoked Function Expression) is a function that executes immediately after it is defined.

---

## 6. What is recursion?

**Answer**

Recursion is a technique where a function calls itself until a base condition is reached.

---

## 7. What is a pure function?

**Answer**

A pure function always returns the same output for the same input and has no side effects.

---

## 8. What is a generator function?

**Answer**

A generator function can pause execution using the `yield` keyword and resume later using `next()`.

---

# Output-Based Questions (With Answers)

## Question 1

```javascript
const add = (a,b)=>a+b;

console.log(add(5,10));
```

**Answer**

```
15
```

---

## Question 2

```javascript
(function(){

console.log("Hello");

})();
```

**Answer**

```
Hello
```

---

## Question 3

```javascript
function greet(){

return function(){

return "Welcome";

};

}

console.log(greet()());
```

**Answer**

```
Welcome
```

---

## Question 4

```javascript
function factorial(number){

if(number===1){

return 1;

}

return number*factorial(number-1);

}

console.log(factorial(4));
```

**Answer**

```
24
```

---

## Question 5

```javascript
function* numbers(){

yield 10;

yield 20;

}

const gen=numbers();

console.log(gen.next().value);

console.log(gen.next().value);
```

**Answer**

```
10
20
```

---

## Question 6

```javascript
const square = number => number * number;

console.log(square(8));
```

**Answer**

```
64
```

---

# Scenario-Based Questions (With Answers)

## Scenario 1

You need to transform a list of Accounts into an array containing only Account Names.

**Answer**

```javascript
const names = accounts.map(

account => account.Name

);
```

---

## Scenario 2

You need a reusable calculator that accepts different operations.

**Answer**

```javascript
function calculate(a,b,operation){

return operation(a,b);

}
```

---

## Scenario 3

You want initialization code to execute only once when the page loads.

**Answer**

```javascript
(function(){

console.log("Initialize");

})();
```

---

## Scenario 4

You need a function that calculates factorial using recursion.

**Answer**

```javascript
function factorial(number){

if(number===1){

return 1;

}

return number*factorial(number-1);

}
```

---

## Scenario 5

You need to delay hiding a loading spinner by two seconds.

**Answer**

```javascript
setTimeout(()=>{

this.isLoading=false;

},2000);
```

---

# Practice Questions

1. Convert a normal function into an arrow function.
2. Write an arrow function that returns the square of a number.
3. Write an arrow function that returns an object.
4. Create a callback function that prints a message.
5. Write a higher-order function that performs subtraction.
6. Create an IIFE that prints `"Application Started"`.
7. Write a recursive function to print numbers from `1` to `10`.
8. Write a recursive function to calculate the sum of numbers from `1` to `n`.
9. Write a pure function to calculate the average of three numbers.
10. Write an impure function that updates a global variable.
11. Create a generator function that returns `"Red"`, `"Green"`, and `"Blue"`.
12. Explain the difference between callback functions and higher-order functions.
13. Explain the difference between pure and impure functions.
14. Explain why arrow functions should not be used as constructors.
15. Explain when you would use an IIFE in a real project.
