# 📁 10 - Arrow Functions (Part 3 - Arrow Functions in Lightning Web Components)

# Introduction

Arrow functions are used extensively in Lightning Web Components because they preserve the component's `this`.

They are commonly used in:

- Promise callbacks
- Imperative Apex calls
- Async/Await
- Array methods
- Event listeners
- Timers
- Debouncing
- Throttling
- Data transformation

Understanding where to use (and where **not** to use) arrow functions is essential for Salesforce interviews.

---

# Why Arrow Functions are Popular in LWC

Arrow functions inherit the surrounding `this`, which in an LWC is the current component instance.

Example

```javascript
getAccounts()
    .then(result => {
        this.accounts = result;
    });
```

Here, `this` correctly refers to the component.

---

# Arrow Functions in Event Handlers

LWC event handlers themselves are usually written as **regular class methods**.

```javascript
handleClick() {
    this.isLoading = true;
}
```

Although this works:

```javascript
handleClick = () => {
    this.isLoading = true;
};
```

the standard Salesforce style is to use regular methods unless you specifically need a bound function.

---

# Arrow Functions in Promise Callbacks

Recommended

```javascript
getAccounts()
    .then(result => {
        this.accounts = result;
    })
    .catch(error => {
        this.error = error;
    });
```

---

Wrong

```javascript
getAccounts()
    .then(function(result) {
        this.accounts = result;
    });
```

Output

```
TypeError
```

Because the regular function loses the component's `this`.

---

# Arrow Functions with Imperative Apex

```javascript
import getContacts from '@salesforce/apex/ContactController.getContacts';

loadContacts() {

    getContacts()

        .then(result => {

            this.contacts = result;

        })

        .catch(error => {

            this.error = error;

        });

}
```

---

# Arrow Functions with Async/Await

```javascript
async loadAccounts() {

    try {

        this.accounts = await getAccounts();

    }

    catch(error) {

        this.error = error;

    }

}
```

No callback is needed because `await` already preserves the component context.

---

# Arrow Functions with `@wire`

```javascript
@wire(getAccounts)

wiredAccounts({ data, error }) {

    if(data) {

        this.accounts = data;

    }

    else if(error) {

        this.error = error;

    }

}
```

The wire method itself is a regular method.

Arrow functions are generally unnecessary here.

---

# Arrow Functions in `map()`

Transform records.

```javascript
const accountNames = this.accounts.map(

account => account.Name

);
```

Output

```javascript
[
    "ABC",
    "XYZ"
]
```

---

# Transform Objects

```javascript
const updatedAccounts = this.accounts.map(

account => ({

    ...account,

    selected: false

})

);
```

---

# Arrow Functions in `filter()`

```javascript
const activeAccounts = this.accounts.filter(

account => account.IsActive__c

);
```

---

# Arrow Functions in `reduce()`

```javascript
const totalAmount = this.orders.reduce(

(sum, order) => sum + order.Amount,

0

);
```

---

# Arrow Functions in `forEach()`

```javascript
this.accounts.forEach(

account => {

    console.log(account.Name);

}

);
```

---

# Arrow Functions with `find()`

```javascript
const account = this.accounts.find(

account => account.Id === this.recordId

);
```

---

# Arrow Functions with `some()`

```javascript
const hasInactive = this.accounts.some(

account => !account.IsActive__c

);
```

---

# Arrow Functions with `every()`

```javascript
const allActive = this.accounts.every(

account => account.IsActive__c

);
```

---

# Arrow Functions with `setTimeout()`

Recommended

```javascript
setTimeout(() => {

    this.isLoading = false;

}, 2000);
```

---

# Arrow Functions with `setInterval()`

```javascript
this.timer = setInterval(() => {

    console.log("Running");

}, 1000);
```

---

# Debouncing

```javascript
debounce(callback, delay) {

    clearTimeout(this.timer);

    this.timer = setTimeout(() => {

        callback();

    }, delay);

}
```

Usage

```javascript
handleSearch(event) {

    this.searchKey = event.target.value;

    this.debounce(() => {

        this.searchAccounts();

    }, 500);

}
```

---

# Throttling

```javascript
throttle(callback, delay) {

    if(this.isWaiting) {

        return;

    }

    callback();

    this.isWaiting = true;

    setTimeout(() => {

        this.isWaiting = false;

    }, delay);

}
```

---

# Real-World Example

```javascript
async handleSave() {

    try {

        this.isLoading = true;

        await saveAccount({

            account: this.account

        });

        this.dispatchEvent(

            new ShowToastEvent({

                title: "Success",

                message: "Record Saved",

                variant: "success"

            })

        );

    }

    catch(error) {

        this.error = error;

    }

    finally {

        this.isLoading = false;

    }

}
```

---

# When NOT to Use Arrow Functions

❌ Object methods (outside of classes)

```javascript
const employee = {

    name: "John",

    greet: () => {

        console.log(this.name);

    }

};
```

---

❌ Constructor functions

```javascript
const Employee = (name) => {

    this.name = name;

};

new Employee("John");
```

---

❌ When dynamic `this` is required

Use a regular function instead.

---

# Best Practices

✅ Use arrow functions for Promise callbacks.

