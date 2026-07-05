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

// Private State
function createBankAccount() {
    let balance = 1000;

    return {
        deposit(amount) {
            balance += amount;
            return balance;
        },

        withdraw(amount) {
            balance -= amount;
            return balance;
        },

        getBalance() {
            return balance;
        }
    };
}

const account = createBankAccount();

console.log(account.deposit(500));
console.log(account.withdraw(200));
console.log(account.getBalance());

// Currying
function add(a) {
    return function (b) {
        return a + b;
    };
}

console.log(add(10)(20));

// Arrow Currying
const multiply = a => b => a * b;

console.log(multiply(5)(6));

// Function Composition
const addTwo = x => x + 2;
const square = x => x * x;

const compose = (f, g) => x => f(g(x));

const composed = compose(square, addTwo);

console.log(composed(3));

// Memoization
function memoizedSquare() {
    const cache = {};

    return function (number) {
        if (cache[number] !== undefined) {
            return cache[number];
        }

        console.log("Calculating...");

        cache[number] = number * number;

        return cache[number];
    };
}

const squareMemo = memoizedSquare();

console.log(squareMemo(5));
console.log(squareMemo(5));

// Debounce
function debounce(callback, delay) {
    let timer;

    return function (...args) {
        clearTimeout(timer);

        timer = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}

// Throttle
function throttle(callback, delay) {
    let waiting = false;

    return function (...args) {
        if (waiting) {
            return;
        }

        callback(...args);

        waiting = true;

        setTimeout(() => {
            waiting = false;
        }, delay);
    };
}

// Debounce Example
const search = debounce(() => {
    console.log("Searching...");
}, 500);

// Throttle Example
const scrollHandler = throttle(() => {
    console.log("Scroll Event");
}, 1000);
