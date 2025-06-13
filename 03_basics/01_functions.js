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