# JavaScript Masterclass - Lesson 11

# Callback Functions

## Learning Objectives

-   Understand callback functions
-   Learn synchronous vs asynchronous callbacks
-   See callback examples
-   Understand callback nesting
-   Prepare for Callback Hell

------------------------------------------------------------------------

## 1. What is a Callback Function?

A callback function is a function passed as an argument to another
function so it can be executed later.

``` javascript
function greet(name){
  console.log("Hello " + name);
}

function processUser(callback){
  callback("Namraj");
}

processUser(greet);
```

Output:

``` text
Hello Namraj
```

------------------------------------------------------------------------

## 2. Synchronous Callback

``` javascript
[1,2,3].forEach(function(n){
  console.log(n);
});
```

Output:

``` text
1
2
3
```

`forEach()` executes the callback immediately while iterating.

------------------------------------------------------------------------

## 3. Asynchronous Callback

``` javascript
console.log("Start");

setTimeout(function(){
  console.log("Inside Callback");
},2000);

console.log("End");
```

Output:

``` text
Start
End
Inside Callback
```

The browser handles the timer, then the Event Loop schedules the
callback.

------------------------------------------------------------------------

## 4. Why Use Callbacks?

-   Reuse logic
-   Execute code after another task
-   Handle asynchronous operations
-   Build event-driven applications

------------------------------------------------------------------------

## 5. Callback Nesting

``` javascript
login(function(){
  fetchProfile(function(){
    loadPosts(function(){
      console.log("Done");
    });
  });
});
```

Deep nesting becomes difficult to read and maintain.

This problem is called **Callback Hell**.

------------------------------------------------------------------------

## Real-World Analogy

You order food.

-   You place the order.
-   The kitchen cooks.
-   When ready, the waiter calls your name.

The waiter calling your name is like a callback.

------------------------------------------------------------------------

## Interview Questions

### What is a callback?

A function passed to another function that is executed later.

### Give one synchronous callback.

`forEach()`.

### Give one asynchronous callback.

`setTimeout()`.

### Why are callbacks useful?

They allow code to run after another operation completes.

------------------------------------------------------------------------

## Practice Questions

1.  Define callback functions.
2.  Compare synchronous and asynchronous callbacks.
3.  Give two callback examples.
4.  Why can callback nesting become problematic?

------------------------------------------------------------------------

## Coding Exercise

Predict the output.

``` javascript
function execute(callback){
  console.log("Before");
  callback();
  console.log("After");
}

execute(function(){
  console.log("Inside Callback");
});
```

Also identify whether the callback is synchronous or asynchronous.

------------------------------------------------------------------------

## Quick Quiz

1.  A callback is:

A. Variable

B. Function passed to another function

C. Class

D. Object

2.  Which is asynchronous?

A. map()

B. filter()

C. setTimeout()

D. reduce()

3.  Deep callback nesting leads to:

A. Hoisting

B. Callback Hell

C. Parsing

D. Compilation

------------------------------------------------------------------------

## Revision Notes

-   Callbacks are functions passed as arguments.
-   They may execute synchronously or asynchronously.
-   Browser APIs commonly use asynchronous callbacks.
-   Deep nesting hurts readability.
-   Promises solve many callback problems.

------------------------------------------------------------------------

## Next Lesson

Callback Hell
