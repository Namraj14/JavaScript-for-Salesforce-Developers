# JavaScript Masterclass - Lesson 5

# Hoisting

## Learning Objectives

-   Understand what hoisting really is
-   Learn hoisting with `var`, `let`, and `const`
-   Understand the Temporal Dead Zone (TDZ)
-   Compare function declarations and function expressions
-   Solve common interview questions

------------------------------------------------------------------------

# 1. What is Hoisting?

**Hoisting** is JavaScript's behavior of processing declarations before
executing code.

Important:

-   JavaScript **does not move your code**.
-   During the **Memory Creation Phase**, declarations are processed
    before execution begins.

------------------------------------------------------------------------

# 2. Hoisting with `var`

``` javascript
console.log(a);

var a = 10;

console.log(a);
```

Memory Phase

``` text
a → undefined
```

Execution

``` text
console.log(a) → undefined
a = 10
console.log(a) → 10
```

Output

``` text
undefined
10
```

------------------------------------------------------------------------

# 3. Hoisting with `let`

``` javascript
console.log(age);

let age = 25;
```

Output

``` text
ReferenceError:
Cannot access 'age' before initialization
```

Why?

`age` exists in memory but is inside the **Temporal Dead Zone (TDZ)**
until its declaration executes.

------------------------------------------------------------------------

# 4. Hoisting with `const`

``` javascript
console.log(PI);

const PI = 3.14;
```

Output

``` text
ReferenceError
```

Like `let`, `const` is hoisted but inaccessible inside the TDZ.

------------------------------------------------------------------------

# 5. Function Declaration

``` javascript
greet();

function greet() {
    console.log("Hello");
}
```

Output

``` text
Hello
```

Entire function declarations are stored during the Memory Creation
Phase.

------------------------------------------------------------------------

# 6. Function Expression

``` javascript
greet();

var greet = function () {
    console.log("Hello");
};
```

Memory Phase

``` text
greet → undefined
```

Execution

``` text
greet();
```

Output

``` text
TypeError:
greet is not a function
```

Reason:

At that moment `greet` is `undefined`.

------------------------------------------------------------------------

# 7. Visual Comparison

  Type                   Hoisted         Usable Before Declaration
  ---------------------- --------------- ---------------------------
  var                    Yes             Yes (undefined)
  let                    Yes             No (TDZ)
  const                  Yes             No (TDZ)
  Function Declaration   Yes             Yes
  Function Expression    Variable only   No

------------------------------------------------------------------------

# 8. Common Misconceptions

❌ Hoisting moves code.

✅ Hoisting is the result of the Memory Creation Phase.

------------------------------------------------------------------------

❌ let and const are not hoisted.

✅ They are hoisted, but remain inside the TDZ until initialized.

------------------------------------------------------------------------

# Interview Questions

### What is Hoisting?

The behavior where JavaScript processes declarations before executing
code.

### Why does `var` print undefined?

Because memory is allocated with the initial value `undefined`.

### Why does `let` throw a ReferenceError?

Because it is inside the Temporal Dead Zone.

### Why can function declarations be called before they appear?

Because the complete function is stored during the Memory Creation
Phase.

------------------------------------------------------------------------

# Practice Questions

1.  Explain hoisting in your own words.
2.  Why does `var` return `undefined`?
3.  What is the TDZ?
4.  Why are function declarations hoisted differently from function
    expressions?
5.  Compare `var`, `let`, and `const`.

------------------------------------------------------------------------

# Coding Exercise

Predict the output.

``` javascript
console.log(x);

var x = 5;

test();

function test() {
    console.log("Function Declaration");
}

console.log(y);

let y = 20;
```

Explain each output step.

------------------------------------------------------------------------

# Quick Quiz

1.  Which keyword is initialized with `undefined`?

A. let

B. const

C. var

D. class

------------------------------------------------------------------------

2.  Accessing `let` before declaration causes:

A. undefined

B. SyntaxError

C. ReferenceError

D. TypeError

------------------------------------------------------------------------

3.  Which can be called before its declaration?

A. Function Expression

B. Arrow Function

C. Function Declaration

D. Anonymous Function

------------------------------------------------------------------------

# Revision Notes

-   Hoisting happens because of the Memory Creation Phase.
-   `var` is initialized with `undefined`.
-   `let` and `const` are hoisted but stay in the TDZ.
-   Function declarations are fully hoisted.
-   Function expressions are not callable before assignment.

------------------------------------------------------------------------

# Next Lesson

## Scope and Lexical Environment

Topics:

-   Global Scope
-   Function Scope
-   Block Scope
-   Lexical Scope
-   Scope Chain
-   Shadowing
