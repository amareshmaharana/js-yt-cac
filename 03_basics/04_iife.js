// Immediately Invoked Function Expression (IIFE)


(function() {
    console.log("This is an IIFE, it runs immediately!");
    
    // You can define variables and functions here that won't pollute the global scope
})();

( (name) => {
    console.log(`Hello, ${name}! This is another IIFE.`);
})("John Doe");