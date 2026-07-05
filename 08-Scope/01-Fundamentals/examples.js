// Global Scope
let company = "Salesforce";

function displayCompany() {
    console.log(company);
}

displayCompany();

// Function Scope
function demo() {
    let age = 25;
    console.log(age);
}

demo();

// Block Scope
if (true) {
    let language = "JavaScript";
    console.log(language);
}

// var is NOT Block Scoped
if (true) {
    var framework = "LWC";
}

console.log(framework);

// Lexical Scope
function outer() {
    let message = "Hello";

    function inner() {
        console.log(message);
    }

    inner();
}

outer();

// Scope Chain
let globalVar = "Global";

function levelOne() {
    let first = "Level 1";

    function levelTwo() {
        let second = "Level 2";

        console.log(globalVar);
        console.log(first);
        console.log(second);
    }

    levelTwo();
}

levelOne();

// Variable Shadowing
let name = "Global";

function shadowDemo() {
    let name = "Local";
    console.log(name);
}

shadowDemo();
console.log(name);

// Loop Scope
for (let i = 0; i < 3; i++) {
    console.log(i);
}

// const Scope
{
    const PI = 3.14159;
    console.log(PI);
}

// Nested Scope
function one() {
    let a = 10;

    function two() {
        let b = 20;

        function three() {
            let c = 30;

            console.log(a, b, c);
        }

        three();
    }

    two();
}

one();
