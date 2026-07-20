# JavaScript Masterclass - Lesson 9

# Browser APIs

## Learning Objectives

-   Understand what Browser APIs are
-   Learn why Browser APIs are not part of JavaScript
-   Understand how JavaScript interacts with Browser APIs
-   Learn about setTimeout, setInterval, DOM APIs and Fetch API
-   Prepare for the Event Loop

------------------------------------------------------------------------

# 1. What are Browser APIs?

Browser APIs are features provided by the browser.

Examples:

-   setTimeout()
-   setInterval()
-   fetch()
-   DOM
-   localStorage
-   geolocation

These APIs are **not part of the JavaScript language**.

------------------------------------------------------------------------

# 2. JavaScript vs Browser

JavaScript Engine:

-   Executes JavaScript
-   Manages the Call Stack

Browser:

-   Timers
-   Network requests
-   DOM
-   Storage

``` text
JavaScript Code
      │
      ▼
JavaScript Engine
      │
      ▼
Browser APIs
```

------------------------------------------------------------------------

# 3. Why Does JavaScript Need Browser APIs?

JavaScript is synchronous.

Waiting for a timer or network request would freeze the application.

Instead, JavaScript delegates these tasks to the browser.

------------------------------------------------------------------------

# 4. setTimeout()

``` javascript
console.log("Start");

setTimeout(() => {
    console.log("Timer Finished");
}, 2000);

console.log("End");
```

Output

``` text
Start
End
Timer Finished
```

The timer runs inside the browser, not on the Call Stack.

------------------------------------------------------------------------

# 5. setInterval()

``` javascript
let count = 0;

const id = setInterval(() => {
    count++;
    console.log(count);

    if (count === 3) {
        clearInterval(id);
    }
}, 1000);
```

Output

``` text
1
2
3
```

The callback repeats until cleared.

------------------------------------------------------------------------

# 6. DOM APIs

``` javascript
const btn = document.querySelector("#save");

btn.addEventListener("click", () => {
    console.log("Button Clicked");
});
```

The browser listens for user interaction.

JavaScript executes the callback only after the click occurs.

------------------------------------------------------------------------

# 7. Fetch API

``` javascript
fetch("/users")
    .then(response => response.json())
    .then(data => console.log(data));
```

The browser performs the network request.

JavaScript continues executing other code.

------------------------------------------------------------------------

# 8. Internal Flow

``` text
JavaScript
     │
Calls Browser API
     │
Browser Handles Work
     │
Task Completes
     │
Callback Ready
```

The callback does not execute immediately.

The Event Loop controls when it runs.

------------------------------------------------------------------------

# Real World Analogy

Imagine a restaurant.

You place an order.

Instead of waiting inside the kitchen, you sit at your table.

When the food is ready, the waiter calls you.

The kitchen is like the Browser API.

The waiter is like the Event Loop.

------------------------------------------------------------------------

# Interview Questions

### Are Browser APIs part of JavaScript?

No.

They are provided by the browser environment.

### Does setTimeout pause JavaScript?

No.

The browser manages the timer.

### Who performs fetch requests?

The browser.

### Can Node.js use Browser APIs?

Not DOM APIs.

Node provides its own runtime APIs.

------------------------------------------------------------------------

# Practice Questions

1.  What are Browser APIs?
2.  Why aren't they part of JavaScript?
3.  Explain how setTimeout works.
4.  Explain how Fetch works.
5.  Why doesn't JavaScript freeze while waiting?

------------------------------------------------------------------------

# Coding Exercise

Predict the output.

``` javascript
console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 1000);

console.log("Middle");

console.log("End");
```

Answer:

-   Why does "Timeout" print last?
-   Who manages the timer?

------------------------------------------------------------------------

# Quick Quiz

1.  setTimeout belongs to:

A. JavaScript Engine

B. Browser

C. Call Stack

D. Compiler

------------------------------------------------------------------------

2.  fetch is handled by:

A. JavaScript Engine

B. Browser

C. Memory Phase

D. Parser

------------------------------------------------------------------------

3.  Browser APIs make JavaScript:

A. Multi-threaded

B. Non-blocking for supported operations

C. Faster compilation

D. Object-oriented

------------------------------------------------------------------------

# Revision Notes

-   Browser APIs are provided by the browser.
-   JavaScript delegates timers and network requests.
-   setTimeout does not block JavaScript.
-   DOM events are handled by the browser.
-   Browser APIs prepare callbacks for the Event Loop.

------------------------------------------------------------------------

# Next Lesson

## Event Loop

Topics:

-   Callback Queue
-   Event Loop
-   How callbacks return to JavaScript
-   Why setTimeout(0) is not immediate
-   Execution order
