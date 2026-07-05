# 📁 07 - Functions (Part 5 - Functions in Lightning Web Components)

# Introduction

Functions are used everywhere in Lightning Web Components.

Common use cases include:

- Event handling
- Apex calls
- Lifecycle hooks
- @wire methods
- Validation
- Navigation
- Helper methods
- Async/Await
- Promise handling

These are among the most frequently asked Salesforce LWC interview topics.

---

# Event Handler Functions

Event handlers execute when a user performs an action.

Example

```javascript
handleClick() {

    console.log("Button Clicked");

}
```

HTML

```html
<lightning-button
    label="Save"
    onclick={handleClick}>
</lightning-button>
```

---

# Passing Event Object

```javascript
handleChange(event){

    console.log(event.target.value);

}
```

HTML

```html
<lightning-input
    onchange={handleChange}>
</lightning-input>
```

---

# Accessing Dataset Values

HTML

```html
<lightning-button
    data-id="001ABC"
    onclick={handleDelete}>
</lightning-button>
```

JavaScript

```javascript
handleDelete(event){

    const recordId = event.target.dataset.id;

    console.log(recordId);

}
```

---

# Helper Functions

Instead of writing large event handlers, move reusable logic into helper functions.

Example

```javascript
handleSave(){

    if(this.validate()){

        this.saveRecord();

    }

}
```

Helper

```javascript
validate(){

    return this.name.length>0;

}
```

---

# Calling Helper Functions

```javascript
calculateDiscount(price){

    return price*0.9;

}
```

Usage

```javascript
const total=this.calculateDiscount(1000);
```

---

# Lifecycle Hooks

## connectedCallback()

Runs when component is inserted into the DOM.

```javascript
connectedCallback(){

    console.log("Component Loaded");

}
```

Common Uses

- Initial data loading
- API calls
- Default values

---

# disconnectedCallback()

Runs when component is removed.

```javascript
disconnectedCallback(){

    console.log("Destroyed");

}
```

Common Uses

- Remove listeners
- Clear timers

---

# renderedCallback()

Runs after every render.

```javascript
renderedCallback(){

    console.log("Rendered");

}
```

Be careful.

Updating reactive properties here may create infinite loops.

---

# errorCallback()

Handles errors from child components.

```javascript
errorCallback(error,stack){

console.log(error);

}
```

---

# Imperative Apex Call

JavaScript

```javascript
import getAccounts from '@salesforce/apex/AccountController.getAccounts';

loadAccounts(){

    getAccounts()

    .then(result=>{

        this.accounts=result;

    })

    .catch(error=>{

        console.error(error);

    });

}
```

---

# Async/Await

Modern way to work with Promises.

```javascript
async loadAccounts(){

    try{

        this.accounts=await getAccounts();

    }

    catch(error){

        console.error(error);

    }

}
```

---

# Promise Functions

```javascript
getAccounts()

.then(result=>{

})

.catch(error=>{

})

.finally(()=>{

});
```

---

# @wire Function

```javascript
@wire(getAccounts)

wiredAccounts({

data,

error

}){

if(data){

this.accounts=data;

}

else if(error){

console.error(error);

}

}
```

---

# @wire Property

```javascript
@wire(getAccounts)

accounts;
```

---

# Calling Apex with Parameters

```javascript
searchAccounts(){

getAccounts({

searchKey:this.searchKey

})

.then(result=>{

this.accounts=result;

});

}
```

---

# Async Event Handler

```javascript
async handleSearch(){

this.accounts=await getAccounts();

}
```

---

# Validation Functions

```javascript
validateEmail(email){

return email.includes("@");

}
```

---

# Multiple Helper Functions

```javascript
handleSave(){

if(!this.validate()){

return;

}

this.prepareData();

this.save();

this.showToast();

}
```

---

# Navigation Function

```javascript
navigateToRecord(recordId){

this[NavigationMixin.Navigate]({

type:'standard__recordPage',

attributes:{

recordId,

actionName:'view'

}

});

}
```

---

# Toast Function

```javascript
showSuccessToast(){

this.dispatchEvent(

new ShowToastEvent({

title:'Success',

message:'Record Saved',

variant:'success'

})

);

}
```

---

# Spinner Functions

```javascript
showSpinner(){

this.isLoading=true;

}
```

```javascript
hideSpinner(){

this.isLoading=false;

}
```

---

# Debounced Search

```javascript
handleSearch=debounce(()=>{

this.searchAccounts();

},500);
```

---

# Generic Error Handler

```javascript
handleError(error){

console.error(error);

}
```

---

# Reusable Utility Function

```javascript
formatCurrency(amount){

return `$${amount}`;

}
```

---

# Real Project Structure

```text
handleSave()

↓

validate()

↓

prepareData()

↓

saveRecord()

↓

showToast()

↓

refreshData()
```

---

# Best Practices

✅ Keep event handlers small.

✅ Move repeated logic into helper methods.

✅ Use `async/await` for readability.

