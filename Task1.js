// Q1. Reverse a given String;

const revStr = (str) => {
    const arr = str.split('');
    const revArr = arr.reverse();
    const revStr = revArr.join('');
    return revStr;
};

console.log(revStr('universe'));