// String Comparison
console.log("Apple" === "Apple");
console.log("Apple" === "apple");
console.log("Apple" < "Banana");
console.log("Zebra" > "Apple");

// Type Conversion
console.log(String(100));
console.log((100).toString());
console.log(String(true));
console.log([1, 2, 3].toString());

// Type Coercion
console.log("10" + 5);
console.log("10" - 5);
console.log("10" * 5);
console.log("10" / 2);
console.log("10" % 3);

// Number Conversion
console.log(Number("100"));
console.log(parseInt("100px"));
console.log(parseFloat("25.75kg"));
console.log(Number("Hello"));

// Regular Expressions
console.log(/^\d+$/.test("12345"));
console.log(/@/.test("john@gmail.com"));

let text = "cat bat rat";
console.log(text.replace(/at/g, "oo"));

let sentence = "Age 25 Salary 5000";
console.log(sentence.match(/\d+/g));

// Copy by Value
let first = "Salesforce";
let second = first;

second = "JavaScript";

console.log(first);
console.log(second);

// Reverse String
let word = "Sales";
let reversed = word.split("").reverse().join("");
console.log(reversed);

// Palindrome
let palindrome = "madam";
console.log(palindrome === palindrome.split("").reverse().join(""));

// Remove Spaces
console.log(" Hello World ".trim());

// Title Case
let title = "hello world";

let result = title
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

console.log(result);

// Template Literal
let count = 25;
console.log(`Found ${count} Accounts`);

// Dynamic URL
let recordId = "001XXXXXXXXXXXX";
let url = `/lightning/r/Account/${recordId}/view`;
console.log(url);
