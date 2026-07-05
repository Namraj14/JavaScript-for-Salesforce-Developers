# 📁 10 - Arrow Functions (Part 2 - Advanced Arrow Functions)

# Introduction

Arrow functions are much more than just shorter functions.

This chapter covers the advanced concepts that are frequently asked in JavaScript interviews and heavily used in Salesforce Lightning Web Components (LWC).

Topics include:

- Arrow Functions and `this`
- Lexical `this`
- Arrow Functions vs Regular Functions
- Arrow Functions inside Objects
- Arrow Functions inside Classes
- Arrow Functions in Callbacks
- `map()`
- `filter()`
- `reduce()`
- Arrow Functions with `setTimeout()`
- Constructor Limitation
- `arguments` Object
- Performance Considerations

---

# Arrow Functions and `this`

The biggest difference between regular functions and arrow functions is how they handle `this`.

Regular functions create their own `this`.

Arrow functions inherit `this` from their surrounding scope.

Example

```javascript
const employee = {

    name: "John",

    greet() {

        const display = () => {

            console.log(this.name);

        };

        display();

    }

};

employee.greet();
```

Output

```
John
```

---

# Regular Function

```javascript
const employee = {

    name: "John",

    greet() {

        function display() {

            console.log(this.name);

        }

        display();

    }

};

employee.greet();
```

Output (Strict Mode)

```
undefined
```

---

# Lexical `this`

Arrow functions capture `this` from the scope where they are created.

```javascript
const company = {

    name: "Salesforce",

    show() {

        const print = () => {

            console.log(this.name);

        };

        print();

    }

};

company.show();
```

Output

```
Salesforce
```

---

# Arrow Function vs Regular Function

| Feature | Regular Function | Arrow Function |
|----------|------------------|----------------|
| Own `this` | ✅ Yes | ❌ No |
| Constructor | ✅ Yes | ❌ No |
| `arguments` object | ✅ Yes | ❌ No |
| Can use `new` | ✅ Yes | ❌ No |
| Suitable for object methods | ✅ Yes | ❌ Usually No |
| Best for callbacks | ❌ Sometimes | ✅ Yes |

---

# Arrow Functions Inside Objects

Avoid

```javascript
const employee = {

    name: "John",

    greet: () => {

        console.log(this.name);

    }

};

employee.greet();
```

Output

```
undefined
```

---

Correct

```javascript
const employee = {

    name: "John",

    greet() {

        console.log(this.name);

    }

};
```

---

# Arrow Functions Inside Classes

Regular Method

```javascript
class Employee {

    constructor(name) {

        this.name = name;

    }

    greet() {

        console.log(this.name);

    }

}
```

---

Arrow Property

```javascript
class Employee {

    name = "John";

    greet = () => {

        console.log(this.name);

    };

}

new Employee().greet();
```

Output

```
John
```

Arrow class fields automatically preserve `this`.

---

# Arrow Functions in Callback Functions

```javascript
const numbers = [1,2,3];

numbers.forEach(number => {

    console.log(number);

});
```

Output

```
1
2
3
```

---

# map()

Transforms every element.

```javascript
const numbers = [1,2,3];

const squares = numbers.map(

number => number * number

);

console.log(squares);
```

Output

```javascript
[1,4,9]
```

---

# filter()

Returns matching elements.

```javascript
const numbers = [1,2,3,4];

const even = numbers.filter(

number => number % 2 === 0

);

console.log(even);
```

Output

```javascript
[2,4]
```

---

# reduce()

Reduces an array to a single value.

```javascript
const numbers = [10,20,30];

const total = numbers.reduce(

(sum, number) => sum + number,

0

);

console.log(total);
```

Output

```
60
```

---

# Arrow Functions with `setTimeout()`

Recommended

```javascript
setTimeout(() => {

    console.log("Executed");

},1000);
```

---

Avoid

```javascript
setTimeout(function(){

console.log(this);

},1000);
```

`this` may not be what you expect.

---

# Constructor Limitation

Arrow functions cannot be used as constructors.

Wrong

```javascript
const Employee = (name) => {

    this.name = name;

};

const emp = new Employee("John");
```

Output

```
TypeError: Employee is not a constructor
```

---

Correct

```javascript
function Employee(name){

this.name=name;

}

const emp=new Employee("John");
```

---

# `arguments` Object

Regular Functions

```javascript
function demo(){

console.log(arguments);

}

demo(1,2,3);
```

Output

```javascript
Arguments(3)
```

---

Arrow Functions

```javascript
const demo=()=>{

console.log(arguments);

};

demo(1,2);
```

Output

```
ReferenceError
```

Arrow functions do not have their own `arguments`.

Use rest parameters instead.

```javascript
const demo=(...args)=>{

console.log(args);

};

demo(1,2,3);
```

Output

```javascript
[1,2,3]
```

---

# Performance Considerations

Use arrow functions for:

- Array methods
- Promise callbacks
- Event callbacks
- `setTimeout()`
- `setInterval()`

Avoid using arrow functions as object methods when `this` should refer to the object.

Avoid creating unnecessary arrow functions inside large loops if performance is critical.

