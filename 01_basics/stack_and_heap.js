/* stack (memory) - primitive data type store 
   heap (memory) - non-primitive data type store
*/

let countryName = "India" // it is going to store in stack

let anotherCountry = countryName
anotherCountry = "United States America"

console.log(countryName);
console.log(anotherCountry);



let userOne = {
    email: "userone@web.com",
    userId: "45e739ug2i_iio56d-8fhm",
    upi: "userone@ibl"
}

let userTwo = userOne

userTwo.email = "memeansuser@webdotcom"

console.table(userTwo)