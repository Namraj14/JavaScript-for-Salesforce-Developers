// Function Declaration
function greet() {
    console.log("Hello");
}

greet();

// Function Expression
const welcome = function () {
    console.log("Welcome");
};

welcome();

// Parameters and Arguments
function add(a, b) {
    return a + b;
}

console.log(add(10, 20));

// Default Parameters
function introduce(name = "Guest") {
    console.log(`Hello ${name}`);
}

introduce();
introduce("John");

// Rest Parameters
function sum(...numbers) {
    console.log(numbers);
}

sum(10, 20, 30, 40);

// Local Variable
function demo() {
    let message = "Local";
    console.log(message);
}

demo();

// Global Variable
let company = "Salesforce";

function showCompany() {
    console.log(company);
}

showCompany();

// Variable Shadowing
let name = "Global";

function display() {
    let name = "Local";
    console.log(name);
}

display();
console.log(name);

// Function Hoisting
hoistedFunction();

function hoistedFunction() {
    console.log("I am hoisted");
}

// Nested Function
function outer() {
    function inner() {
        console.log("Inner Function");
    }

    inner();
}

outer();

// Returning Object
function getUser() {
    return {
        name: "John",
        age: 25
    };
}

console.log(getUser());

// Returning Array
function getMarks() {
    return [80, 90, 95];
}

console.log(getMarks());
