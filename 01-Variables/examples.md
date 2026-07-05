// ============================
// var
// ============================

var city = "Mumbai";
console.log(city);

city = "Delhi";
console.log(city);

var city = "Pune";
console.log(city);

// ============================
// let
// ============================

let age = 25;
console.log(age);

age = 30;
console.log(age);

// let age = 40; // Error

// ============================
// const
// ============================

const pi = 3.14159;
console.log(pi);

// pi = 3.14; // Error

// ============================
// Declaration vs Initialization
// ============================

let name;
console.log(name);

name = "John";
console.log(name);

// ============================
// Block Scope
// ============================

{
    let language = "JavaScript";
    console.log(language);
}

// console.log(language); // Error

// ============================
// Shadowing
// ============================

let company = "Salesforce";

function showCompany() {
    let company = "OpenAI";
    console.log(company);
}

showCompany();
console.log(company);

// ============================
// Hoisting
// ============================

console.log(a); // undefined
var a = 10;

// console.log(b); // ReferenceError
let b = 20;

// ============================
// const with Objects
// ============================

const employee = {
    name: "John",
    age: 25
};

employee.age = 26;
employee.city = "Mumbai";

console.log(employee);

// employee = {}; // Error
