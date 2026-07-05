# Spread Operator (Part 2) - Objects

The Spread Operator can also be used with **objects**.

Instead of expanding array elements, it expands an object's properties into another object.

---

# Copying an Object

Without the spread operator:

```javascript
const employee = {
    name: "Rahul",
    department: "Salesforce"
};

const copy = employee;

copy.department = "Developer";

console.log(employee);
console.log(copy);
```

Output

```javascript
{
    name: "Rahul",
    department: "Developer"
}

{
    name: "Rahul",
    department: "Developer"
}
```

Both variables point to the **same object**.

---

# Copying an Object Using Spread

```javascript
const employee = {
    name: "Rahul",
    department: "Salesforce"
};

const copy = {
    ...employee
};

copy.department = "Developer";

console.log(employee);
console.log(copy);
```

Output

```javascript
{
    name: "Rahul",
    department: "Salesforce"
}

{
    name: "Rahul",
    department: "Developer"
}
```

Spread creates a **new object**, so modifying the copy doesn't affect the original.

---

# Spreading an Object

```javascript
const employee = {
    id: 101,
    name: "Rahul"
};

console.log({
    ...employee
});
```

Output

```javascript
{
    id: 101,
    name: "Rahul"
}
```

---

# Merging Objects

Suppose information is stored in multiple objects.

```javascript
const personalInfo = {
    name: "Rahul",
    age: 25
};

const jobInfo = {
    department: "Salesforce",
    experience: 4
};

const employee = {
    ...personalInfo,
    ...jobInfo
};

console.log(employee);
```

Output

```javascript
{
    name: "Rahul",
    age: 25,
    department: "Salesforce",
    experience: 4
}
```

---

# Merging Multiple Objects

```javascript
const a = {
    x: 1
};

const b = {
    y: 2
};

const c = {
    z: 3
};

const result = {
    ...a,
    ...b,
    ...c
};

console.log(result);
```

Output

```javascript
{
    x: 1,
    y: 2,
    z: 3
}
```

---

# Property Precedence

If two objects have the same property, the **last property wins**.

```javascript
const first = {
    name: "Rahul",
    age: 25
};

const second = {
    age: 30,
    city: "Mumbai"
};

const person = {
    ...first,
    ...second
};

console.log(person);
```

Output

```javascript
{
    name: "Rahul",
    age: 30,
    city: "Mumbai"
}
```

The value from `second` replaces the value from `first`.

---

# Reversing the Order

```javascript
const person = {
    ...second,
    ...first
};

console.log(person);
```

Output

```javascript
{
    age: 25,
    city: "Mumbai",
    name: "Rahul"
}
```

Now the value from `first` replaces the value from `second`.

**Remember: The last value always wins.**

---

# Adding New Properties

You can add new properties while copying.

```javascript
const employee = {
    name: "Rahul",
    department: "Salesforce"
};

const updatedEmployee = {
    ...employee,
    experience: 4,
    location: "Mumbai"
};

console.log(updatedEmployee);
```

Output

```javascript
{
    name: "Rahul",
    department: "Salesforce",
    experience: 4,
    location: "Mumbai"
}
```

---

# Updating Existing Properties

You can update properties while copying.

```javascript
const employee = {
    name: "Rahul",
    department: "Salesforce",
    experience: 2
};

const updatedEmployee = {
    ...employee,
    experience: 4
};

console.log(updatedEmployee);
```

Output

```javascript
{
    name: "Rahul",
    department: "Salesforce",
    experience: 4
}
```

---

# Shallow Copy

Spread creates a **shallow copy**, not a deep copy.

```javascript
const employee = {
    name: "Rahul",
    address: {
        city: "Mumbai"
    }
};

const copy = {
    ...employee
};

copy.address.city = "Pune";

console.log(employee);
console.log(copy);
```

Output

```javascript
{
    name: "Rahul",
    address: {
        city: "Pune"
    }
}

{
    name: "Rahul",
    address: {
        city: "Pune"
    }
}
```

Why?

Only the first level is copied.

Nested objects are still shared.

---

# Real-World LWC Example

Suppose you receive an Account record from Apex.

```javascript
const account = {
    Id: "001xx",
    Name: "Salesforce",
    Industry: "Technology"
};

const updatedAccount = {
    ...account,
    Rating: "Hot"
};

console.log(updatedAccount);
```

Output

```javascript
{
    Id: "001xx",
    Name: "Salesforce",
    Industry: "Technology",
    Rating: "Hot"
}
```

This pattern is commonly used in LWC when updating component state without modifying the original object.

---

# Summary

- Spread copies objects.
- `=` copies only the reference.
- Multiple objects can be merged.
- The **last property wins** when duplicate properties exist.
- New properties can be added while copying.
- Existing properties can be updated while copying.
- Spread creates a **shallow copy**.

---

# Practice Questions

### Question 1

```javascript
const employee = {
    name: "John",
    department: "IT"
};

const copy = {
    ...employee
};

console.log(copy);
```

---

### Question 2

```javascript
const a = {
    x: 1
};

const b = {
    y: 2
};

const result = {
    ...a,
    ...b
};

console.log(result);
```

---

### Question 3

```javascript
const first = {
    age: 20
};

const second = {
    age: 25
};

const person = {
    ...first,
    ...second
};

console.log(person);
```

---

### Question 4

```javascript
const employee = {
    name: "Rahul",
    role: "Developer"
};

const updatedEmployee = {
    ...employee,
    experience: 4
};

console.log(updatedEmployee);
```

---

### Question 5

```javascript
const employee = {
    name: "Rahul",
    address: {
        city: "Mumbai"
    }
};

const copy = {
    ...employee
};

copy.address.city = "Delhi";

console.log(employee.address.city);
```
