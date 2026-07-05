// this keyword
const employee = {
    name: "John",
    greet() {
        console.log(this.name);
    }
};

employee.greet();

// Arrow Function (Avoid as Object Method)
const user = {
    name: "Alice",
    showName: () => {
        console.log(this.name);
    }
};

user.showName();

// Shallow Copy
const person = {
    name: "John",
    address: {
        city: "Mumbai"
    }
};

const shallowCopy = {
    ...person
};

shallowCopy.address.city = "Delhi";

console.log(person.address.city);

// Deep Copy
const deepCopy = JSON.parse(JSON.stringify(person));

deepCopy.address.city = "Pune";

console.log(person.address.city);
console.log(deepCopy.address.city);

// JSON.stringify()
const json = JSON.stringify(employee);
console.log(json);

// JSON.parse()
const parsed = JSON.parse(json);
console.log(parsed);

// Spread Operator
const account = {
    id: 1,
    name: "ABC Corp"
};

const updatedAccount = {
    ...account,
    industry: "Technology"
};

console.log(updatedAccount);

// Rest Operator
const { name, ...remaining } = updatedAccount;
console.log(name);
console.log(remaining);

// Computed Property
const key = "email";

const contact = {
    [key]: "john@example.com"
};

console.log(contact);

// Optional Chaining
const company = {};
console.log(company.address?.city);

// Nullish Coalescing
const phone = company.phone ?? "Not Available";
console.log(phone);

// for...in
for (const property in account) {
    console.log(property, account[property]);
}

// Object.entries()
for (const [property, value] of Object.entries(account)) {
    console.log(property, value);
}

// Dynamic Property Access
const propertyName = "name";
console.log(account[propertyName]);

// Delete Dynamic Property
delete account[propertyName];
console.log(account);
