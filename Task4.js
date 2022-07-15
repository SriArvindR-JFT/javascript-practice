//   Q4. Check if the entered number is palindrome or not?;

const checkPalindrome = (num) => {
    const str = num.toString();
    const arr = str.split('');
    const revArr = arr.reverse();
    const revNum = Number(revArr.join(''));

    if (num === revNum) {
        return `${num} is Palindrome`;
    } else {
        return `${num} is not Palindrome`;
    }
};

console.log(checkPalindrome(12321));
console.log(checkPalindrome(123));