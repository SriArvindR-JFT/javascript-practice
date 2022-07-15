// Q6. Write a code to find the third largest number in an array without sorting;

const thirdLargestNum = (arr) => {

    let counter = 1;
    let min;

    while (counter <= 3) {

        min = Infinity;

        for (let i = 0; i < arr.length; i++) {

            if (arr[i] < min) {
                min = arr[i];
            }

        }

        arr = arr.filter((item) => {
            return item !== min;
        });

        counter++;

    }

    return min;

};

const arr = [4, 7, 8, 9, 2, 3];

console.log(thirdLargestNum(arr));