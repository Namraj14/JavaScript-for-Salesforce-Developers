# JavaScript Masterclass - Lesson 1

## What Happens Before JavaScript Executes?

**Goal:** Understand how JavaScript starts executing code. This
foundation is essential before learning asynchronous JavaScript.

------------------------------------------------------------------------

# Lesson Overview

1.  What is JavaScript?
2.  What is the JavaScript Engine?
3.  Compilation vs Interpretation
4.  Parsing
5.  Abstract Syntax Tree (AST)
6.  Execution Context (Introduction)
7.  Syntax Examples
8.  Real-world Example
9.  Interview Questions
10. Practice Questions
11. Quiz

------------------------------------------------------------------------

# 1. What is JavaScript?

JavaScript is a **single-threaded, synchronous programming language**.

## Single-threaded

Only one piece of JavaScript code executes at a time because JavaScript
has one Call Stack.

Example:

``` text
Customer 1
   ↓
Customer 2
   ↓
Customer 3
```

## Synchronous

JavaScript executes one statement completely before moving to the next.

``` javascript
console.log("A");
console.log("B");
console.log("C");
```

Output:

``` text
A
B
C
```

------------------------------------------------------------------------

# 2. What is the JavaScript Engine?

The JavaScript Engine reads your JavaScript code, validates it, prepares
it, and executes it.

Common engines:

  Environment   Engine
  ------------- ----------------
  Chrome        V8
  Edge          V8
  Firefox       SpiderMonkey
  Safari        JavaScriptCore
  Node.js       V8

------------------------------------------------------------------------

# 3. JavaScript Execution Flow

``` text
JavaScript Code
        ↓
Tokenizer
        ↓
Parser
        ↓
Abstract Syntax Tree (AST)
        ↓
Compilation (JIT)
        ↓
Execution
```

------------------------------------------------------------------------

# 4. Tokenization

Example:

``` javascript
let x = 5;
```

Tokens:

``` text
let
x
=
5
;
```

------------------------------------------------------------------------

# 5. Parsing

The parser checks whether your code follows JavaScript grammar.

Correct:

``` javascript
let age = 25;
```

Incorrect:

``` javascript
let = age 25;
```

------------------------------------------------------------------------

# 6. Abstract Syntax Tree (AST)

Conceptually:

``` text
Variable Declaration
       │
 Identifier
       │
      age
       │
 Initializer
       │
      25
```

The engine uses this tree internally instead of repeatedly reading raw
source code.

------------------------------------------------------------------------

# 7. Compilation

Modern engines use **Just-In-Time (JIT) Compilation**, combining
interpretation and compilation for better performance.

------------------------------------------------------------------------

# 8. Execution

Once prepared, JavaScript begins executing your code.

Example:

``` javascript
let firstName = "Namraj";

console.log(firstName);
```

Output:

``` text
Namraj
```

------------------------------------------------------------------------

# Complete Flow

``` text
Write Code
    ↓
Tokenization
    ↓
Parsing
    ↓
AST Creation
    ↓
Compilation
    ↓
Execution
```

------------------------------------------------------------------------

# Real-Life Analogy

Recipe → Read → Check Ingredients → Prepare → Bake

JavaScript:

Code → Read → Check Syntax → Prepare → Execute

------------------------------------------------------------------------

# Interview Questions

### 1. What is a JavaScript Engine?

Software that reads, validates, prepares, and executes JavaScript code.

### 2. What is Parsing?

The process of validating JavaScript syntax and creating an AST.

### 3. What is an AST?

An internal tree representation of your code used by the JavaScript
engine.

### 4. Is JavaScript interpreted or compiled?

Modern JavaScript engines use **JIT (Just-In-Time) compilation**,
combining both approaches.

------------------------------------------------------------------------

# Practice Questions

1.  Why can't the computer execute JavaScript directly?
2.  What is the role of the JavaScript engine?
3.  What happens during parsing?
4.  What is tokenization?
5.  What is an AST?

------------------------------------------------------------------------

# Coding Exercise

Predict the output:

``` javascript
let company = "OpenAI";

console.log(company);
console.log("JavaScript");
```

Also explain the stages the JavaScript engine goes through before
producing the output.

------------------------------------------------------------------------

# Quick Quiz

## 1.

Which component checks JavaScript grammar?

-   A. Compiler
-   B. Parser
-   C. Browser
-   D. Event Loop

## 2.

What is created after parsing?

-   A. Call Stack
-   B. Event Queue
-   C. AST
-   D. Promise

## 3.

Which statement is correct?

-   A. JavaScript runs directly on the CPU.
-   B. The JavaScript engine prepares and executes the code.
-   C. Browsers execute JavaScript without an engine.
-   D. The parser converts JavaScript into HTML.

------------------------------------------------------------------------

# Next Lesson

**Execution Context**

We'll cover:

-   Global Execution Context
-   Memory Creation Phase
-   Execution Phase
-   Hoisting
-   Function Execution Context
-   Call Stack

Do not proceed until you've completed the practice questions and quiz.
