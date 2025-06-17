// if - statement

// taking exxample using temperature
let temperature = 30;

// if (temperature < 50) {
//     console.log("It's a hot day");
// } else {
//     console.log("It's not a hot day");
// }


const balance = 100000;

// don't write like this type
// if (balance > 1000) console.log("your balance is more than 1000"), console.log("you can buy a car");


// using else if
// we can write else if more than one time
// if we have more than one condition to check

// if (balance < 1000) {
//     console.log("your balance is more than 1000");
// } else if (balance < 500) {
//     console.log("your balance is more than 500");
// } else {
//     console.log("your balance is less than 500");
// }



const userLoggedIn = true;
const debitCard = true;

if (userLoggedIn && debitCard) {
    console.log("Allow to buy anything!!!");
}