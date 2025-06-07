const score = 420
console.log(score);

const bankBalance = new Number(16358.63)
console.log(bankBalance);

console.log(bankBalance.toString().length);
console.log(bankBalance.toFixed(5));

// ==========>>>>>>>>>>>   to precision method
const randomNum = 11227.56896

console.log("Precision value : ", randomNum.toPrecision(5));



// ===========>>>>>>>>>>   toLocaleString method
const hundreds = 1000000

// here print default mean US standard
console.log("In US standard/format : ", hundreds.toLocaleString());

// now here print indian format
console.log("In India standard/format : ", hundreds.toLocaleString('en-IN'));



/* ++++++++++++------------- MATHS -------------++++++++++++ */

console.log(Math); // it's object
console.log(Math.abs(-5)); // it's return only positive value even if you give positive no.
console.log(Math.round(5.5)); // for rounding as usual as

// own need for rounding like big or small roundoff
console.log("After roundoff : ",Math.ceil(87.2)); // for big no. roundoff
console.log("After roundoff : ",Math.floor(87.9)); // for small no. roundoff



// =========>>>>>>>>>> random method
// the random method give value between 0 and 1 with decimal values - important
console.log("Any random value : ", Math.random());

// for above 1 and so on at random value
console.log("Above 1 in random value : ", Math.floor(Math.random() * 10) + 1);

// another example
const max = 70, min  = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
