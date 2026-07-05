// =============================
// String
// =============================
const company = "Salesforce";
console.log(company.toUpperCase());
console.log(company.length);

// =============================
// Number
// =============================
const price = 99.99;
console.log(price.toFixed(2));

// =============================
// Boolean
// =============================
const isActive = true;
console.log(isActive);

// =============================
// Undefined
// =============================
let city;
console.log(city);

// =============================
// Null
// =============================
let selectedRecord = null;
console.log(selectedRecord);

// =============================
// BigInt
// =============================
const big = 9007199254740995n;
console.log(big);

// =============================
// Symbol
// =============================
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1 === id2); // false

// =============================
// Object
// =============================
const employee = {
    name: "John",
    age: 30
};

console.log(employee);

// =============================
// Array
// =============================
const fruits = ["Apple", "Banana", "Orange"];
console.log(Array.isArray(fruits));

// =============================
// typeof
// =============================
console.log(typeof "Hello");
console.log(typeof 10);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof []);
console.log(typeof {});
console.log(typeof function () {});

// =============================
// Primitive Copy
// =============================
let a = 10;
let b = a;
b = 20;

console.log(a);
console.log(b);

// =============================
// Reference Copy
// =============================
const person1 = { name: "John" };
const person2 = person1;

person2.name = "David";

console.log(person1.name);

// =============================
// Equality
// =============================
console.log(5 == "5");   // true
console.log(5 === "5");  // false

// =============================
// Type Conversion
// =============================
console.log(Number("100"));
console.log(String(100));
console.log(Boolean(1));

// =============================
// Type Coercion
// =============================
console.log("5" + 2); // "52"
console.log("5" * 2); // 10
console.log(true + 1); // 2
console.log(false + 5); // 5
