let footballScore = "8ab"

// console.log(typeof footballScore);

let scoreStringToNumber = Number(footballScore)
// after converting of string to number
// console.log(scoreStringToNumber);
// console.log(typeof scoreStringToNumber);


let randomNo = 94

// converting number to string
let randomNoToString = String(randomNo)
// console.log("After number to string conversion: ", randomNoToString);
// console.log(typeof randomNoToString);


/* ************** Operations **************** */

// don't write like this code mean this additions with string
console.table([
    "1" + 2,
    1 + "2",
    "1" + 2 + 2,
    1 + 2 + "2"
])