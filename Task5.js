// Q5. Find the next palindrome number after 1991;

const nextPalindrome = () => {

    let num = 1992;

    while (num > 1991) {

        const str = num.toString();
        const arr = str.split('');
        const revArr = arr.reverse();
        const revNum = Number(revArr.join(''));

        if (num === revNum) {
            return `The next palindrome number after 1991 is, ${num}`;
        }

        num++;

    }

};

console.log(nextPalindrome());