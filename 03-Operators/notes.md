# Operators in JavaScript

## What is an Operator?

An operator is a symbol that performs an operation on one or more operands (values or variables).

Example:

```javascript
let sum = 10 + 20;
```

Here:

- `+` is the operator.
- `10` and `20` are operands.

---

# Why Do We Need Operators?

Operators allow us to:

- Perform calculations.
- Compare values.
- Assign values.
- Make decisions.
- Combine conditions.
- Manipulate data.
- Write business logic.

Every JavaScript program heavily relies on operators.

---

# Types of Operators

JavaScript provides the following categories:

1. Arithmetic Operators
2. Assignment Operators
3. Comparison Operators
4. Logical Operators
5. Unary Operators
6. Increment and Decrement Operators
7. Ternary Operator
8. Nullish Coalescing Operator
9. Optional Chaining Operator
10. Type Operators
11. Bitwise Operators (rare in LWC)

---

# 1. Arithmetic Operators

Used to perform mathematical operations.

| Operator | Meaning | Example | Result |
|----------|---------|---------|--------|
| + | Addition | 10 + 5 | 15 |
| - | Subtraction | 10 - 5 | 5 |
| * | Multiplication | 10 * 5 | 50 |
| / | Division | 10 / 5 | 2 |
| % | Modulus | 10 % 3 | 1 |
| ** | Exponent | 2 ** 3 | 8 |

Example:

```javascript
let a = 20;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** 2);
```

---

# 2. Assignment Operators

Assign values to variables.

| Operator | Example |
|----------|---------|
| = | x = 5 |
| += | x += 5 |
| -= | x -= 5 |
| *= | x *= 5 |
| /= | x /= 5 |
| %= | x %= 5 |
| **= | x **= 2 |

Example:

```javascript
let total = 100;

total += 20;

console.log(total);
```

Output:

```
120
```

---

# 3. Comparison Operators

Return a boolean (`true` or `false`).

| Operator | Meaning |
|----------|----------|
| == | Loose equality |
| === | Strict equality |
| != | Loose inequality |
| !== | Strict inequality |
| > | Greater than |
| < | Less than |
| >= | Greater than or equal |
| <= | Less than or equal |

Example:

```javascript
console.log(10 > 5);
console.log(5 === "5");
console.log(5 == "5");
```

Output:

```
true
false
true
```

Always prefer `===`.

---

# 4. Logical Operators

Used to combine multiple conditions.

## AND (&&)

Returns `true` only if all conditions are true.

```javascript
let age = 25;
let citizen = true;

console.log(age >= 18 && citizen);
```

Output:

```
true
```

---

## OR (||)

Returns `true` if at least one condition is true.

```javascript
console.log(false || true);
```

Output:

```
true
```

---

## NOT (!)

Reverses the boolean value.

```javascript
console.log(!true);
```

Output:

```
false
```

---

# Short-Circuit Evaluation

JavaScript stops evaluating as soon as the result is known.

```javascript
false && console.log("Hello");
```

Nothing is printed because the first value is already `false`.

```javascript
true || console.log("Hello");
```

Nothing is printed because the first value is already `true`.

---

# 5. Unary Operators

Operate on a single operand.

Examples:

```javascript
typeof "Hello"

delete object.name

+value

-value
```

---

# 6. Increment and Decrement

## Increment (++)

```javascript
let count = 1;

count++;
```

Output:

```
2
```

---

## Decrement (--)

```javascript
count--;
```

---

## Prefix

```javascript
let x = 5;

console.log(++x);
```

Output:

```
6
```

---

## Postfix

```javascript
let x = 5;

console.log(x++);
```

Output:

```
5
```

Then `x` becomes `6`.

---

# 7. Ternary Operator

A shorthand for `if...else`.

Syntax:

```javascript
condition ? value1 : value2
```

Example:

```javascript
let age = 20;

let message = age >= 18 ? "Adult" : "Minor";

console.log(message);
```

---

# 8. Nullish Coalescing (??)

Returns the right-hand value only if the left-hand value is `null` or `undefined`.

```javascript
let name = null;

console.log(name ?? "Guest");
```

Output:

```
Guest
```

Difference from `||`:

```javascript
console.log("" || "Guest");
```

Output:

```
Guest
```

```javascript
console.log("" ?? "Guest");
```

Output:

```
""
```

---

# 9. Optional Chaining (?.)

Safely access nested properties.

```javascript
const account = {};

console.log(account.address?.city);
```

Output:

```
undefined
```

No error is thrown.

---

# 10. typeof Operator

Returns the type of a value.

```javascript
typeof 10
```

Output:

```
number
```

---

# 11. delete Operator

Removes a property from an object.

