# JavaScript Masterclass - Lesson 20

# JavaScript Error Handling

## Learning Objectives

-   Understand JavaScript errors
-   Learn try...catch
-   Use throw
-   Create custom errors
-   Learn best practices

------------------------------------------------------------------------

## 1. What is an Error?

An error is an unexpected problem that interrupts normal execution.

Examples:

-   Syntax Error
-   Reference Error
-   Type Error
-   Range Error

------------------------------------------------------------------------

## 2. try...catch

``` javascript
try {
  const result = 10 / 0;
  console.log(result);
} catch (err) {
  console.error(err);
}
```

`try` contains risky code.

`catch` handles errors without crashing the application.

------------------------------------------------------------------------

## 3. throw

You can create your own errors.

``` javascript
function checkAge(age) {
  if (age < 18) {
    throw new Error("Age must be at least 18.");
  }

  return "Access Granted";
}
```

------------------------------------------------------------------------

## 4. try...catch...finally

``` javascript
try {
  console.log("Connecting...");
  throw new Error("Connection failed");
} catch(err) {
  console.log(err.message);
} finally {
  console.log("Cleanup complete");
}
```

`finally` always executes.

------------------------------------------------------------------------

## 5. Custom Errors

``` javascript
class ValidationError extends Error {
  constructor(message){
    super(message);
    this.name = "ValidationError";
  }
}

throw new ValidationError("Invalid Email");
```

------------------------------------------------------------------------

## Real-World Example

``` javascript
async function getUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/999");

    if(!response.ok){
      throw new Error("User not found");
    }

    const data = await response.json();
    console.log(data);

  } catch(err){
    console.error(err.message);
  }
}
```

------------------------------------------------------------------------

## Interview Questions

-   Difference between throw and catch?
-   Why use finally?
-   Can we throw custom errors?
-   Why shouldn't errors be ignored?

------------------------------------------------------------------------

## Practice

1.  Explain try...catch.
2.  Explain throw.
3.  Why use finally?
4.  Create a custom error.

------------------------------------------------------------------------

## Coding Exercise

Create a function that accepts age.

If age is below 18:

Throw an error.

Otherwise return "Eligible".

Handle the error using try...catch.

------------------------------------------------------------------------

## Revision Notes

-   try executes risky code.
-   catch handles errors.
-   throw creates errors.
-   finally always runs.
-   Custom errors improve readability.

------------------------------------------------------------------------

## Next Lesson

JavaScript Modules (import/export)
