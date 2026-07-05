// Object Literal
const employee = {
    name: "John",
    age: 30,
    city: "Mumbai"
};

console.log(employee);

// Dot Notation
console.log(employee.name);

// Bracket Notation
console.log(employee["city"]);

// Add Property
employee.department = "IT";
console.log(employee);

// Update Property
employee.city = "Delhi";
console.log(employee);

// Delete Property
delete employee.department;
console.log(employee);

// Property Check
console.log("name" in employee);
console.log(employee.hasOwnProperty("age"));

// Nested Object
const company = {
    name: "ABC Corp",
    address: {
        city: "Mumbai",
        state: "Maharashtra"
    }
};

console.log(company.address.city);

// Array Inside Object
const student = {
    name: "Alice",
    subjects: ["Math", "Science", "English"]
};

console.log(student.subjects[0]);

// Objects Inside Array
const users = [
    { name: "John" },
    { name: "David" }
];

console.log(users[1].name);

// Object Method
const person = {
    name: "John",
    greet() {
        console.log("Hello");
    }
};

person.greet();

// Reference Copy
const obj1 = { value: 10 };
const obj2 = obj1;

obj2.value = 20;

console.log(obj1.value);

// Spread Copy
const obj3 = { value: 10 };
const obj4 = { ...obj3 };

obj4.value = 30;

console.log(obj3.value);
console.log(obj4.value);

// Destructuring
const account = {
    accountName: "Salesforce",
    industry: "Technology"
};

const { accountName, industry } = account;

console.log(accountName);
console.log(industry);

// Renaming
const { accountName: name } = account;
console.log(name);

// Default Value
const { phone = "Not Available" } = account;
console.log(phone);
