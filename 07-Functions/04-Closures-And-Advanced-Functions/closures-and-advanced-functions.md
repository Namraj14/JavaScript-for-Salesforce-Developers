# 📁 07 - Functions (Part 4 - Closures & Advanced Function Concepts)

# Introduction

This chapter covers advanced JavaScript concepts frequently asked in interviews and widely used in modern applications.

Topics include:

- Closures (Deep Dive)
- Currying
- Function Composition
- Memoization
- Debouncing
- Throttling
- Performance
- Real-world LWC examples

---

# Closures

## What is a Closure?

A closure is created when an inner function remembers variables from its outer function **even after the outer function has finished executing**.

Example

```javascript
function outer() {

    let count = 0;

    return function () {

        count++;

        console.log(count);

    };

}

const counter = outer();

counter();

counter();

counter();
```

Output

```
1
2
3
```

The variable `count` still exists because the inner function has a closure over it.

---

# How Closures Work

Step 1

```javascript
function outer(){

let message="Hello";

return function(){

console.log(message);

};

}
```

Step 2

```javascript
const fn=outer();
```

The outer function finishes execution.

---

Step 3

```javascript
fn();
```

Output

```
Hello
```

The variable `message` is still remembered.

---

# Why Closures Exist

Closures allow JavaScript to:

- Remember variables
- Maintain state
- Hide private data
- Create reusable functions

---

# Real-World Closure Example

Private Counter

```javascript
function createCounter(){

let count=0;

return{

increment(){

count++;

return count;

},

decrement(){

count--;

return count;

},

getCount(){

return count;

}

};

}

const counter=createCounter();

console.log(counter.increment());

console.log(counter.increment());

console.log(counter.getCount());
```

Output

```
1
2
2
```

The variable `count` cannot be accessed directly.

---

# Advantages of Closures

✅ Data privacy

✅ State management

✅ Function factories

✅ Event handlers

✅ Module pattern

---

# Currying

Currying converts a function with multiple parameters into multiple functions with one parameter each.

Normal Function

```javascript
function add(a,b){

return a+b;

}
```

Curried Function

```javascript
function add(a){

return function(b){

return a+b;

};

}

console.log(add(10)(20));
```

Output

```
30
```

---

Arrow Function Curry

```javascript
const multiply=a=>b=>a*b;

console.log(multiply(5)(4));
```

Output

```
20
```

---

# Why Use Currying?

- Reuse functions
- Partial application
- Cleaner code
- Functional programming

---

# Function Composition

Function composition combines multiple functions into one.

Example

```javascript
const addTwo=x=>x+2;

const double=x=>x*2;

const result=double(addTwo(5));

console.log(result);
```

Output

```
14
```

Flow

```
5

↓

addTwo()

↓

7

↓

double()

↓

14
```

---

# Generic compose()

```javascript
const compose=(f,g)=>

value=>f(g(value));

const addTwo=x=>x+2;

const square=x=>x*x;

const fn=compose(square,addTwo);

console.log(fn(3));
```

Output

```
25
```

---

# Memoization

Memoization stores previously calculated results.

Instead of recalculating, JavaScript returns the cached value.

---

Without Memoization

```javascript
function square(number){

console.log("Calculating...");

return number*number;

}

square(5);

square(5);
```

Output

```
Calculating...
Calculating...
```

---

With Memoization

```javascript
function memoizedSquare(){

const cache={};

return function(number){

if(cache[number]){

return cache[number];

}

console.log("Calculating...");

cache[number]=number*number;

return cache[number];

};

}

const square=memoizedSquare();

console.log(square(5));

console.log(square(5));
```

Output

```
Calculating...

25

25
```

Only calculated once.

---

# Why Memoization?

- Faster performance
- Avoid repeated calculations
- Useful for expensive operations

---

# Debouncing

Debouncing delays function execution until the user stops triggering an event.

Example

```
Typing

↓

Wait

↓

Execute Once
```

---

Implementation

```javascript
function debounce(callback,delay){

let timer;

return function(){

clearTimeout(timer);

timer=setTimeout(callback,delay);

};

}
```

---

Real Example

Search Box

```
Typing

↓

Typing

↓

Typing

↓

Stop

↓

API Call
```

Only one API request is made.

---

# Throttling

Throttling limits how often a function can execute.

Example

```
Scroll Scroll Scroll Scroll

↓

Execute

↓

Wait

↓

Execute
```

---

Implementation

```javascript
function throttle(callback,delay){

let waiting=false;

return function(){

if(waiting){

return;

}

callback();

waiting=true;

setTimeout(()=>{

waiting=false;

},delay);

};

}
```

---

# Debounce vs Throttle

