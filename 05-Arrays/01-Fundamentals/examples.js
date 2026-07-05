// Creating Arrays
const fruits = ["Apple", "Banana", "Orange"];
console.log(fruits);

// Empty Array
const records = [];
console.log(records);

// Accessing Elements
console.log(fruits[0]);
console.log(fruits[2]);

// Updating Elements
fruits[1] = "Mango";
console.log(fruits);

// Length
console.log(fruits.length);

// Last Element
console.log(fruits[fruits.length - 1]);

// Different Data Types
const values = [
    "John",
    25,
    true,
    null,
    undefined,
    [1, 2, 3],
    { city: "Mumbai" }
];
console.log(values);

// Nested Array
const matrix = [
    [1, 2],
    [3, 4],
    [5, 6]
];

console.log(matrix[1][0]);

// typeof
console.log(typeof fruits);

// Array.isArray()
console.log(Array.isArray(fruits));

// Reference Copy
const arr1 = [1, 2, 3];
const arr2 = arr1;

arr2[0] = 100;

console.log(arr1);
console.log(arr2);

// Spread Copy
const arr3 = [1, 2, 3];
const arr4 = [...arr3];

arr4[0] = 500;

console.log(arr3);
console.log(arr4);

// Destructuring
const colors = ["Red", "Green", "Blue"];

const [first, second, third] = colors;

console.log(first);
console.log(second);
console.log(third);

// Rest Operator
const [primary, ...others] = colors;

console.log(primary);
console.log(others);

// const Array
const cities = ["Mumbai"];

cities.push("Delhi");

console.log(cities);

// Sparse Array
const sparse = [];

sparse[5] = "Hello";

console.log(sparse);
console.log(sparse.length);

// Array Equality
const a = [1, 2];
const b = [1, 2];
const c = a;

console.log(a === b);
console.log(a === c);
