// Valid mobile number detection based on the following condition:

// a. The mobile number should have a length of 10 or more digit
// b. The first digit should >=6
// c. Can also have +91, 0, 91 as the prefix

// If the mobile number is valid output the input mobile number in the below format: 

// (+91)999-899-9891


const mobileNoValid = (mobileNo) => {

    let str = mobileNo.toString().split(' ').join('');

    if (str[0] === '6' && str.length === 10) {
        str = str;
    }
    else if (str[0] === '9' && str.length === 12 && str[2] === '6') {
        str = str.substring(2, str.length);
    }
    else if (str[0] === '+' && str.length === 13 && str[3] === '6') {
        str = str.substring(3, str.length);
    }
    else {
        return ('Please enter valid mobile number');
    }

    const output = `(+91)${str.slice(0, 3)}-${str.slice(3, 6)}-${str.slice(6, str.length)}`;

    return output;

};

const mobileNo = prompt("Enter your mobile no");

console.log(mobileNoValid(mobileNo));