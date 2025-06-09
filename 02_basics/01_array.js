// Array

const arr1 = [1, 2, 3, 4, 5, 6]
const heros = ["Iron Man", "Superman"]

const arr2 = new Array(2, 6, 4, 8, 3)



/** Array Methods */

/* push - add a value */
arr1.push(7)

/* pop - remove a value from last */
arr1.pop()

/* unshift - add value at first */
arr1.unshift(5)

/* shift is same as pop */
arr1.shift()

/* join */
const newArr = arr1.join() // it binds all and give as string

console.log(arr1);
console.log(newArr);



/* Slice */
console.log("A - ", arr1);

const newArr1 = arr1.slice(1, 3)
console.log("After using slice() : ", newArr1); // output = After using slice() :  [ 2, 3 ]

console.log("B - ", arr1);

const newArr2 = arr1.splice(1, 3)
console.log("C - ", arr1); // output = C -  [ 1, 5, 6 ]
console.log("After using splice() : ", newArr2); // output = After using splice() :  [ 2, 3, 4 ]
