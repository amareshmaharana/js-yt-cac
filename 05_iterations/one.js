// for loop

for(let i=0; i<=10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is the best number");
    }
    // console.log(element);
}


for (let i = 0; i <= 10; i++) {
    // console.log(`i: ${i}`);
    for (let j = 0; j <= 10; j++) {
        // console.log(`i: ${i}, j: ${j}`);
    }
}


// using array
arr = ["one", "two", "three", "four", "five"];

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    // console.log(element);
}



// +++++++++++++++++++++++++
// keyword


// break and continue

for (let i = 1; i <= 15; i++) {
    // if (i == 8) {
    //     console.log(`Detected - ${i}`);
    //     break;
    // }

    if (i == 8) {
        console.log(`Skipping - ${i}`);
        continue;
    }
    console.log(`i: ${i}`);
}