---

# Best Practices

✅ Use arrow functions for callbacks.

✅ Use arrow functions with `map()`, `filter()`, and `reduce()`.

✅ Use rest parameters instead of `arguments`.

✅ Use regular methods for object methods.

✅ Use arrow class fields when you need automatically bound `this`.

---

# Common Mistakes

Using arrow functions as object methods.

Trying to use `new` with an arrow function.

Using `arguments` inside an arrow function.

Expecting arrow functions to create their own `this`.

Using regular callbacks inside asynchronous code when lexical `this` is required.

---

# Arrow Functions in Lightning Web Components

Promise Callback

```javascript
getAccounts()

.then(result=>{

this.accounts=result;

});
```

---

Array Mapping

```javascript
const names=this.accounts.map(

account=>account.Name

);
```

---

Filtering

```javascript
const active=this.accounts.filter(

account=>account.Active__c

);
```

---

Reducing

```javascript
const total=this.orders.reduce(

(sum,order)=>sum+order.Amount,

0

);
```

---

`setTimeout()`

```javascript
setTimeout(()=>{

this.isLoading=false;

},1000);
```

---

# Interview Questions (With Answers)

## 1. Why do arrow functions not have their own `this`?

**Answer**

Arrow functions inherit `this` from their surrounding lexical scope. They never create their own `this`.

---

## 2. Can arrow functions be constructors?

**Answer**

No. Arrow functions cannot be used with the `new` keyword because they do not have a `[[Construct]]` method.

---

## 3. Why should arrow functions not be used as object methods?

**Answer**

Because they do not bind `this` to the object. Instead, they inherit `this` from the surrounding scope.

---

## 4. Why are arrow functions commonly used with `map()` and `filter()`?

**Answer**

They provide concise syntax and preserve lexical `this`, making callback code cleaner and easier to read.

---

## 5. Do arrow functions have an `arguments` object?

**Answer**

No. Use rest parameters (`...args`) instead.

---

## 6. What is lexical `this`?

**Answer**

Lexical `this` means an arrow function inherits `this` from the scope in which it was created.

---

## 7. Why are arrow functions preferred in Promise callbacks?

**Answer**

They preserve the surrounding `this`, allowing access to component properties and methods without additional binding.

---

## 8. What is the main advantage of arrow functions?

**Answer**

Shorter syntax and automatic preservation of lexical `this`.

---

# Output-Based Questions (With Answers)

## Question 1

```javascript
const square = number => number * number;

console.log(square(6));
```

**Answer**

```
36
```

---

## Question 2

```javascript
const numbers = [1,2,3];

const result = numbers.map(

number => number + 1

);

console.log(result);
```

**Answer**

```javascript
[2,3,4]
```

---

## Question 3

```javascript
const numbers=[1,2,3,4];

console.log(

numbers.filter(

number=>number>2

)

);
```

**Answer**

```javascript
[3,4]
```

---

## Question 4

```javascript
const numbers=[10,20,30];

console.log(

numbers.reduce(

(sum,number)=>sum+number,

0

)

);
```

**Answer**

```
60
```

---

## Question 5

```javascript
const demo=(...args)=>{

console.log(args.length);

};

demo(1,2,3,4);
```

**Answer**

```
4
```

---

## Question 6

```javascript
const employee={

name:"John",

show(){

const display=()=>{

console.log(this.name);

};

display();

}

};

employee.show();
```

**Answer**

```
John
```

---

# Scenario-Based Questions (With Answers)

## Scenario 1

You need to preserve `this` inside an Apex Promise callback.

**Answer**

```javascript
getAccounts()

.then(result=>{

this.accounts=result;

});
```

---

## Scenario 2

Transform a list of Contacts into an array of email addresses.

**Answer**

```javascript
const emails=contacts.map(

contact=>contact.Email

);
```

---

## Scenario 3

Filter active Accounts.

**Answer**

```javascript
const active=this.accounts.filter(

account=>account.Active__c

);
```

---

## Scenario 4

Calculate the total amount of all Orders.

**Answer**

```javascript
const total=this.orders.reduce(

(sum,order)=>sum+order.Amount,

0

);
```

---

## Scenario 5

Hide a spinner after three seconds while preserving the component context.

**Answer**

```javascript
setTimeout(()=>{

this.isLoading=false;

},3000);
```

---

# Practice Questions

1. Explain lexical `this` with an example.
2. Show why arrow functions should not be used as object methods.
3. Create an arrow function that uses rest parameters.
4. Demonstrate that arrow functions cannot be used as constructors.
5. Use `map()` to double every number in an array.
6. Use `filter()` to return only odd numbers.
7. Use `reduce()` to calculate the product of an array.
8. Compare `arguments` and rest parameters.
9. Write an arrow callback for `setTimeout()`.
10. Create an arrow function inside a class.
11. Explain why arrow functions are preferred in Promise callbacks.
12. Compare regular functions and arrow functions with respect to `this`.
13. Explain why arrow functions do not have their own `arguments`.
14. Explain why arrow functions cannot be used with `new`.
15. Explain the differences between arrow functions and regular functions with examples.
