// Objects - part 1


/* object literals */

// for Symbol data type testing
const mySymbol = Symbol("key1")

const jsUser = {
    name: "Alan",

    // for example this two lines are include
    "full name": "Alan Todd",

    [mySymbol]: "this is value of key",
    age: 18,
    location: "London",
    email: "alantodd@google.com",
    isLoggedIn: false
}

console.log(jsUser.email);

// here it is a another way to print something of a object
console.log(jsUser["email"]);

// here we access the included line on above object
console.log(jsUser["full name"]);

// for Symbol data type
// in object if we give array like - [], here print the type of mySymbol in above object. Otherwise it's type is string.
console.log("To define Symbol data type : ", jsUser[mySymbol]);



// if we want to not allow to everyone to change this code we have to write freeze method
// before that first we change our some key value then we are going to freeze that mean all

// after changed some things
jsUser.email = "alantodd@gmail.com"
jsUser.location = "New York"

console.table(jsUser);

// after freeze
// for freeze testing
// Object.freeze(jsUser)
// console.table(jsUser)

// but here after freeze let's see what happened
jsUser.email = "alantodd@microsoft.com"
console.table(jsUser)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++

jsUser.greeting = function() {
    console.log("Hello, JS user.");
}

// here we refer a value from it's own object
jsUser.greetingTwo = function() {
    console.log(`Hello, JS user ${this.name}`);
}

// if we print it there give [Function (anonymous)] - mean function defined but not executed
console.log(jsUser.greeting);

// it print successfully the Hello, JS user.
console.log(jsUser.greeting());

console.log(jsUser.greetingTwo());


