// for of loop


const numbers = [1, 2, 3, 4, 5];

for (const element of numbers) {
    // console.log(element); 
}

// with string

const str = "Hello";
for (const greet of str) {
    // console.log(greet);
}


// +++++++++++++++++++++++++++++++++++++++++++++++
// Maps


const map = new Map()
map.set('name', "John");
map.set('age', 30);
map.set('city', "New York");

console.log(map);

for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
}
