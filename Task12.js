// Q12. Write a program to find the occurrences of each number of an array of 20 elements;

const findOccurrences = (arr) => {

    const occurrences = new Map();

    let i = 0;

    while (i < arr.length) {

        let count = 0;

        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }

        occurrences.set(arr[i], count);

        arr = arr.filter((item) => {
            return item !== arr[i];
        });

    }

    return occurrences;

};

const arr = [1, 2, 1, 2, 3, 1, 2, 3, 4, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 6];

console.log(findOccurrences(arr));