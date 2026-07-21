# JavaScript Masterclass - Lesson 12

# Callback Hell

## Learning Objectives

-   Understand Callback Hell
-   Learn why deeply nested callbacks are problematic
-   Understand the Pyramid of Doom
-   Learn why Promises were introduced

------------------------------------------------------------------------

# 1. What is Callback Hell?

Callback Hell occurs when multiple asynchronous operations depend on one
another and callbacks become deeply nested.

Example:

``` javascript
login(function(user){

  fetchProfile(user,function(profile){

    fetchOrders(profile,function(orders){

      processPayment(orders,function(result){

        console.log("Completed");

      });

    });

  });

});
```

The code works, but becomes difficult to read and maintain.

------------------------------------------------------------------------

# 2. Why is it a Problem?

Problems include:

-   Poor readability
-   Difficult debugging
-   Hard error handling
-   Difficult maintenance
-   Tight coupling

------------------------------------------------------------------------

# 3. Pyramid of Doom

``` text
login()
  └── fetchProfile()
        └── fetchOrders()
              └── processPayment()
                    └── sendEmail()
```

Every new asynchronous task increases indentation.

------------------------------------------------------------------------

# 4. Real-World Example

Imagine filling out paperwork where each form can only begin after the
previous one is approved.

After several steps, tracking the process becomes confusing.

Nested callbacks create the same complexity.

------------------------------------------------------------------------

# 5. How Developers Solved It

JavaScript introduced **Promises**.

Instead of nesting:

``` javascript
login()
  .then(fetchProfile)
  .then(fetchOrders)
  .then(processPayment)
  .then(sendEmail)
  .catch(console.error);
```

The code becomes flatter and easier to follow.

------------------------------------------------------------------------

# Interview Questions

### What is Callback Hell?

Deep nesting of callbacks that reduces readability and maintainability.

### Why is it called the Pyramid of Doom?

Because the code forms a pyramid-shaped indentation.

### Why were Promises introduced?

To write asynchronous code in a cleaner and more manageable way.

------------------------------------------------------------------------

# Practice Questions

1.  Define Callback Hell.
2.  List four problems caused by Callback Hell.
3.  Why do Promises solve Callback Hell?
4.  Explain the Pyramid of Doom.

------------------------------------------------------------------------

# Coding Exercise

Convert this mentally into a Promise chain:

``` javascript
step1(function(){
  step2(function(){
    step3(function(){
      console.log("Done");
    });
  });
});
```

------------------------------------------------------------------------

# Quick Quiz

1.  Callback Hell mainly affects:

A. Performance

B. Readability

C. Memory allocation

D. Parsing

2.  Callback Hell is also known as:

A. Event Loop

B. Pyramid of Doom

C. Memory Leak

D. Hoisting

3.  Promises help by:

A. Increasing nesting

B. Flattening asynchronous code

C. Removing callbacks completely

D. Blocking execution

------------------------------------------------------------------------

# Revision Notes

-   Callback Hell results from deeply nested callbacks.
-   It makes code difficult to read and debug.
-   Promises improve readability and error handling.
-   Modern JavaScript prefers Promises and async/await.

------------------------------------------------------------------------

# Next Lesson

## Promises

-   Promise states
-   resolve()
-   reject()
-   then()
-   catch()
-   finally()
