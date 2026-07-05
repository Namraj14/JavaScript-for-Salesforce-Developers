# 📁 06 - Objects (Part 1 - Fundamentals)

# What is an Object?

An object is a non-primitive data type used to store related data as **key-value pairs**.

Unlike arrays, which use numeric indexes, objects use **keys (property names)** to access values.

Example

```javascript
const employee = {
    name: "John",
    age: 28,
    city: "Mumbai"
};
```

Here,

- `name`, `age`, and `city` are **keys (properties)**.
- `"John"`, `28`, and `"Mumbai"` are **values**.

---

# Why Do We Need Objects?

Objects help us group related information together.

Without an object:

```javascript
let firstName = "John";
let age = 28;
let city = "Mumbai";
```

Using an object:

```javascript
const employee = {
    firstName: "John",
    age: 28,
    city: "Mumbai"
};
```

Objects are widely used to represent:

- Salesforce records
- API responses
- User information
- Configuration settings
- JSON data

---

# Characteristics of Objects

- Store data as key-value pairs.
- Keys are unique.
- Values can be of any data type.
- Stored by reference.
- Objects are mutable.

---

# Creating Objects

## 1. Object Literal (Recommended)

```javascript
const account = {
    name: "ABC Corp",
    industry: "Technology"
};
```

---

## 2. Object Constructor

```javascript
const account = new Object();

account.name = "ABC Corp";
account.industry = "Technology";
```

Not recommended.

---

# Object Structure

```javascript
const employee = {
    name: "John",
    age: 30,
    isActive: true
};
```

```
{
   key : value
}
```

---

# Accessing Object Properties

## Dot Notation

```javascript
console.log(employee.name);
```

Output

```
John
```

---

## Bracket Notation

```javascript
console.log(employee["name"]);
```

Output

```
John
```

---

# Dot Notation vs Bracket Notation

### Dot Notation

```javascript
employee.name
```

Used when the property name is known.

---

### Bracket Notation

```javascript
employee["name"]
```

Used when:

- Property name is stored in a variable.
- Property contains spaces.
- Property contains special characters.

Example

```javascript
const key = "name";

console.log(employee[key]);
```

Output

```
John
```

---

# Adding New Properties

```javascript
const employee = {
    name: "John"
};

employee.city = "Mumbai";

console.log(employee);
```

Output

```javascript
{
    name: "John",
    city: "Mumbai"
}
```

---

# Updating Properties

```javascript
employee.city = "Delhi";
```

---

# Deleting Properties

```javascript
delete employee.city;
```

---

# Checking Property Existence

Using `in`

```javascript
console.log("name" in employee);
```

Output

```
true
```

---

Using `hasOwnProperty()`

```javascript
console.log(employee.hasOwnProperty("name"));
```

Output

```
true
```

---

# Objects Can Store Different Data Types

```javascript
const user = {
    name: "John",
    age: 30,
    isAdmin: false,
    skills: ["JavaScript", "LWC"],
    address: {
        city: "Mumbai"
    },
    greet: function () {
        console.log("Hello");
    }
};
```

---

# Nested Objects

```javascript
const employee = {
    name: "John",
    address: {
        city: "Mumbai",
        state: "Maharashtra"
    }
};
```

Access

```javascript
console.log(employee.address.city);
```

Output

```
Mumbai
```

---

# Objects Inside Arrays

```javascript
const employees = [
    {
        name: "John"
    },
    {
        name: "David"
    }
];
```

Access

```javascript
console.log(employees[1].name);
```

Output

```
David
```

---

# Arrays Inside Objects

```javascript
const student = {
    name: "John",
    subjects: ["Math", "Science", "English"]
};
```

Access

```javascript
console.log(student.subjects[0]);
```

Output

```
Math
```

---

# Object Methods

Objects can contain functions.

```javascript
const employee = {
    name: "John",

    greet() {
        console.log("Hello");
    }
};

employee.greet();
```

Output

```
Hello
```

---

# typeof Object

```javascript
const employee = {};

console.log(typeof employee);
```

Output

```
object
```

---

# Object References

Objects are copied by reference.

```javascript
const person1 = {
    name: "John"
};

const person2 = person1;

person2.name = "David";

console.log(person1.name);
```

Output

```
David
```

Both variables refer to the same object.

---

# Copying Objects

Wrong

```javascript
const copy = original;
```

Correct

```javascript
const copy = {
    ...original
};
```

Example

```javascript
const person1 = {
    name: "John"
};

const person2 = {
    ...person1
};

person2.name = "David";

console.log(person1.name);
```

Output

```
John
```

---

# Object Destructuring

Extract properties into variables.

```javascript
const employee = {
    name: "John",
    age: 30
};

const { name, age } = employee;

console.log(name);
```

Output

```
John
```

---

# Renaming Variables

```javascript
const {
    name: employeeName
} = employee;

console.log(employeeName);
```

---

# Default Values

```javascript
const employee = {
    name: "John"
};

const {
    city = "Mumbai"
} = employee;

console.log(city);
```

Output

```
Mumbai
```

---

# Shallow Copy (Introduction)

Using the spread operator creates a **shallow copy**.

```javascript
const user = {
    name: "John",
    address: {
        city: "Mumbai"
    }
};

const copy = {
    ...user
};
```

