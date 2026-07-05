# Destructuring (Part 3) - Object Destructuring

Object destructuring allows you to extract properties from an object into variables.

Unlike arrays, object destructuring works based on **property names**, not their order.

---

# Basic Object Destructuring

```javascript
const employee = {
    name: "Rahul",
    department: "Salesforce",
    experience: 4
};

const { name, department, experience } = employee;

console.log(name);
console.log(department);
console.log(experience);
```

Output

```
Rahul
Salesforce
4
```

---

# How Does It Work?

JavaScript matches the **property name** on the left with the property inside the object.

```javascript
const user = {
    firstName: "John",
    age: 25
};

const { firstName, age } = user;

console.log(firstName);
console.log(age);
```

Output

```
John
25
```

Notice that the variable names must match the property names.

---

# Order Doesn't Matter

Unlike arrays, object destructuring does **not** depend on the order.

```javascript
const employee = {
    name: "Rahul",
    department: "Salesforce",
    experience: 4
};

const { experience, name, department } = employee;

console.log(name);
console.log(department);
console.log(experience);
```

Output

```
Rahul
Salesforce
4
```

Even though the order changed, JavaScript correctly finds each property.

---

# Property Doesn't Exist

If the property doesn't exist, JavaScript returns `undefined`.

```javascript
const user = {
    name: "John"
};

const { age } = user;

console.log(age);
```

Output

```
undefined
```

---

# Default Values

You can provide default values for missing properties.

```javascript
const user = {
    name: "John"
};

const {
    name,
    age = 18
} = user;

console.log(name);
console.log(age);
```

Output

```
John
18
```

---

# Existing Values Override Default Values

```javascript
const user = {
    name: "John",
    age: 25
};

const {
    age = 18
} = user;

console.log(age);
```

Output

```
25
```

Since `age` already exists, JavaScript ignores the default value.

---

# Renaming Variables

Sometimes you don't want the variable name to be the same as the property name.

```javascript
const employee = {
    firstName: "Rahul",
    salary: 80000
};

const {
    firstName: name,
    salary: employeeSalary
} = employee;

console.log(name);
console.log(employeeSalary);
```

Output

```
Rahul
80000
```

Here,

- `firstName` is the property.
- `name` is the variable.
- `salary` is the property.
- `employeeSalary` is the variable.

---

# Renaming with Default Values

You can combine renaming and default values.

```javascript
const user = {
    firstName: "John"
};

const {
    firstName: name,
    age: userAge = 18
} = user;

console.log(name);
console.log(userAge);
```

Output

```
John
18
```

---

# Destructuring Boolean Values

```javascript
const settings = {
    darkMode: true,
    notifications: false
};

const { darkMode, notifications } = settings;

console.log(darkMode);
console.log(notifications);
```

Output

```
true
false
```

---

# Destructuring Number Values

```javascript
const marks = {
    maths: 95,
    science: 88
};

const { maths, science } = marks;

console.log(maths);
console.log(science);
```

Output

```
95
88
```

---

# Summary

- Object destructuring works using property names.
- Property order does not matter.
- Missing properties become `undefined`.
- Default values prevent `undefined`.
- Variables can be renamed.
- Default values and renaming can be used together.

---

# Practice Questions

### Question 1

```javascript
const car = {
    brand: "BMW",
    model: "X5"
};

const { brand, model } = car;

console.log(brand);
console.log(model);
```

---

### Question 2

```javascript
const student = {
    firstName: "Amit",
    age: 22
};

const {
    firstName: name,
    age
} = student;

console.log(name);
console.log(age);
```

---

### Question 3

```javascript
const company = {
    name: "Salesforce"
};

const {
    name,
    location = "USA"
} = company;

console.log(name);
console.log(location);
```

---

### Question 4

```javascript
const user = {
    username: "john123"
};

const {
    username: userName,
    role = "Developer"
} = user;

console.log(userName);
console.log(role);
```

---

### Question 5

```javascript
const employee = {
    id: 101,
    salary: 90000
};

const {
    id,
    salary
} = employee;

console.log(id);
console.log(salary);
```
