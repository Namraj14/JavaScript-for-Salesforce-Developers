// forEach()
const numbers = [10, 20, 30];

numbers.forEach(num => console.log(num));

// map()
const doubled = numbers.map(num => num * 2);
console.log(doubled);

// filter()
const greaterThan15 = numbers.filter(num => num > 15);
console.log(greaterThan15);

// find()
const firstGreaterThan15 = numbers.find(num => num > 15);
console.log(firstGreaterThan15);

// findIndex()
const index = numbers.findIndex(num => num > 15);
console.log(index);

// some()
console.log(numbers.some(num => num > 25));

// every()
console.log(numbers.every(num => num > 5));

// reduce()
const total = numbers.reduce((sum, num) => sum + num, 0);
console.log(total);

// reduceRight()
console.log(["A", "B", "C"].reduceRight((a, b) => a + b));

// flat()
const nested = [1, [2, 3], [4, [5]]];
console.log(nested.flat());
console.log(nested.flat(2));

// flatMap()
const result = [1, 2, 3].flatMap(num => [num, num * 2]);
console.log(result);

// Array.from()
console.log(Array.from("Hello"));

// Array.of()
console.log(Array.of(10, 20, 30));

// keys()
const colors = ["Red", "Green", "Blue"];

for (const key of colors.keys()) {
    console.log(key);
}

// values()
for (const value of colors.values()) {
    console.log(value);
}

// entries()
for (const [index, value] of colors.entries()) {
    console.log(index, value);
}
