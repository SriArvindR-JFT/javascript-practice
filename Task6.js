// Q6. Write a code to find the third largest number in an array without sorting;

// const thirdLargestNum = (arr) => {
//     let counter = 0;
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = 0; j < arr.length; j++) {
//         if (arr[i] < arr[j]) {
//           counter++;
//           if (counter === 3) {
//             return arr[i];
//           }
//         }
//       }
//     }
//   };

//   const arr = [4, 7, 2, 5, 6, 9];

//   console.log(thirdLargestNum(arr));


// const thirdLargestNum = (arr) => {
//     let counter = 0;
//     let min = false;
//     let newArr = [...arr];
//     for (let i = 0; i < arr.length; i++) {
//       for (let j = 0; j < newArr.length; j++) {
//         if (arr[i] > arr[j]) {
//           min = false;
//           break;
//         } else if (arr[i] < arr[j]) {
//           min = true;
//         }
//       }
//       if (min === true) {
//         console.log(arr[i]);
//         newArr = newArr.filter((item) => {
//           return item !== arr[i];
//         });
//         console.log(newArr)
//         counter++;
//       }
//       if (counter === 3) {
//         return arr[i];
//       }
//     }
//   };

//   const arr = [4, 7, 8, 9, 2, 3];

//   console.log(thirdLargestNum(arr));