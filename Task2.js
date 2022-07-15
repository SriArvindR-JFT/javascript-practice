// Q2. Find the sum of all the elements/numbers of a given Array;

const sumOfArray = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
};

const arr = [1, 2, 3, 4, 5, 6];

console.log(sumOfArray(arr));