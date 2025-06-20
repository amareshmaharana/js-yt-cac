// for in loop

const myObj = {
    name: 'Alice',
    age: 30,
    city: 'Wonderland'
}

for (const key in myObj) {
    // console.log(`${key}: ${myObj[key]}`);
}



// with arrays
const programming = ['JavaScript', 'Python', 'Ruby', 'Java', 'C++', 'Go', 'Rust', 'Swift', 'Kotlin', 'PHP'];

for (const key in programming) {
    // console.log(`${key}: ${programming[key]}`);
}

/* Important Note:
    // const map = new Map()
    // map.set('name', "John");
    // map.set('age', 30);
    // map.set('city', "New York");

    // for (const key in map) {
    //     console.log(`${key}: ${map[key]}`);
    // }

    // for in loop does not work with Map objects
*/