| Debounce | Throttle |
|-----------|----------|
| Waits until events stop | Executes at intervals |
| Search input | Scroll, resize |
| One execution | Multiple executions |

---

# Performance Tips

Avoid creating functions inside loops.

Bad

```javascript
for(let i=0;i<1000;i++){

const fn=()=>i;

}
```

---

Reuse functions whenever possible.

---

Memoize expensive calculations.

---

Avoid unnecessary recursion.

---

# Best Practices

✅ Use closures for private variables.

✅ Use currying for reusable functions.

✅ Use memoization for expensive operations.

✅ Debounce API calls.

✅ Throttle scroll and resize events.

---

# Common Mistakes

Creating memory leaks with closures.

Using recursion when iteration is simpler.

Confusing debounce and throttle.

Memoizing functions that depend on changing external state.

---

# Functions in Lightning Web Components

Search Debouncing

```javascript
handleSearch=debounce(()=>{

this.searchAccounts();

},500);
```

---

Private Variable

```javascript
function createState(){

let value=0;

return{

increment(){

value++;

}

};

}
```

---

Function Composition

```javascript
const formattedName=format(

capitalize(name)

);
```

---

Memoization

```javascript
const cache={};
```

Store expensive calculations.

---

# Interview Questions (With Answers)

## 1. What is a closure?

**Answer**

A closure is created when an inner function remembers variables from its outer function even after the outer function has finished executing.

---

## 2. Why are closures useful?

**Answer**

Closures provide:

- Data privacy
- State preservation
- Function factories
- Module patterns

---

## 3. What is currying?

**Answer**

Currying converts a function with multiple parameters into multiple functions with one parameter each.

---

## 4. What is function composition?

**Answer**

Function composition combines multiple functions so the output of one becomes the input of another.

---

## 5. What is memoization?

**Answer**

Memoization caches previously calculated results to improve performance.

---

## 6. Difference between debounce and throttle?

**Answer**

Debounce waits until events stop before executing.

Throttle executes at fixed intervals while events continue.

---

## 7. When should debounce be used?

**Answer**

Search boxes

Autocomplete

API requests while typing

---

## 8. When should throttle be used?

**Answer**

Scrolling

Window resizing

Mouse movement

Button spam prevention

---

# Output-Based Questions (With Answers)

## Question 1

```javascript
function outer(){

let count=0;

return function(){

count++;

return count;

};

}

const fn=outer();

console.log(fn());

console.log(fn());
```

**Answer**

```
1
2
```

---

## Question 2

```javascript
function add(a){

return function(b){

return a+b;

};

}

console.log(add(5)(10));
```

**Answer**

```
15
```

---

## Question 3

```javascript
const multiply=a=>b=>a*b;

console.log(multiply(3)(4));
```

**Answer**

```
12
```

---

## Question 4

```javascript
const addTwo=x=>x+2;

const square=x=>x*x;

console.log(square(addTwo(4)));
```

**Answer**

```
36
```

---

## Question 5

```javascript
const cache={};

cache[5]=25;

console.log(cache[5]);
```

**Answer**

```
25
```

---

## Question 6

```javascript
const compose=(f,g)=>x=>f(g(x));

const double=x=>x*2;

const addOne=x=>x+1;

console.log(compose(double,addOne)(5));
```

**Answer**

```
12
```

---

# Scenario-Based Questions (With Answers)

## Scenario 1

Create a private counter whose value cannot be modified directly.

**Answer**

```javascript
function createCounter(){

let count=0;

return{

increment(){

return ++count;

}

};

}
```

---

## Scenario 2

An expensive tax calculation runs repeatedly for the same amount.

How can you improve performance?

**Answer**

Use memoization.

```javascript
const cache={};
```

Store calculated values.

---

## Scenario 3

A user types into a search box.

You should make only one API call after typing stops.

**Answer**

Use debouncing.

---

## Scenario 4

A page continuously fires scroll events.

You need to execute the handler every 300 milliseconds.

**Answer**

Use throttling.

---

## Scenario 5

Create a reusable discount function.

**Answer**

```javascript
const discount=percentage=>

price=>

price-(price*percentage/100);

const tenPercent=discount(10);

console.log(tenPercent(1000));
```

---

# Practice Questions

1. Write a closure that stores a private variable.
2. Create a private bank account using closures.
3. Write a curried function for subtraction.
4. Write a curried function for multiplication.
5. Compose three functions together.
6. Build a memoized factorial function.
7. Build a memoized Fibonacci function.
8. Implement a debounce function.
9. Implement a throttle function.
10. Explain the difference between closure and lexical scope.
11. Explain why closures provide data privacy.
12. Explain currying with a real-world example.
13. Explain memoization with a real-world example.
14. Compare debounce and throttle with examples.
15. Explain where closures are used in Lightning Web Components.
