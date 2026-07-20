# JavaScript Masterclass - Lesson 7

# Closures

## Learning Objectives

-   Understand what a Closure is
-   Learn why Closures work
-   Understand Lexical Environment + Closures
-   Build private variables
-   See real-world use cases
-   Prepare for synchronous vs asynchronous JavaScript

------------------------------------------------------------------------

# 1. What is a Closure?

A **Closure** is created when an inner function remembers and can access
variables from its outer function **even after the outer function has
finished executing**.

Closures are possible because JavaScript uses **Lexical Scope**.

------------------------------------------------------------------------

# 2. Basic Example

``` javascript
function outer() {

    let count = 0;

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

const counter = outer();

counter();
counter();
counter();
```

Output

``` text
1
2
3
```

Question:

Why doesn't `count` disappear after `outer()` finishes?

Answer:

Because `inner()` forms a **closure** over `count`.

------------------------------------------------------------------------

# 3. Internal Working

1.  `outer()` creates `count`.
2.  `inner()` is defined.
3.  `inner()` remembers the Lexical Environment.
4.  `outer()` returns `inner`.
5.  `outer()` finishes.
6.  `count` remains alive because `inner()` still references it.

------------------------------------------------------------------------

# 4. Visual Representation

``` text
outer()
 │
 ├── count = 0
 │
 └── inner()
        │
        ▼
Remembers outer variables
```

------------------------------------------------------------------------

# 5. Private Variables

Closures let us create private data.

``` javascript
function bankAccount() {

    let balance = 1000;

    return {
        deposit(amount) {
            balance += amount;
            console.log(balance);
        },
        getBalance() {
            return balance;
        }
    };
}

const account = bankAccount();

account.deposit(500);

console.log(account.getBalance());
```

Output

``` text
1500
1500
```

`balance` cannot be accessed directly.

------------------------------------------------------------------------

# 6. Multiple Closures

``` javascript
function createCounter() {

    let value = 0;

    return function () {
        value++;
        console.log(value);
    };
}

const c1 = createCounter();
const c2 = createCounter();

c1();
c1();

c2();
```

Output

``` text
1
2
1
```

Each closure has its own independent state.

------------------------------------------------------------------------

# 7. Real-World Uses

Closures are commonly used in:

-   Event listeners
-   Timers (`setTimeout`)
-   Callbacks
-   Modules
-   Data encapsulation
-   React Hooks
-   Memoization

------------------------------------------------------------------------

# Real-World Analogy

Imagine a backpack.

A traveler leaves home carrying a backpack.

Even after leaving the house, the backpack still contains everything
packed earlier.

A closure is like that backpack---it carries its outer variables
wherever the inner function goes.

------------------------------------------------------------------------

# Interview Questions

### What is a Closure?

A function together with the lexical environment in which it was
created.

### Why do Closures work?

Because functions remember the scope where they were defined.

### Are outer variables destroyed immediately?

No. They remain in memory while a closure still references them.

### Why are Closures useful?

They allow private variables and persistent state.

------------------------------------------------------------------------

# Practice Questions

1.  Define Closure.
2.  Explain why Closures work.
3.  What is the relationship between Lexical Scope and Closures?
4.  Give three real-world uses of Closures.
5.  Explain private variables using Closures.

------------------------------------------------------------------------

# Coding Exercise

Predict the output.

``` javascript
function outer() {

    let message = "Hello";

    return function () {
        console.log(message);
    };
}

const fn = outer();

fn();
```

Explain why `message` is still available.

------------------------------------------------------------------------

# Quick Quiz

1.  Closures are based on:

A. Hoisting

B. Lexical Scope

C. Event Loop

D. Call Stack

------------------------------------------------------------------------

2.  Which statement is true?

A. Outer variables are destroyed immediately.

B. Closures remember outer variables.

C. Closures only work with `var`.

D. Closures require classes.

------------------------------------------------------------------------

3.  Closures are useful for:

A. Private variables

B. Encapsulation

C. Persistent state

D. All of the above

------------------------------------------------------------------------

# Revision Notes

-   Closures combine a function with its lexical environment.
-   Inner functions remember outer variables.
-   Closures enable private variables.
-   Every invocation creates a separate closure.
-   Closures are heavily used in modern JavaScript.

------------------------------------------------------------------------

# Next Lesson

## Synchronous JavaScript

Topics:

-   What is synchronous execution?
-   Blocking code
-   Single-threaded nature
-   Why asynchronous programming became necessary
