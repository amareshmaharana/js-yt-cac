const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise One Resolved");
        resolve();
    }, 1000);
})

promiseOne.then(() => {
    console.log('Promise consumed');
}).catch((error) => {
    console.error("Error:", error);
});


// second promise
const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promise Two Resolved");
        resolve();
    }, 1000);
}).then(() => {
    console.log('Promise Two consumed');
})


// third promise
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        // console.log("Promise Three Resolved");
        resolve({username: "Alice", email: "alice@example.com"});
    }, 1000);
});

promiseThree.then((user) => {
    console.log(user);
}).catch((error) => {
    console.error("Error:", error);
});


// fourth promise
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({username: "Bob", email: "bob@example.com"});
        } else {
            reject("An error occurred in Promise Four");
        }
    }, 1000);
})

promiseFour.then((user) => {
    console.log(user);
    return user.username;
}).then((username) => {
    console.log("Username:", username);
}).catch((error) => {
    console.error("Error:", error);
}).finally(() => {
    console.log("Promise Four completed");
});


// fifth promise
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({username: "Charlie", email: "charlie@example.com"});
        } else {
            reject("An error occurred in Promise Five");
        }
    }, 1000);
});


const consumePromiseFive = async () => {
    const response = await promiseFive
    console.log(response);
}

consumePromiseFive()


const getAllUsers = async () => {
    const response = await fetch('https://api.github.com/users/amareshmaharana')
        .then(response => response.json())
        .then(users => {
            console.log(users);
        })
        .catch(error => {
            console.error("Error fetching users:", error);
        });
}

getAllUsers();