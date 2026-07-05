// push()
let fruits = ["Apple", "Banana"];
fruits.push("Orange");
console.log(fruits);

// pop()
let removed = fruits.pop();
console.log(removed);
console.log(fruits);

// shift()
fruits.shift();
console.log(fruits);

// unshift()
fruits.unshift("Apple");
console.log(fruits);

// concat()
const arr1 = [1, 2];
const arr2 = [3, 4];
console.log(arr1.concat(arr2));

// slice()
const numbers = [10, 20, 30, 40];
console.log(numbers.slice(1, 3));
console.log(numbers.slice(-2));

// splice()
let values = [10, 20, 30, 40];
values.splice(1, 2);
console.log(values);

values = [10, 40];
values.splice(1, 0, 20, 30);
console.log(values);

values = [10, 20, 30];
values.splice(1, 1, 100);
console.log(values);

// includes()
console.log(fruits.includes("Apple"));

// indexOf()
console.log(numbers.indexOf(20));

// lastIndexOf()
console.log([10, 20, 30, 20].lastIndexOf(20));

// join()
console.log(fruits.join(", "));

// reverse()
let reverseArr = [1, 2, 3];
reverseArr.reverse();
console.log(reverseArr);

// sort()
let names = ["John", "Alice", "Bob"];
names.sort();
console.log(names);

let nums = [100, 2, 30];
nums.sort((a, b) => a - b);
console.log(nums);

// fill()
let fillArray = [1, 2, 3];
fillArray.fill(0);
console.log(fillArray);

// copyWithin()
let copyArray = [1, 2, 3, 4];
copyArray.copyWithin(0, 2);
console.log(copyArray);