✅ Handle errors with `try...catch`.

✅ Use descriptive function names.

✅ Separate UI logic from business logic.

---

# Common Mistakes

Putting hundreds of lines inside one function.

Calling Apex from `renderedCallback()` without safeguards.

Updating reactive variables inside `renderedCallback()`.

Ignoring Promise errors.

Not using helper functions.

---

# Functions in Lightning Web Components (Complete Example)

```javascript
async handleSave(){

try{

this.showSpinner();

if(!this.validate()){

return;

}

await saveAccount({

account:this.account

});

this.showSuccessToast();

}

catch(error){

this.handleError(error);

}

finally{

this.hideSpinner();

}

}
```

---

# Interview Questions (With Answers)

## 1. Which lifecycle hook is used to load initial data?

**Answer**

`connectedCallback()`

---

## 2. Difference between imperative Apex and @wire?

**Answer**

**Imperative Apex**

- Called manually.
- Supports user actions.
- Returns a Promise.

**@wire**

- Runs automatically.
- Reactive.
- Used for read operations.

---

## 3. Why use async/await instead of then()?

**Answer**

`async/await` makes asynchronous code easier to read and maintain while still using Promises.

---

## 4. Why should reactive variables not be updated inside renderedCallback()?

**Answer**

Updating reactive properties inside `renderedCallback()` can trigger another render, causing an infinite rendering loop.

---

## 5. Where should validation logic be written?

**Answer**

In separate helper functions to keep event handlers clean and reusable.

---

## 6. What is the purpose of finally()?

**Answer**

`finally()` executes regardless of success or failure. It is commonly used to hide spinners or release resources.

---

## 7. Which function is commonly used for cleanup?

**Answer**

`disconnectedCallback()`

---

## 8. Why should large event handlers be avoided?

**Answer**

Large handlers are difficult to read, maintain, test, and reuse. Business logic should be extracted into helper methods.

---

# Output-Based Questions (With Answers)

## Question 1

```javascript
connectedCallback(){

console.log("Loaded");

}
```

**Answer**

```
Loaded
```

Runs when the component is inserted into the DOM.

---

## Question 2

```javascript
handleClick(){

console.log("Clicked");

}
```

**Answer**

```
Clicked
```

When the button is clicked.

---

## Question 3

```javascript
async load(){

this.accounts=await getAccounts();

}
```

**Answer**

The function waits for `getAccounts()` to complete before assigning the result to `this.accounts`.

---

## Question 4

```javascript
finally(()=>{

this.isLoading=false;

});
```

**Answer**

The spinner is hidden whether the Apex call succeeds or fails.

---

## Question 5

```javascript
handleChange(event){

console.log(event.target.value);

}
```

**Answer**

Prints the current value entered into the input field.

---

## Question 6

```javascript
renderedCallback(){

this.count++;

}
```

**Answer**

This can create an infinite render loop because updating a reactive property triggers another render.

---

# Scenario-Based Questions (With Answers)

## Scenario 1

A user clicks **Save**. Before calling Apex, you must validate the input, display a spinner, save the record, show a success toast, and hide the spinner.

**Answer**

```javascript
async handleSave(){

try{

this.showSpinner();

if(!this.validate()){

return;

}

await saveAccount({

account:this.account

});

this.showSuccessToast();

}

catch(error){

this.handleError(error);

}

finally{

this.hideSpinner();

}

}
```

---

## Scenario 2

A search box should call Apex only after the user stops typing for 500 milliseconds.

**Answer**

```javascript
handleSearch=debounce(()=>{

this.searchAccounts();

},500);
```

---

## Scenario 3

A user selects a row in a datatable. Retrieve the selected record ID.

**Answer**

```javascript
handleRowSelection(event){

const selectedRows=event.detail.selectedRows;

const recordId=selectedRows[0].Id;

}
```

---

## Scenario 4

A component should load Account records automatically when it is first displayed.

**Answer**

```javascript
connectedCallback(){

this.loadAccounts();

}
```

---

## Scenario 5

A component starts a timer. Ensure it is stopped when the component is removed from the page.

**Answer**

```javascript
connectedCallback(){

this.timer=setInterval(()=>{

},1000);

}

disconnectedCallback(){

clearInterval(this.timer);

}
```

---

# Practice Questions

1. Write a `handleClick()` event handler.
2. Write a `handleChange()` function that stores input values.
3. Write a helper function that validates an email address.
4. Write an imperative Apex function using `.then()` and `.catch()`.
5. Rewrite the previous function using `async/await`.
6. Load records in `connectedCallback()`.
7. Write a reusable toast helper method.
8. Write reusable spinner helper methods.
9. Write a function that navigates to a record page.
10. Create a generic error handler.
11. Write a debounced search function.
12. Explain the difference between `connectedCallback()` and `renderedCallback()`.
13. Explain the difference between imperative Apex and `@wire`.
14. Explain why helper functions improve code quality.
15. Design a complete save flow using validation, Apex, toast messages, and spinner management.
