// Q15. If provided the following input :

// React Python Ansi-C javascript python Ansi-C JAVA PYTHON Ansi-C Java Ansi-C J
// avascript Python Ansi-C Java Ansi-C React JavaScript Ansi-C Java pythoN React 
// javaScript AngulaR Ansi-C Python angular Java Javascript

// Output in the below format :

// Word        Freq

// Ansi-C      8
// Python      6
// Java        5
// Javascript  5
// React       3
// Angular     2

// Sort in descending order of frequency and ascending order of dictionary 
// if the frequency is the same;

// ###############################################################################

const outputFreQ = (input) => {

    let arr = input.toLowerCase().split(' ');

    const freQ = new Map();

    let i = 0;

    while (i < arr.length) {

        let count = 0;

        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++;
            }
        }

        freQ.set(arr[i], count);

        arr = arr.filter((item) => {
            return item !== arr[i];
        });

    }

    const sortFreQ = new Map([...freQ].sort());

    const temp = [...sortFreQ];

    temp.sort(tempDescending);

    function tempDescending(x, y) {
        if (x[1] === y[1]) {
            return 0;
        } else if (x[1] < y[1]) {
            return 1;
        } else if (x[1] > y[1]) {
            return -1;
        }
    }

    const output = new Map(temp);

    return output;

};

const input = 'React Python Ansi-C javascript python Ansi-C JAVA PYTHON Ansi-C Java Ansi-C Javascript Python Ansi-C Java Ansi-C React JavaScript Ansi-C Java pythoN React javaScript AngulaR Ansi-C Python angular Java Javascript';

console.log(outputFreQ(input));