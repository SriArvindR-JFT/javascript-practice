// Q11. Write a program to display the duplicate characters of a String;


// Solution 1;

// const findDuplicate = (str) => {

//     const arr = str.toLowerCase().split('');

//     const duplicateChar = [];

//     for (let i = 0; i < arr.length; i++) {

//         for (let j = 0; j < arr.length && i !== j; j++) {

//             if (
//                 arr[i] === arr[j] &&
//                 arr[i] !== ' ' &&
//                 !duplicateChar.includes(arr[i])
//             ) {
//                 duplicateChar.push(arr[i]);
//             }

//         }

//     }

//     return duplicateChar;

// };

// console.log(findDuplicate('After Effect'));


// Solution 2;

const findDuplicate = (str) => {

    const arr = str.toLowerCase().split('');

    const duplicateChar = [];

    for (let i = 0; i < arr.length; i++) {

        const newArr = [...arr];

        newArr.splice(i, 1);

        if (newArr.includes(arr[i]) &&
            !duplicateChar.includes(arr[i])
        ) {
            duplicateChar.push(arr[i]);
        }

    }

    return duplicateChar;

};

console.log(findDuplicate('After Effect'));