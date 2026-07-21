# JavaScript Promise Chaining

## What is Promise Chaining?

Promise chaining means using the result of one Promise to start the next
asynchronous operation.

Instead of nesting multiple `.then()` calls, each `.then()` returns a
value or another Promise for the next `.then()` to use.

------------------------------------------------------------------------

## Why Promise Chaining?

Imagine an application flow:

    Login
      ↓
    Get User
      ↓
    Get Orders
      ↓
    Display Dashboard

Each step depends on the previous one.

Promise chaining keeps this sequence readable.

------------------------------------------------------------------------

## ❌ Nested Promises

``` javascript
login()
    .then((user) => {

        getUser(user.id)
            .then((details) => {

                getOrders(details.id)
                    .then((orders) => {

                        console.log(orders);

                    });

            });

    });
```

Problems:

-   Difficult to read
-   Deep nesting
-   Harder to maintain

------------------------------------------------------------------------

## ✅ Promise Chaining

``` javascript
login()
    .then((user) => {
        return getUser(user.id);
    })
    .then((details) => {
        return getOrders(details.id);
    })
    .then((orders) => {
        console.log(orders);
    })
    .catch((error) => {
        console.log(error);
    });
```

Benefits:

-   Flat structure
-   Easier to read
-   Easier error handling

------------------------------------------------------------------------

# Rule #1

Whenever you want the next `.then()` to receive a value, **return it**.

``` javascript
.then(() => {

    return something;

})
```

------------------------------------------------------------------------

## Example 1 - Returning a Value

``` javascript
const promise = new Promise((resolve) => {

    resolve(10);

});

promise
    .then((value) => {

        console.log(value);

        return value * 2;

    })
    .then((result) => {

        console.log(result);

    });
```

Output

    10
    20

Flow

    resolve(10)

    ↓

    .then(value)

    ↓

    return 20

    ↓

    .then(result)

    ↓

    20

------------------------------------------------------------------------

## What Happens if You Don't Return?

``` javascript
Promise.resolve(10)
    .then((value) => {

        value * 2;

    })
    .then((result) => {

        console.log(result);

    });
```

Output

    undefined

Reason:

``` javascript
.then((value) => {

    value * 2;

    return undefined;

});
```

------------------------------------------------------------------------

## Returning Another Promise

``` javascript
function double(number) {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve(number * 2);

        }, 1000);

    });

}
```

Using it

``` javascript
double(5)
    .then((result) => {

        console.log(result);

        return double(result);

    })
    .then((result) => {

        console.log(result);

        return double(result);

    })
    .then((result) => {

        console.log(result);

    });
```

Output

    10
    20
    40

Flow

    5
     ↓
    10
     ↓
    20
     ↓
    40

------------------------------------------------------------------------

## Real-world Example

### Login API

``` javascript
function login(username, password) {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve({
                id: 1,
                name: "Namraj"
            });

        }, 1000);

    });

}
```

### Orders API

``` javascript
function getOrders(userId) {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve([
                "Laptop",
                "Phone"
            ]);

        }, 1000);

    });

}
```

### Chaining

``` javascript
login("namraj", "1234")

    .then((user) => {

        console.log(user);

        return getOrders(user.id);

    })

    .then((orders) => {

        console.log(orders);

    })

    .catch((error) => {

        console.log(error);

    });
```

Output

    {id:1,name:"Namraj"}

    ["Laptop","Phone"]

------------------------------------------------------------------------

## Why `return getOrders()`?

``` javascript
return getOrders(user.id);
```

This returns a Promise.

JavaScript waits for that Promise to finish before executing the next
`.then()`.

Flow

    Login Complete

    ↓

    Start Orders API

    ↓

    Wait

    ↓

    Orders Received

    ↓

    Next .then()

------------------------------------------------------------------------

## Error Handling

``` javascript
login()

    .then(...)

    .then(...)

    .then(...)

    .catch((error) => {

        console.log(error);

    });
```

If any Promise is rejected:

-   Remaining `.then()` blocks are skipped.
-   Control jumps directly to `.catch()`.

------------------------------------------------------------------------

## Promise Chaining vs Async/Await

Promise Chaining

``` javascript
login()
    .then((user) => getOrders(user.id))
    .then((orders) => console.log(orders))
    .catch((err) => console.log(err));
```

Async/Await

``` javascript
async function loadDashboard() {

    try {

        const user = await login("namraj", "1234");

        const orders = await getOrders(user.id);

        console.log(orders);

    } catch (err) {

        console.log(err);

    }

}
```

------------------------------------------------------------------------

# Best Practices

-   Always return a value or Promise from `.then()` when the next step
    depends on it.
-   Keep one `.catch()` at the end for centralized error handling.
-   Avoid nesting `.then()` inside another `.then()`.
-   Prefer `async/await` for complex sequential workflows, but
    understand Promise chaining first.

------------------------------------------------------------------------

# Practice Questions

## Question 1

``` javascript
Promise.resolve(2)
```

Chain two `.then()` calls so the final output is:

    12

------------------------------------------------------------------------

## Question 2

Create

``` javascript
function square(num)
```

Return a Promise that resolves to `num * num`.

Chain it three times starting from `2`.

------------------------------------------------------------------------

## Question 3

Create these Promise functions:

-   login()
-   getProfile(userId)
-   getNotifications(userId)

Chain them so the output is:

    Login Successful

    ↓

    Profile Loaded

    ↓

    Notifications Loaded
