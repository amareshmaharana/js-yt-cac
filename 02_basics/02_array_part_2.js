// Array part - 2

const marvel_heros = ["Iron-Man", "Spider-Man", "Thor"]
const dc_heros = ["Superman", "Batman", "Wonder-Woman"]

// marvel_heros.push(dc_heros)

// const allHeros = marvel_heros.concat(dc_heros)

// we can also use spread operator to merge like concat
const allNewHeros = [...marvel_heros, ...dc_heros]

// console.log(allNewHeros);


const anotherArr = [1, 2, 3, 4, [5, 6, 7], 4, 6, [3, 2, 6, [3, 5]], 6, 8]
const realArr = anotherArr.flat(Infinity)

// console.log(realArr);


// it checks it is array or not
console.log(Array.isArray("Avengers"));

// here (from) - whateever we gives value it converts to array
console.log(Array.from("Avengers"));

// here comes empty array - for printing we have to give key array or value array - it's depend
console.log(Array.from({name: "Captain America"}));


// another example

let score1 = 100, score2 = 200, score3 = 300
console.log(Array.of(score1, score2, score3));
