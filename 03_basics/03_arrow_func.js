const user = {
    username: 'john_doe',
    age: 30,
    greet: function () {
        console.log(`Hello, ${this.username}!`);
    },
}

// user.greet();


function hello() {
    console.log(this);
}

// hello()


const helloNew = () => {
    console.log("Hello, world!");
}

// helloNew();

// in curly braces, you need to use return
// and also we called it explicit return
// const addNum = (num1, num2) => num1 + num2

// also we can write as
// and also we called it implicit return
const addNum = (num1, num2) => (num1 + num2)


// if we want to give object, we can write
const createUser = (username, age) => ({
    username: username,
    age: age
});


// console.log(addNum(5, 10));
console.log(createUser('john_doe', 30));