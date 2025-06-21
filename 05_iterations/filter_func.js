const coding = ["JavaScript", "Python", "Java", "C++", "Ruby"];

const values = coding.forEach( (item) => {
    // console.log(item);
})

// console.log("Values:", values); // undefined, as forEach does not return anything


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// using filter to get values - instead of forEach

// filter
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = nums.filter( (num) => num > 4 )
// console.log("New Nums:", newNums); // [5, 6, 7, 8, 9, 10]


const newNums1 = []

nums.forEach( (num) => {
    if (num > 4) {
        newNums.push(num);
    }   
})

// console.log("New Nums:", newNums1);