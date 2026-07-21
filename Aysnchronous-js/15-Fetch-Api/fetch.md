# JavaScript Masterclass - Lesson 18

# Fetch API with async/await

## Learning Objectives

-   Understand the Fetch API
-   Make GET requests
-   Parse JSON responses
-   Handle HTTP and network errors
-   Build a real-world frontend example

------------------------------------------------------------------------

## 1. What is the Fetch API?

The Fetch API is a built-in browser API used to make HTTP requests.

It returns a **Promise**, making it work naturally with `async/await`.

``` javascript
fetch("https://api.example.com/users");
```

------------------------------------------------------------------------

## 2. Basic GET Request

``` javascript
async function getUsers() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  console.log(data);
}

getUsers();
```

### Flow

1.  Browser sends the request.
2.  `fetch()` returns a Promise.
3.  `await` pauses the function.
4.  Response arrives.
5.  `response.json()` returns another Promise.
6.  `await` converts the JSON into a JavaScript object.

------------------------------------------------------------------------

## 3. Why `response.json()` Needs `await`

`response.json()` parses the response body asynchronously.

``` javascript
const response = await fetch(url);
const data = await response.json();
```

Both `fetch()` and `response.json()` return Promises.

------------------------------------------------------------------------

## 4. Error Handling

``` javascript
async function loadUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("HTTP Error");
    }

    const users = await response.json();
    console.log(users);

  } catch (err) {
    console.error(err.message);
  }
}
```

------------------------------------------------------------------------

## 5. Real Frontend Example

``` html
<input id="userId" placeholder="Enter user id">
<button onclick="loadUser()">Load User</button>

<script>
async function loadUser() {
  const id = document.getElementById("userId").value;

  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    const user = await response.json();

    console.log(user.name);

  } catch(err) {
    console.log(err);
  }
}
</script>
```

This is similar to how frontend applications retrieve data from backend
APIs.

------------------------------------------------------------------------

## Real-World Analogy

Ordering food online:

-   Place order → `fetch()`
-   Wait for delivery → `await`
-   Open package → `response.json()`
-   Eat food → use the data

------------------------------------------------------------------------

## Interview Questions

-   Does `fetch()` return a Promise?
-   Why do we await `response.json()`?
-   What does `response.ok` mean?
-   How do you handle HTTP errors?

------------------------------------------------------------------------

## Practice Questions

1.  Explain the Fetch API.
2.  Why does `fetch()` work with `async/await`?
3.  Why does `response.json()` require `await`?
4.  Explain error handling with Fetch.

------------------------------------------------------------------------

## Coding Exercise

Write a function that fetches all users from:

`https://jsonplaceholder.typicode.com/users`

Then print only the user names.

------------------------------------------------------------------------

## Quick Quiz

1.  `fetch()` returns:

A. Array

B. Promise

C. Object

D. String

2.  Which method converts JSON into a JavaScript object?

A. parse()

B. text()

C. json()

D. stringify()

3.  Which property checks HTTP success?

A. response.valid

B. response.ok

C. response.success

D. response.code

------------------------------------------------------------------------

## Revision Notes

-   Fetch is a browser API.
-   Fetch returns a Promise.
-   `response.json()` also returns a Promise.
-   Use `try...catch` with `async/await`.
-   Check `response.ok` for HTTP errors.

------------------------------------------------------------------------

## Next Lesson

CRUD Operations with Fetch (GET, POST, PUT, PATCH, DELETE)
