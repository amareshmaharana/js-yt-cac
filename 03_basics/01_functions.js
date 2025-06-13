function sayMyName() {
    console.log("Alan Todd");
}

sayMyName()

function addNumbers(num1, num2) {
    console.log(num1 + num2);
}

addNumbers(45, 45)


function loginUserMessage(username) {
    if(!username) {
        console.log("Please enter username!!");
        return
    }
    return `${username} just logged.`
}

console.log(loginUserMessage("alan"))



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++



function calculateCartPrice(...num1) {
    return num1
}

console.log(calculateCartPrice(530, 643, 7390, 3785))

const user = {
    name: "Alan Todd",
    age: 30,
    isLoggedIn: true,
    lastLoginDays: 30,
}

function getUserDetails(anyobject) {
    console.log(`Name: ${anyobject.name}, Age: ${anyobject.age}, Logged In: ${anyobject.isLoggedIn}, Last Login Days: ${anyobject.lastLoginDays}`);
}

getUserDetails(user)
