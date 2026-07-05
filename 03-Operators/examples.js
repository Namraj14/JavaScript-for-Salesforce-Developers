// Arithmetic Operators
console.log(10 + 5);
console.log(10 - 5);
console.log(10 * 5);
console.log(10 / 5);
console.log(10 % 3);
console.log(2 ** 4);

// Assignment Operators
let total = 100;
total += 50;
console.log(total);

// Comparison Operators
console.log(10 > 5);
console.log(10 === "10");
console.log(10 == "10");

// Logical Operators
console.log(true && false);
console.log(true || false);
console.log(!true);

// Prefix and Postfix
let a = 5;
console.log(++a);

let b = 5;
console.log(b++);
console.log(b);

// Ternary
let age = 20;
console.log(age >= 18 ? "Adult" : "Minor");

// Nullish Coalescing
let username = null;
console.log(username ?? "Guest");

// Optional Chaining
const user = {};
console.log(user.address?.city);

// typeof
console.log(typeof 100);

// delete
const person = {
    name: "John",
    age: 30
};

delete person.age;
console.log(person);
