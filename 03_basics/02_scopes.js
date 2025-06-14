// {} - curly braces means scope


// scope of global
let a = 10
const b = 20
var c = 30


// scope of local or block
if(true) {
    let a = 40
    const b = 50
    var c = 60
    console.log('Block scope:', a, b, c); // printing block scope variables
}

console.log(a, b, c); // printing global scope variables
