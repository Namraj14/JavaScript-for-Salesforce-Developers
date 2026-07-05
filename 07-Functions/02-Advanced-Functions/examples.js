// Arrow Function
const greet = () => {
    console.log("Hello");
};

greet();

// Arrow Function with Parameters
const add = (a, b) => a + b;
console.log(add(10, 20));

// Returning Object
const getUser = () => ({
    name: "John",
    age: 30
});

console.log(getUser());

// Callback Function
function welcome(name) {
    console.log(`Welcome ${name}`);
}

function process(callback) {
    callback("Alice");
}

process(welcome);

// Higher-Order Function
function calculate(a, b, operation) {
    return operation(a, b);
}

const multiply = (x, y) => x * y;

console.log(calculate(5, 6, multiply));

// Function Returning Function
function greetUser(message) {
    return function (name) {
        return `${message} ${name}`;
    };
}

const hello = greetUser("Hello");
console.log(hello("John"));

// IIFE
(function () {
    console.log("Application Started");
})();

// Arrow IIFE
(() => {
    console.log("Arrow IIFE");
})();

// Recursive Function
function countdown(number) {
    if (number === 0) {
        return;
    }

    console.log(number);
    countdown(number - 1);
}

countdown(5);

// Factorial
function factorial(number) {
    if (number === 1) {
        return 1;
    }

    return number * factorial(number - 1);
}

console.log(factorial(5));

// Pure Function
function sum(a, b) {
    return a + b;
}

console.log(sum(10, 15));

// Impure Function
let total = 0;

function addValue(value) {
    total += value;
}

addValue(10);
console.log(total);

// Generator Function
function* colors() {
    yield "Red";
    yield "Green";
    yield "Blue";
}

const generator = colors();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
