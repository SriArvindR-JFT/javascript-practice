// Create a for loop that iterates up to 100 while outputting;
// "jelly" at multiples of 4,
// "fish" at multiples of 7 and
// "jellyfish" at multiples of 4 and 7;

for (let i = 1; i <= 100; i++) {

    if (i % 4 === 0 && i % 7 === 0) {
        console.log('jellyfish');
    }

    else if (i % 4 === 0) {
        console.log('jelly');
    }

    else if (i % 7 === 0) {
        console.log('fish');
    }

    else {
        console.log(i);
    }

}