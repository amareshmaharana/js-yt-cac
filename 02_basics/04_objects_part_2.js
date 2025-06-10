// Objects part 2


// singleton object
const aUser = new Object()

// non-singleton object
const aUser1 = {}

// basic
aUser1.id = "1ee3ftg5"
aUser1.name = "Sam"
aUser1.isLoggedIn = false

// console.log(aUser1);

// using nesting objects mean inside object with object
const appUser = {
    email: "someuser@gmail.com",
    userNameDetails: {
        name: {
            firstname: "Alina",
            lastname: "Matt"
        }
    }
}

// console.log(appUser.userNameDetails.name.firstname);


const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3: 'c', 4: 'd'}

// const obj3 = Object.assign({}, obj1, obj2)

// using spread operator
const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "user1@gmail.com"
    },
    {
        id: 2,
        email: "user2@gmail.com"
    },
    {
        id: 3,
        email: "user3@gmail.com"
    },
]

console.log(aUser1)

console.log(Object.keys(aUser1));
console.log(Object.values(aUser1));

// it's not use widely
console.log(Object.entries(aUser1));


// to check property of object use hasOwnProperty()
console.log(aUser1.hasOwnProperty('id'))