// forEach loop

const codingLanguages = ['JavaScript', 'Python', 'Ruby', 'Java', 'C++', 'Go', 'Rust', 'Swift', 'Kotlin', 'PHP'];

codingLanguages.forEach( function(language) {
    // console.log(`I love coding in ${language}!`);
})

// we can write it as
function printLanguage(language) {
    // console.log(`I love coding in ${language}!`);
}

codingLanguages.forEach(printLanguage);


// we can print as
codingLanguages.forEach( (items, index, codingLanguages) => {
    // console.log(`I love coding in ${items} at index ${index} in the array ${codingLanguages}!`);
})

