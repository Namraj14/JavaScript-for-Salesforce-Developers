// Object.keys()
const employee = {
    name: "John",
    age: 30,
    city: "Mumbai"
};

console.log(Object.keys(employee));

// Object.values()
console.log(Object.values(employee));

// Object.entries()
console.log(Object.entries(employee));

for (const [key, value] of Object.entries(employee)) {
    console.log(`${key}: ${value}`);
}

// Object.assign()
const personal = { name: "John" };
const professional = { role: "Developer" };

const merged = Object.assign({}, personal, professional);
console.log(merged);

// Object.freeze()
const config = { theme: "Dark" };

Object.freeze(config);
config.theme = "Light";
console.log(config);

// Object.seal()
const user = { name: "Alice" };

Object.seal(user);
user.name = "Bob";
user.city = "Mumbai";

console.log(user);

// Object.hasOwn()
console.log(Object.hasOwn(employee, "name"));

// hasOwnProperty()
console.log(employee.hasOwnProperty("age"));

// Object.fromEntries()
const entries = [
    ["id", 101],
    ["status", "Active"]
];

console.log(Object.fromEntries(entries));

// Object.create()
const person = {
    greet() {
        console.log("Hello");
    }
};

const developer = Object.create(person);
developer.name = "John";
developer.greet();

// Object.is()
console.log(Object.is(NaN, NaN));
console.log(Object.is(10, 10));

// Object.getOwnPropertyNames()
console.log(Object.getOwnPropertyNames(employee));

// Object.getPrototypeOf()
console.log(Object.getPrototypeOf(employee));

// Object.setPrototypeOf()
const animal = {
    speak() {
        console.log("Animal Sound");
    }
};

const dog = {};
Object.setPrototypeOf(dog, animal);
dog.speak();