```javascript
const person = {
    name: "John",
    age: 25
};

delete person.age;

console.log(person);
```

---

# Operator Precedence

JavaScript follows precedence rules.

```javascript
10 + 5 * 2
```

Output:

```
20
```

Multiplication happens before addition.

Use parentheses to improve readability.

```javascript
(10 + 5) * 2
```

Output:

```
30
```

---

# Best Practices

- Prefer `===` over `==`.
- Use `??` instead of `||` when dealing with `null` or `undefined`.
- Use optional chaining to avoid runtime errors.
- Avoid complex nested ternary operators.
- Use parentheses when expressions become difficult to read.

---

# Common Mistakes

❌ Using `=` instead of `===` in conditions.

```javascript
if (age = 18)
```

This assigns the value instead of comparing it.

---

❌ Using `==`.

```javascript
5 == "5"
```

Can lead to unexpected results.

---

❌ Forgetting the difference between prefix and postfix increment.

---

❌ Assuming `||` only checks for `null`.

It also treats `0`, `false`, and `""` as falsy.

---

# Operators in Lightning Web Components

Example:

```javascript
this.isLoading = true;

this.total += 1;

this.records = data ?? [];

if (this.records.length > 0 && !this.isLoading) {
    // Render data
}

const city = this.account?.BillingAddress?.city;
```

Operators are commonly used for:

- Showing or hiding spinners.
- Validating form inputs.
- Checking Apex responses.
- Pagination.
- Conditional rendering.
- Calculating totals.

---

# Interview Questions (With Answers)

## 1. What is an operator?

**Answer:**

An operator is a symbol that performs an operation on one or more operands. Examples include arithmetic (`+`), comparison (`===`), logical (`&&`), and assignment (`=`) operators.

---

## 2. What is the difference between `==` and `===`?

**Answer:**

`==` compares values after performing type conversion (type coercion).

```javascript
5 == "5" // true
```

`===` compares both value and data type without converting types.

```javascript
5 === "5" // false
```

`===` is recommended because it avoids unexpected behavior.

---

## 3. What is short-circuit evaluation?

**Answer:**

Short-circuit evaluation means JavaScript stops evaluating an expression once the final result is already known.

Example:

```javascript
false && console.log("Hello");
```

The second expression is never executed because the result is already `false`.

---

## 4. What is the difference between `||` and `??`?

**Answer:**

`||` returns the right-hand value if the left-hand value is any falsy value (`0`, `false`, `""`, `null`, `undefined`, `NaN`).

`??` only returns the right-hand value if the left-hand value is `null` or `undefined`.

---

## 5. Why is optional chaining useful?

**Answer:**

Optional chaining (`?.`) prevents runtime errors when accessing nested properties that may not exist. Instead of throwing an error, it returns `undefined`.

---

# Output-Based Questions (With Answers)

### Question 1

```javascript
console.log(5 + "5");
```

**Answer:**

```
55
```

Explanation: The number `5` is converted to a string, and string concatenation occurs.

---

### Question 2

```javascript
console.log(5 - "2");
```

**Answer:**

```
3
```

Explanation: `"2"` is converted to a number.

---

### Question 3

```javascript
console.log(true + true);
```

**Answer:**

```
2
```

Explanation: `true` is converted to `1`.

---

### Question 4

```javascript
console.log(10 > 5 && 20 > 30);
```

**Answer:**

```
false
```

---

### Question 5

```javascript
let x = 5;

console.log(x++);
console.log(x);
```

**Answer:**

```
5
6
```

The postfix increment returns the current value first, then increments it.

---

# Scenario-Based Questions (With Answers)

### Scenario 1

You receive data from an Apex method, but it may return `null`. How do you ensure your component always has an array?

**Answer:**

```javascript
this.records = data ?? [];
```

If `data` is `null` or `undefined`, an empty array is assigned.

---

### Scenario 2

You need to access the city from a nested account object, but `BillingAddress` may not exist.

**Answer:**

```javascript
const city = this.account?.BillingAddress?.city;
```

This safely returns `undefined` if any intermediate property is missing.

---

### Scenario 3

A Save button should only be enabled if the form is valid and the component is not loading.

**Answer:**

```javascript
const canSave = this.isValid && !this.isLoading;
```

The button can use `disabled={!canSave}` in the template logic.

---

# Practice Questions

1. Find the output:

```javascript
console.log(10 % 4);
```

2. Write a program using the ternary operator to determine if a number is even or odd.

3. Compare `null == undefined` and `null === undefined`.

4. Use optional chaining to safely access `employee.department.manager.name`.

5. Write a program that uses `??` to assign `"No Name"` when a variable is `null` or `undefined`.
