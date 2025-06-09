/** Dates */

let date = new Date()

console.log("Different date formats are : ");
console.log(date);
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toISOString());
console.log(date.toJSON());
console.log(date.toLocaleDateString());
console.log(date.toLocaleString());
console.log(date.toTimeString());
console.log(date.toUTCString());


/* times are comes in miliseconds */


/* here 1 means february, jan starts from 0. */
let aDate = new Date(2025, 1, 24)
console.log(aDate.toString());


/* here 01 means january */
let aDate1 = new Date("2025-01-19")
console.log(aDate1.toLocaleString());


/* timestamp */
let aTimestamp = Date.now()
console.log(aTimestamp);
console.log(Math.floor(Date.now() / 1000));




let newDate = new Date()

newDate.toLocaleString('default', {
    year: "numeric"
})
