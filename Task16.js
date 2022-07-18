// Write a program to multiply two numbers of any length (1 <= length <= 100);

// (Note: Don’t use any library classes like a big integer);

// Example:

//     1234 x 5678
//     1 x 2345876549
//     123434545546547675012394 x 1223435436565796877608


const multiply = (x, y) => {

    let num1 = x.toString();
    let num2 = y.toString();

    if (num1.length < num2.length) {
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }

    let sum1 = 0;
    let count1 = 1;

    for (let i = num1.length - 1; i >= 0; i--) {

        let sum2 = 0;
        let count2 = 1;

        for (let j = num2.length - 1; j >= 0; j--) {
            let temp = num1[i] * num2[j] * count2;
            sum2 += temp;
            count2 *= 10;
        }

        sum1 += (sum2 * count1);
        count1 *= 10;

    }

    return sum1;

};

const x = 1234;

const y = 5678;

console.log(multiply(x, y));