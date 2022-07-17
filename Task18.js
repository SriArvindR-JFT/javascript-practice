// Restructure and sort the following array to [number, “string”];

// Input: [2, "b", 4, "d", 3, "a", "c", "e", 5, 1]
// Output: [1, 2, 3, 4, 5, "a", "b", "c", "d", "e"]

const restructure = (arr) => {

    const number = [];
    const string = [];

    for (let i = 0; i < arr.length; i++) {

        if (typeof arr[i] === 'number') {
            number.push(arr[i]);
        }

        else if (typeof arr[i] === 'string') {
            string.push(arr[i]);
        }

    }

    number.sort();
    string.sort();

    const output = [...number, ...string];

    return output;

};

const input = [2, 'b', 4, 'd', 3, 'a', 'c', 'e', 5, 1];

console.log(restructure(input));