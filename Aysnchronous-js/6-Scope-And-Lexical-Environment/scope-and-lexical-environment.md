# JavaScript Masterclass - Lesson 6

# Scope & Lexical Environment

## Learning Objectives

-   Understand Scope
-   Learn Global, Function and Block Scope
-   Understand Lexical Scope
-   Learn Scope Chain
-   Learn Variable Shadowing
-   Prepare for Closures

------------------------------------------------------------------------

# 1. What is Scope?

Scope determines **where a variable can be accessed**.

Think of scope as the visibility area of a variable.

------------------------------------------------------------------------

# 2. Global Scope

Variables declared outside any function or block belong to the Global
Scope.

``` javascript
let company = "OpenAI";

function show() {
    console.log(company);
}

show();
```

Output

``` text
OpenAI
```

Global variables are accessible from anywhere in the program.

------------------------------------------------------------------------

# 3. Function Scope

Variables declared inside a function can only be accessed inside that
function.

``` javascript
function greet() {
    let message = "Hello";
    console.log(message);
}

greet();

// console.log(message); ❌
```

Trying to access `message` outside the function throws a ReferenceError.

------------------------------------------------------------------------

# 4. Block Scope

Variables declared with `let` and `const` inside `{}` exist only within
that block.

``` javascript
if (true) {
    let age = 25;
    const city = "Mumbai";
}

// age ❌
// city ❌
```

`var` does **not** have block scope.

``` javascript
if (true) {
    var x = 10;
}

console.log(x);
```

Output

``` text
10
```

------------------------------------------------------------------------

# 5. Lexical Scope

A function can access variables from the scope in which it was
**defined**.

``` javascript
let name = "Namraj";

function outer() {

    let role = "Developer";

    function inner() {
        console.log(name);
        console.log(role);
    }

    inner();
}

outer();
```

Output

``` text
Namraj
Developer
```

------------------------------------------------------------------------

# 6. Scope Chain

If JavaScript cannot find a variable in the current scope, it searches
outward.

``` text
Current Scope
      │
      ▼
Parent Scope
      │
      ▼
Global Scope
```

If the variable isn't found anywhere:

``` text
ReferenceError
```

------------------------------------------------------------------------

# 7. Variable Shadowing

A local variable with the same name hides the outer variable.

``` javascript
let language = "JavaScript";

function demo() {

    let language = "TypeScript";

    console.log(language);
}

demo();

console.log(language);
```

Output

``` text
TypeScript
JavaScript
```

------------------------------------------------------------------------

# Real World Analogy

Imagine a company.

CEO Office = Global Scope

Department = Function Scope

Meeting Room = Block Scope

Employees first ask inside the meeting room, then department, then CEO.

This is the Scope Chain.

------------------------------------------------------------------------

# Interview Questions

### What is Scope?

The region where a variable is accessible.

### Difference between Function Scope and Block Scope?

Function Scope belongs to functions.

Block Scope belongs to `{}` and works with `let` and `const`.

### What is Lexical Scope?

Functions remember the scope where they were created.

### What is Variable Shadowing?

A local variable hides a variable with the same name in an outer scope.

------------------------------------------------------------------------

# Practice Questions

1.  Define Scope.
2.  Explain Global Scope.
3.  Explain Function Scope.
4.  Explain Block Scope.
5.  What is Lexical Scope?
6.  What is the Scope Chain?
7.  Explain Variable Shadowing.

------------------------------------------------------------------------

# Coding Exercise

Predict the output.

``` javascript
let a = 10;

function first() {

    let b = 20;

    if (true) {

        let c = 30;

        console.log(a);
        console.log(b);
        console.log(c);

    }

}

first();
```

Questions:

-   Which variables are accessible inside the block?
-   Can `c` be accessed outside the block?
-   Why?

------------------------------------------------------------------------

# Quick Quiz

1.  Which keyword has block scope?

A. var

B. let

C. function

D. both var and let

------------------------------------------------------------------------

2.  If a variable is not found in the current scope, JavaScript:

A. Stops immediately

B. Searches parent scopes

C. Creates the variable

D. Returns undefined

------------------------------------------------------------------------

3.  Variable Shadowing means:

A. Copying variables

B. Hiding an outer variable using a local variable

C. Deleting variables

D. Hoisting variables

------------------------------------------------------------------------

# Revision Notes

-   Scope controls variable accessibility.
-   Global variables are accessible everywhere.
-   Function variables exist only inside the function.
-   `let` and `const` have block scope.
-   JavaScript uses the Scope Chain to resolve variables.
-   Lexical Scope depends on where a function is defined.
-   Variable Shadowing hides outer variables.

------------------------------------------------------------------------

# Next Lesson

## Closures

Topics:

-   What is a Closure?
-   Why Closures work
-   Lexical Environment + Closures
-   Private Variables
-   Data Encapsulation
-   Real-world examples
