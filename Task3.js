//   Q3. Reverse each word in a string.
//   Input: Hi my name is <Your Name>
//   Output: iH ym eman si <Your Name in Reverse>

const revWordsOnStr = (str) => {
    const arr = str.split(' ');
    const revArr = [];

    for (let i = 0; i < arr.length; i++) {
        const newArr = arr[i].split('');
        const temp = newArr.reverse();
        revArr.push(temp.join(''));
    }

    const revStr = revArr.join(' ');
    return revStr;
};

console.log(revWordsOnStr('Hi my name is human'));