# 📁 07 - Functions (Part 1 - Fundamentals)

# What is a Function?

A function is a reusable block of code designed to perform a specific task.

Instead of writing the same code multiple times, we write it once inside a function and call it whenever needed.

Example

```javascript
function greet() {
    console.log("Welcome to JavaScript");
}

greet();
```

Output

```
Welcome to JavaScript
```

---

# Why Do We Need Functions?

Functions help us:

- Reuse code.
- Reduce duplication.
- Improve readability.
- Organize logic.
- Make debugging easier.
- Divide large programs into smaller modules.

Example without functions

```javascript
console.log("Welcome");
console.log("Welcome");
console.log("Welcome");
```

Example with functions

```javascript
function welcome() {
    console.log("Welcome");
}

welcome();
welcome();
welcome();
```

---

# Function Syntax

```javascript
function functionName(parameters) {

    // code

    return value;

}
```

Example

```javascript
function greet() {
    console.log("Hello");
}
```

---

# Function Declaration

Also called a **Function Statement**.

Syntax

```javascript
function greet() {
    console.log("Hello");
}
```

Calling

```javascript
greet();
```

Output

```
Hello
```

---

# Function Expression

A function stored inside a variable.

Example

```javascript
const greet = function () {
    console.log("Hello");
};

greet();
```

Output

```
Hello
```

---

# Function Declaration vs Function Expression

| Function Declaration | Function Expression |
|----------------------|---------------------|
| Hoisted completely | Variable is hoisted, function is not |
| Can be called before declaration | Cannot be called before initialization |
| Named function | Can be named or anonymous |

---

# Named Function

```javascript
function calculate() {
    console.log("Calculating...");
}
```

---

# Anonymous Function

A function without a name.

```javascript
const greet = function () {
    console.log("Hello");
};
```

Anonymous functions are commonly used as callbacks.

---

# Calling a Function

```javascript
function welcome() {
    console.log("Welcome");
}

welcome();
```

The code inside the function executes only when it is called.

---

# Function Parameters

Parameters are variables listed in the function definition.

```javascript
function greet(name) {
    console.log(name);
}
```

`name` is a parameter.

---

# Function Arguments

Arguments are the actual values passed during the function call.

```javascript
greet("John");
```

`"John"` is an argument.

---

# Parameters vs Arguments

| Parameters | Arguments |
|------------|-----------|
| Defined in function | Passed during function call |
| Variable names | Actual values |

Example

```javascript
function add(a, b) {

}
```

`a` and `b` are parameters.

```javascript
add(10, 20);
```

`10` and `20` are arguments.

---

# Returning Values

Functions can return values using the `return` keyword.

Example

```javascript
function add(a, b) {
    return a + b;
}

const result = add(10, 20);

console.log(result);
```

Output

```
30
```

---

# Function Without Return

```javascript
function greet() {
    console.log("Hello");
}

const result = greet();

console.log(result);
```

Output

```
Hello
undefined
```

Functions return `undefined` if no value is returned.

---

# Returning Multiple Values

A function can return only **one value**.

To return multiple values, return an object or an array.

Using an object

```javascript
function getUser() {
    return {
        name: "John",
        age: 25
    };
}
```

Using an array

```javascript
function getNumbers() {
    return [10, 20];
}
```

---

# Default Parameters

Provide default values if no argument is passed.

```javascript
function greet(name = "Guest") {
    console.log(`Hello ${name}`);
}

greet();
```

Output

```
Hello Guest
```

---

```javascript
greet("John");
```

Output

```
Hello John
```

---

# Rest Parameters

Collect multiple arguments into an array.

Syntax

```javascript
function demo(...values) {

}
```

Example

```javascript
function sum(...numbers) {

    console.log(numbers);

}

sum(10,20,30);
```

Output

```javascript
[10,20,30]
```

---

# Rest Parameter Rules

Correct

```javascript
function demo(a,b,...values){

}
```

Incorrect

```javascript
function demo(...values,a){

}
```

Rest parameter must be the last parameter.

---

# Local Variables

Variables declared inside a function exist only inside that function.

```javascript
function demo(){

    let age = 25;

}

console.log(age);
```

Output

```
ReferenceError
```

---

# Global Variables

Variables declared outside functions.

```javascript
let company = "Salesforce";

function demo(){

    console.log(company);

}
```

Output

```
Salesforce
```

---

# Function Scope

Variables declared with `var` are function-scoped.

```javascript
function demo(){

    var x = 10;

}

console.log(x);
```

Output

```
ReferenceError
```

---

# Variable Shadowing

```javascript
let name = "Global";

function demo(){

    let name = "Local";

    console.log(name);

}

demo();

console.log(name);
```

Output

```
Local
Global
```

---

# Function Hoisting

Function declarations are hoisted.

```javascript
greet();

function greet(){

    console.log("Hello");

}
```

Output

```
Hello
```

---

Function expressions are not hoisted.

```javascript
greet();

const greet = function(){

    console.log("Hello");

};
```

Output

```
ReferenceError
```

---

# Nested Functions

Functions can be declared inside other functions.

```javascript
function outer(){

    function inner(){

        console.log("Inside Inner");

    }

    inner();

}

outer();
```

