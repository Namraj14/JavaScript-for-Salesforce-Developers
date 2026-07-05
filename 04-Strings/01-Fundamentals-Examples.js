// Creating Strings
let firstName = "John";
let lastName = 'Doe';
let company = `Salesforce`;

console.log(firstName);
console.log(lastName);
console.log(company);

// Primitive vs Object
let str1 = "JavaScript";
let str2 = new String("JavaScript");

console.log(typeof str1);
console.log(typeof str2);

// Length
let text = "Lightning";
console.log(text.length);

// Character Access
console.log(text[0]);
console.log(text.charAt(0));
console.log(text.at(-1));

// Immutability
let name = "John";
name[0] = "D";
console.log(name);

name = name.toUpperCase();
console.log(name);

// Escape Characters
console.log("He said \"Hello\"");
console.log('It\'s JavaScript');
console.log("Hello\nWorld");
console.log("A\tB");
console.log("C:\\Users\\John");

// Template Literals
let user = "Alice";
let age = 25;

console.log(`My name is ${user}`);
console.log(`Next year I will be ${age + 1}`);

// Multi-line String
let message = `Hello
Welcome to
JavaScript`;

console.log(message);

// Concatenation
let first = "Hello";
let second = "World";

console.log(first + " " + second);
console.log(first.concat(" ", second));
console.log(`${first} ${second}`);

// Case Sensitivity
console.log("ABC" === "abc");

// Unicode
console.log("❤️");

// Copy by Value
let a = "Hello";
let b = a;

b = "World";

console.log(a);
console.log(b);
