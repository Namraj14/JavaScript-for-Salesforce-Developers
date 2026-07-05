// charAt()
const text = "Salesforce";
console.log(text.charAt(0));

// at()
console.log(text.at(0));
console.log(text.at(-1));

// concat()
console.log("Hello".concat(" ", "World"));

// includes()
console.log(text.includes("force"));

// startsWith()
console.log(text.startsWith("Sales"));

// endsWith()
console.log(text.endsWith("force"));

// indexOf()
console.log(text.indexOf("f"));

// lastIndexOf()
console.log("banana".lastIndexOf("a"));

// slice()
console.log(text.slice(0, 5));
console.log(text.slice(-5));

// substring()
console.log(text.substring(0, 5));

// replace()
console.log("Hello World".replace("World", "JavaScript"));

// replaceAll()
console.log("apple apple apple".replaceAll("apple", "orange"));

// split()
console.log("A,B,C".split(","));
console.log("Hello".split(""));

// trim()
console.log(" Hello ".trim());

// trimStart()
console.log(" Hello".trimStart());

// trimEnd()
console.log("Hello ".trimEnd());

// toUpperCase()
console.log("salesforce".toUpperCase());

// toLowerCase()
console.log("SALESFORCE".toLowerCase());

// repeat()
console.log("Hi ".repeat(3));

// padStart()
console.log("5".padStart(3, "0"));

// padEnd()
console.log("5".padEnd(3, "0"));

// search()
console.log("Salesforce".search("force"));

// match()
console.log("JavaScript".match("Script"));

// matchAll()
const sentence = "cat bat rat";
console.log([...sentence.matchAll(/at/g)]);

// localeCompare()
console.log("abc".localeCompare("abc"));

// valueOf()
const strObj = new String("Hello");
console.log(strObj.valueOf());

// toString()
console.log(strObj.toString());
