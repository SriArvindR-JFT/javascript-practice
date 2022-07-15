// Q13. Write a program to remove duplicate values from an array of integers;

const removeDuplicate = (arr) => {

    const newArr = [];

    for (let i = 0; i < arr.length; i++) {

        if (!newArr.includes(arr[i])) {
            newArr.push(arr[i]);
        }

    }

    return newArr;

};

const arr = [1, 2, 1, 3, 4, 2, 5, 6, 4, 7, 5, 2, 1, 8, 9, 8, 7];

console.log(removeDuplicate(arr));