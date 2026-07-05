// this in Object Method
const employee = {
    name: "John",
    greet() {
        console.log(this.name);
    }
};

employee.greet();

// Arrow Function this
const user = {
    name: "Alice",
    showName: () => {
        console.log(this.name);
    }
};

user.showName();

// call()
function display(city) {
    console.log(this.name, city);
}

const person = {
    name: "David"
};

display.call(person, "Mumbai");

// apply()
display.apply(person, ["Delhi"]);

// bind()
const boundFunction = display.bind(person, "Pune");
boundFunction();

// Lexical Scope
const company = "Salesforce";

function outer() {
    function inner() {
        console.log(company);
    }

    inner();
}

outer();

// Closure
function createCounter() {
    let count = 0;

    return function () {
        count++;
        return count;
    };
}

const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());

// Function Borrowing
const customer = {
    name: "Robert"
};

employee.greet.call(customer);

// Nested Function with Arrow
const account = {
    name: "ABC Corp",

    show() {
        const display = () => {
            console.log(this.name);
        };

        display();
    }
};

account.show();

// bind() with setTimeout
const timer = {
    message: "Completed",

    showMessage() {
        console.log(this.message);
    }
};

setTimeout(timer.showMessage.bind(timer), 1000);
