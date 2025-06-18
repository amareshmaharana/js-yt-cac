// ++++++++++++ TRUTHY AND FALSY VALUE ++++++++++++

const userEmail = []

if (userEmail) {
    // console.log("Got user email!!");
} else {
    // console.log("Don't have user email!!");
}



// falsy values
/*
    false, 0, -0, BignInt 0n, ""(empty string), null, undefined, NaN
*/


// truthy values
/*
    "0", 'false', " ", [], {}, function(){}
*/


if(userEmail.length === 0) {
    // console.log("Array is empty!!");
}


const emptyObj = {}

if(Object.keys(emptyObj).length === 0) {
    // console.log("Object is empty!!");
}



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Nullish coalescing operator (??)

let val1;
// val1 = 6 ?? 67
// val1 = null ?? 10
// val1 = undefined ?? 10
val1 = null ?? 37 ?? 28

// console.log(val1);




// +++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Ternary Operator

// condition ? true : false

// for know about this operator please visit online then learn