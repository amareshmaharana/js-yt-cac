// Example of an object with properties and a method
const user = {
    username: 'john_doe',
    loginCount: 8,
    signedIn: function() {
        // console.log(`${this.username} has logged in ${this.loginCount} times.`);
    },

    getUserDetails: function() {
        // return `Got user details for ${this.username}`;
    }
}

// console.log(user.username); // john_doe
// console.log(user.getUserDetails()); // Got user details for john_doe


function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this
}

const userOne = new User('john_doe', 8, true);
const userTwo = new User('jane_doe', 5, false);

console.table(userOne);
console.table(userTwo);
