const name = "Adam"
const username = "Explore World"
const youtubeFollower = "3.78M"

console.log(`Hello, this is ${name} and my youtube username is ${username} and subscribers are around ${youtubeFollower}.`);


const musicArtist = new String("Martin Garrix");
console.log(musicArtist);

console.log(musicArtist.__proto__);

const newString = musicArtist.substring(0, 5)
console.log(newString);

const anotherString = musicArtist.slice(-12, 2)
console.log(anotherString);


// trim method - use to remove whitespace
const newStringOne = "   India   "
console.log(newStringOne);
console.log(newStringOne.trim());


// replace method
const sampleUrl = "https://india.com/state%20newdelhi"
console.log(sampleUrl.replace('%20', '-'));

console.log(musicArtist.split('-'));