Output

```
Inside Inner
```

---

# Best Practices

✅ Use meaningful function names.

✅ Keep functions focused on one responsibility.

✅ Return values instead of modifying global variables.

✅ Use default parameters when appropriate.

✅ Prefer `const` for function expressions.

---

# Common Mistakes

Forgetting to return a value.

```javascript
function add(a,b){

a+b;

}
```

---

Calling a function without required arguments.

```javascript
function greet(name){

console.log(name);

}

greet();
```

Output

```
undefined
```

---

Using `return` after additional code.

```javascript
function demo(){

return 10;

console.log("Hello");

}
```

The `console.log()` never executes.

---

Using too many global variables.

---

# Functions in Lightning Web Components

Event Handler

```javascript
handleClick(){

    console.log("Button Clicked");

}
```

---

Input Handler

```javascript
handleChange(event){

    this.searchKey = event.target.value;

}
```

---

Helper Function

```javascript
calculateTotal(price, quantity){

    return price * quantity;

}
```

---

Validation Function

```javascript
isValidEmail(email){

    return email.includes("@");

}
```

---

# Interview Questions (With Answers)

## 1. What is a function?

**Answer**

A function is a reusable block of code designed to perform a specific task. It helps reduce code duplication and improves maintainability.

---

## 2. Difference between parameters and arguments?

**Answer**

Parameters are variables defined in the function declaration.

Arguments are the actual values passed when calling the function.

---

## 3. Difference between function declaration and function expression?

**Answer**

A function declaration is hoisted completely and can be called before it appears in the code.

A function expression is assigned to a variable and cannot be called before initialization.

---

## 4. What happens if a function does not return anything?

**Answer**

JavaScript automatically returns `undefined`.

---

## 5. What are default parameters?

**Answer**

Default parameters provide fallback values when no argument is passed.

Example

```javascript
function greet(name = "Guest") {
    console.log(name);
}
```

---

## 6. What are rest parameters?

**Answer**

Rest parameters collect multiple arguments into a single array using `...`.

Example

```javascript
function sum(...numbers) {

}
```

---

## 7. What is function hoisting?

**Answer**

Function declarations are hoisted, allowing them to be called before they are declared.

Function expressions are not fully hoisted.

---

## 8. Can a function return multiple values?

**Answer**

A function can return only one value. To return multiple values, return an object or an array.

---

# Output-Based Questions (With Answers)

## Question 1

```javascript
function greet() {
    console.log("Hello");
}

greet();
```

**Answer**

```
Hello
```

---

## Question 2

```javascript
function add(a, b) {
    return a + b;
}

console.log(add(10, 20));
```

**Answer**

```
30
```

---

## Question 3

```javascript
function demo() {}

console.log(demo());
```

**Answer**

```
undefined
```

---

## Question 4

```javascript
greet();

function greet() {
    console.log("Welcome");
}
```

**Answer**

```
Welcome
```

Function declarations are hoisted.

---

## Question 5

```javascript
function greet(name = "Guest") {
    console.log(name);
}

greet();
```

**Answer**

```
Guest
```

---

## Question 6

```javascript
function sum(...numbers) {
    console.log(numbers);
}

sum(1, 2, 3);
```

**Answer**

```javascript
[1, 2, 3]
```

---

## Question 7

```javascript
function outer() {

    function inner() {
        console.log("Inside");
    }

    inner();
}

outer();
```

**Answer**

```
Inside
```

---

## Question 8

```javascript
const greet = function () {
    console.log("Hello");
};

greet();
```

**Answer**

```
Hello
```

---

# Scenario-Based Questions (With Answers)

## Scenario 1

You need to calculate the total price of a product based on quantity and unit price.

**Answer**

```javascript
function calculateTotal(price, quantity) {
    return price * quantity;
}
```

---

## Scenario 2

You need a function that welcomes users, but if no name is provided, it should display `"Guest"`.

**Answer**

```javascript
function welcome(name = "Guest") {
    return `Welcome ${name}`;
}
```

---

## Scenario 3

An LWC component receives multiple record IDs. Create a function that accepts any number of IDs.

**Answer**

```javascript
function processRecords(...recordIds) {
    console.log(recordIds);
}
```

---

## Scenario 4

Create a helper function that validates whether a search term is empty.

**Answer**

```javascript
function isSearchValid(searchKey) {
    return searchKey.trim().length > 0;
}
```

---

## Scenario 5

You need a function that returns both the Account Name and Industry.

**Answer**

```javascript
function getAccount() {
    return {
        name: "ABC Corp",
        industry: "Technology"
    };
}
```

---

# Practice Questions

1. Write a function that prints `"Hello JavaScript"`.
2. Write a function that adds two numbers.
3. Write a function that subtracts two numbers.
4. Write a function with default parameters.
5. Write a function using rest parameters.
6. Return an object from a function.
7. Return an array from a function.
8. Demonstrate function hoisting.
9. Create a nested function.
10. Write a function that checks whether a number is even or odd.
11. Write a function that returns the largest of three numbers.
12. Write a function that reverses a string.
13. Write a function that checks whether a string is a palindrome.
14. Write a function that counts the vowels in a string.
15. Write a function that calculates the factorial of a number.
