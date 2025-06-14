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

// console.log(a, b, c); // printing global scope variables



function one() {
    const username = 'John';

    function two() {
        const website = 'twitch';
        console.log(username); // can access username from one
    }

    console.log(website); // cannot access website from two
    two(); // calling two function
}

// one(); // calling one function



if (true) {
    const handlename = 'John';

    if (handlename === "John") {
        const website = 'twitch';
        console.log(handlename + website); // can access both handlename and website
    }
    // console.log(website); // cannot access website outside the inner if block
}

// console.log(handlename)



// ++++++++++++++++++++++++++++++++++++++++++++++++++++

// here in this case we can call before initialization
function addOne(num) {
    return num + 1
}

addOne(6)


console.log(addTwo(6)) // here gives a error because addTwo is not defined yet mean it is called before initialization
const addTwo = function(num) {
    return num + 2
}
