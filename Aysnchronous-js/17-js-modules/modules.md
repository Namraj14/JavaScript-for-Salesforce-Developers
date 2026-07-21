# JavaScript Masterclass - Lesson 21

# JavaScript Modules (import / export)

## Learning Objectives

-   Understand why modules exist
-   Learn named and default exports
-   Import modules
-   Organize project structure
-   Avoid global scope pollution

------------------------------------------------------------------------

## Why Modules?

As applications grow, keeping all code in one file becomes difficult.

Modules let you split code into multiple files.

Example:

    project/
    │
    ├── index.html
    ├── main.js
    ├── math.js
    └── user.js

------------------------------------------------------------------------

## Named Export

``` javascript
// math.js
export function add(a,b){
  return a+b;
}

export const PI = 3.14159;
```

Import:

``` javascript
import { add, PI } from "./math.js";

console.log(add(2,3));
console.log(PI);
```

------------------------------------------------------------------------

## Default Export

``` javascript
// user.js
export default function greet(name){
  return `Hello ${name}`;
}
```

Import:

``` javascript
import greet from "./user.js";

console.log(greet("Namraj"));
```

------------------------------------------------------------------------

## Named vs Default

  Named               Default
  ------------------- ----------------------------
  Multiple per file   One per file
  Imported with {}    Imported without {}
  Name must match     Can rename while importing

------------------------------------------------------------------------

## Combining Imports

``` javascript
import greet from "./user.js";
import { add, PI } from "./math.js";
```

------------------------------------------------------------------------

## Real-World Example

    src/
    ├── api.js
    ├── auth.js
    ├── utils.js
    ├── constants.js
    └── app.js

Each file has a single responsibility, making maintenance easier.

------------------------------------------------------------------------

## Interview Questions

-   Why use modules?
-   Difference between named and default export?
-   Can a file have both named and default exports?
-   Why must file extensions usually be included in browser imports?

------------------------------------------------------------------------

## Practice

Create:

-   math.js
-   user.js
-   app.js

Export functions from the first two files and import them into app.js.

------------------------------------------------------------------------

## Revision

-   Modules split code into reusable files.
-   export shares code.
-   import consumes code.
-   Named exports use {}.
-   Default exports do not.

------------------------------------------------------------------------

## Next Lesson

ES6 Features (Destructuring, Spread, Rest, Template Literals)