✅ Use arrow functions with array methods.

✅ Use arrow functions with `setTimeout()` and `setInterval()`.

✅ Use arrow functions for debounce and throttle implementations.

✅ Keep event handlers as regular class methods unless a bound callback is required.

---

# Common Mistakes

Using regular functions inside `.then()`.

Using arrow functions as object methods.

Using `new` with arrow functions.

Returning objects without parentheses.

Using arrow functions when dynamic `this` is actually needed.

---

# Complete LWC Example

```javascript
async connectedCallback() {

    try {

        this.isLoading = true;

        const result = await getAccounts();

        this.accounts = result.map(account => ({

            ...account,

            selected: false

        }));

    }

    catch(error) {

        this.error = error;

    }

    finally {

        this.isLoading = false;

    }

}
```

---

# Interview Questions (With Answers)

## 1. Why are arrow functions preferred in LWC Promise callbacks?

**Answer**

Arrow functions preserve the component's `this`, allowing direct access to component properties and methods.

---

## 2. Should LWC event handlers be arrow functions?

**Answer**

Generally, no. Standard LWC practice is to use regular class methods for event handlers. Arrow functions are mainly used for callbacks.

---

## 3. Why does `.then(function(){})` often fail in LWC?

**Answer**

A regular function creates its own `this`, so it loses the component context.

---

## 4. Which array methods commonly use arrow functions?

**Answer**

`map()`, `filter()`, `reduce()`, `find()`, `forEach()`, `some()`, and `every()`.

---

## 5. Why are arrow functions useful with `setTimeout()`?

**Answer**

They preserve the surrounding `this`, so the callback can safely access component properties.

---

## 6. Can arrow functions be used with `@wire`?

**Answer**

The `@wire` method itself is normally written as a regular class method. Arrow functions are typically unnecessary there.

---

## 7. Why should arrow functions not be used as constructor functions?

**Answer**

They do not have a `[[Construct]]` method and cannot be called with `new`.

---

## 8. What is the biggest benefit of arrow functions in LWC?

**Answer**

Automatic preservation of the component's `this`, especially in asynchronous callbacks.

---

# Output-Based Questions (With Answers)

## Question 1

```javascript
getAccounts()

.then(result => {

    this.accounts = result;

});
```

**Answer**

The Apex result is assigned to the component's `accounts` property.

---

## Question 2

```javascript
const names = this.accounts.map(

account => account.Name

);
```

**Answer**

Creates a new array containing only Account names.

---

## Question 3

```javascript
const total = this.orders.reduce(

(sum, order) => sum + order.Amount,

0

);
```

**Answer**

Returns the sum of all `Amount` values.

---

## Question 4

```javascript
setTimeout(() => {

    this.isLoading = false;

}, 1000);
```

**Answer**

Sets `isLoading` to `false` after one second while preserving the component context.

---

## Question 5

```javascript
const account = this.accounts.find(

account => account.Id === this.recordId

);
```

**Answer**

Returns the first Account whose `Id` matches `this.recordId`, or `undefined` if none exists.

---

## Question 6

```javascript
const active = this.accounts.every(

account => account.IsActive__c

);
```

**Answer**

Returns `true` only if every Account is active.

---

# Scenario-Based Questions (With Answers)

## Scenario 1

You need to update every Account by adding a new property named `selected`.

**Answer**

```javascript
this.accounts = this.accounts.map(

account => ({

    ...account,

    selected: false

})

);
```

---

## Scenario 2

You need to search Accounts after the user stops typing for 500 ms.

**Answer**

Use an arrow function with debouncing.

```javascript
this.debounce(() => {

    this.searchAccounts();

}, 500);
```

---

## Scenario 3

After saving a record, display a success toast and hide the spinner.

**Answer**

```javascript
await saveAccount({

    account: this.account

});

this.dispatchEvent(

    new ShowToastEvent({

        title: "Success",

        variant: "success"

    })

);

this.isLoading = false;
```

---

## Scenario 4

Calculate the total Order Amount from a list of Orders.

**Answer**

```javascript
const total = this.orders.reduce(

(sum, order) => sum + order.Amount,

0

);
```

---

## Scenario 5

Find the Account corresponding to the current record.

**Answer**

```javascript
const account = this.accounts.find(

account => account.Id === this.recordId

);
```

---

# Practice Questions

1. Write a Promise callback using an arrow function.
2. Write an imperative Apex call using arrow functions.
3. Convert an array of Contacts into email addresses using `map()`.
4. Filter only active Opportunities.
5. Calculate the total Amount of all Opportunities using `reduce()`.
6. Find a Contact by `Id`.
7. Check whether every Case is closed using `every()`.
8. Check whether at least one Opportunity is overdue using `some()`.
9. Implement a debounced search using arrow functions.
10. Implement throttling using arrow functions.
11. Explain why arrow functions are preferred in Promise callbacks.
12. Explain why event handlers are usually regular class methods in LWC.
13. Compare `map()`, `filter()`, `find()`, and `reduce()` with examples.
14. Explain when **not** to use arrow functions.
15. Build a complete LWC save flow using `async/await`, arrow functions, spinner handling, and toast notifications.