The top-level object is copied, but nested objects still share the same reference.

Deep copy will be covered in Part 3.

---

# Best Practices

✅ Use object literals instead of `new Object()`.

✅ Use meaningful property names.

✅ Use `const` for object references.

✅ Use dot notation when possible.

✅ Use bracket notation for dynamic property names.

---

# Common Mistakes

Using `=` instead of `:` while creating objects.

Wrong

```javascript
const user = {
    name = "John"
};
```

Correct

```javascript
const user = {
    name: "John"
};
```

---

Comparing objects.

```javascript
{} === {}
```

Returns

```
false
```

---

Copying by assignment.

```javascript
const copy = original;
```

Both variables point to the same object.

---

Assuming `const` objects cannot be modified.

```javascript
const user = {
    name: "John"
};

user.name = "David";
```

This is valid.

---

# Objects in Lightning Web Components

Apex returns records as objects.

```javascript
account = {};
```

Store a selected Account

```javascript
this.account = result;
```

Access a field

```javascript
console.log(this.account.Name);
```

Store Contact details

```javascript
contact = {};
```

Store form data

```javascript
formData = {};
```

---

# Interview Questions (With Answers)

## 1. What is an object in JavaScript?

**Answer**

An object is a collection of key-value pairs used to store related data. Objects are non-primitive data types and are stored by reference.

---

## 2. Difference between an object and an array?

**Answer**

| Object | Array |
|---------|-------|
| Stores data as key-value pairs | Stores data as indexed elements |
| Keys are strings or symbols | Indexes are numeric |
| Used for structured data | Used for collections/lists |

---

## 3. Difference between dot notation and bracket notation?

**Answer**

Dot notation is used when the property name is known.

```javascript
employee.name
```

Bracket notation is used when the property name is dynamic or contains spaces.

```javascript
employee["name"]
```

---

## 4. Why does `{} === {}` return false?

**Answer**

Objects are compared by memory reference, not by their contents. Two separate object literals have different references.

---

## 5. Can a JavaScript object contain functions?

**Answer**

Yes. Functions stored inside objects are called methods.

Example

```javascript
const person = {
    greet() {
        console.log("Hello");
    }
};
```

---

## 6. What is object destructuring?

**Answer**

Object destructuring extracts properties from an object into variables.

```javascript
const { name, age } = employee;
```

---

## 7. What is a shallow copy?

**Answer**

A shallow copy duplicates only the first level of an object. Nested objects still share the same reference.

---

## 8. Can you modify a `const` object?

**Answer**

Yes. You can modify its properties, but you cannot reassign the object reference.

```javascript
const user = {
    name: "John"
};

user.name = "David"; // Valid

user = {}; // Error
```

---

# Output-Based Questions (With Answers)

## Question 1

```javascript
const user = {
    name: "John"
};

console.log(user.name);
```

**Answer**

```
John
```

---

## Question 2

```javascript
const user = {
    name: "John"
};

user.city = "Mumbai";

console.log(user.city);
```

**Answer**

```
Mumbai
```

---

## Question 3

```javascript
const person1 = {
    name: "John"
};

const person2 = person1;

person2.name = "David";

console.log(person1.name);
```

**Answer**

```
David
```

---

## Question 4

```javascript
const user = {
    name: "John"
};

const { name } = user;

console.log(name);
```

**Answer**

```
John
```

---

## Question 5

```javascript
console.log(typeof {});
```

**Answer**

```
object
```

---

## Question 6

```javascript
const user = {
    age: 25
};

console.log("age" in user);
```

**Answer**

```
true
```

---

## Question 7

```javascript
console.log({} === {});
```

**Answer**

```
false
```

---

## Question 8

```javascript
const student = {
    subjects: ["Math", "Science"]
};

console.log(student.subjects[1]);
```

**Answer**

```
Science
```

---

# Scenario-Based Questions (With Answers)

## Scenario 1

An Apex method returns a single Account record. Where should you store it?

**Answer**

```javascript
account = {};

getAccount({ accountId: this.recordId })
    .then(result => {
        this.account = result;
    });
```

---

## Scenario 2

You need to access the `Phone` field of an Account object.

**Answer**

```javascript
console.log(this.account.Phone);
```

---

## Scenario 3

You want to update only the `Industry` field of an Account.

**Answer**

```javascript
this.account.Industry = "Technology";
```

---

## Scenario 4

You need to create a copy of an object before editing it.

**Answer**

```javascript
const accountCopy = {
    ...this.account
};
```

---

## Scenario 5

You need to determine whether an object contains the property `"Email"`.

**Answer**

```javascript
if ("Email" in contact) {
    console.log("Email exists");
}
```

---

# Practice Questions

1. Create an object representing an Employee.
2. Access properties using both dot notation and bracket notation.
3. Add a new property to an object.
4. Update an existing property.
5. Delete a property.
6. Create a nested object and access an inner property.
7. Create an object containing an array.
8. Create an array containing objects.
9. Destructure an object into variables.
10. Rename a destructured property.
11. Use a default value during destructuring.
12. Create a shallow copy using the spread operator.
13. Compare two objects with identical values using `===`.
14. Write an object containing a method named `display()`.
15. Check whether an object contains a specific property using both `in` and `hasOwnProperty()`.
