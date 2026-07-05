// Closure
function createCounter() {
    let count = 0;

    return function () {
        return ++count;
    };
}

const counter = createCounter();

console.log(counter());
console.log(counter());

// TDZ
try {
    console.log(user);
    let user = "John";
} catch (error) {
    console.log(error.message);
}

// var Hoisting
console.log(city);

var city = "Mumbai";

// Function Hoisting
greet();

function greet() {
    console.log("Hello");
}

// Global Object (Browser Only)
// var company = "Salesforce";
// console.log(window.company);

// Execution Context
function display() {
    let message = "Execution Context";
    console.log(message);
}

display();

// Garbage Collection Example
function createObject() {
    const temp = {
        id: 1,
        name: "Temporary"
    };

    console.log(temp);
}

createObject();

// Strict Mode
(function () {
    "use strict";

    const language = "JavaScript";
    console.log(language);
})();

// Module Scope (Concept)
// export const PI = 3.14;
// import { PI } from "./math.js";

// eval() (Not Recommended)
let x = 100;

eval("console.log(x)");
