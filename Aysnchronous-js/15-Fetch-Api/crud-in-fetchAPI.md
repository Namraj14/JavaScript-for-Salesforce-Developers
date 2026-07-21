# JavaScript Masterclass - Lesson 19

# CRUD Operations with Fetch API

## Learning Objectives

-   Understand CRUD
-   Perform GET, POST, PUT, PATCH and DELETE requests
-   Send JSON data
-   Handle responses and errors
-   Build a real-world frontend example

------------------------------------------------------------------------

## 1. What is CRUD?

CRUD stands for:

-   **Create** → POST
-   **Read** → GET
-   **Update** → PUT / PATCH
-   **Delete** → DELETE

These are the most common operations performed on REST APIs.

------------------------------------------------------------------------

## 2. GET (Read)

``` javascript
const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
const post = await response.json();

console.log(post);
```

Used to retrieve data from a server.

------------------------------------------------------------------------

## 3. POST (Create)

``` javascript
const response = await fetch(
  "https://jsonplaceholder.typicode.com/posts",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      title: "JavaScript",
      body: "Masterclass",
      userId: 1
    })
  }
);

const data = await response.json();
console.log(data);
```

`JSON.stringify()` converts a JavaScript object into JSON.

------------------------------------------------------------------------

## 4. PUT (Replace)

``` javascript
await fetch("https://jsonplaceholder.typicode.com/posts/1",{
  method:"PUT",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify({
    id:1,
    title:"Updated",
    body:"New Content",
    userId:1
  })
});
```

PUT replaces the entire resource.

------------------------------------------------------------------------

## 5. PATCH (Partial Update)

``` javascript
await fetch("https://jsonplaceholder.typicode.com/posts/1",{
  method:"PATCH",
  headers:{
    "Content-Type":"application/json"
  },
  body:JSON.stringify({
    title:"Updated Title"
  })
});
```

PATCH updates only specified fields.

------------------------------------------------------------------------

## 6. DELETE

``` javascript
await fetch("https://jsonplaceholder.typicode.com/posts/1",{
  method:"DELETE"
});
```

Deletes a resource.

------------------------------------------------------------------------

## 7. PUT vs PATCH

  PUT                        PATCH
  -------------------------- ---------------------------
  Replaces entire resource   Updates selected fields
  Sends full object          Sends changed fields only

------------------------------------------------------------------------

## Real-World Example

Imagine an employee portal:

-   GET → View employee
-   POST → Add employee
-   PUT → Replace employee record
-   PATCH → Update employee phone number
-   DELETE → Remove employee

------------------------------------------------------------------------

## Interview Questions

-   Difference between PUT and PATCH?
-   Why use JSON.stringify()?
-   Which HTTP method creates data?
-   Which method removes data?

------------------------------------------------------------------------

## Practice

1.  Explain CRUD.
2.  Compare PUT and PATCH.
3.  Why is Content-Type important?
4.  Why do we stringify request bodies?

------------------------------------------------------------------------

## Coding Exercise

Create an async function that sends a POST request to:

https://jsonplaceholder.typicode.com/posts

Send:

-   title
-   body
-   userId

Then print the returned object.

------------------------------------------------------------------------

## Revision Notes

-   GET reads.
-   POST creates.
-   PUT replaces.
-   PATCH partially updates.
-   DELETE removes.
-   Request bodies are usually JSON.

------------------------------------------------------------------------

## Next Lesson

JavaScript Error Handling (try...catch, throw, custom errors)
