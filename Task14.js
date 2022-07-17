// Q14.Using the below Map:

// {
//     Developer: 5,
//         Designer: 3,
//             QA: 4,
//                 Manager: 1
// }

// Output below arrays dynamically:

// A)[[‘Developer’,‘Developer’,‘Developer’,‘Developer’,‘Developer’],
// [‘Designer’,‘Designer’‘Designer’],
// [‘QA’, ‘QA’,‘QA’,‘QA’],
// [‘Manager’]]

// B)[‘Developer’,‘Developer’,‘Developer’,‘Developer’,‘Developer’,
//     ‘Designer’,‘Designer’‘Designer’,
//     ‘QA’, ‘QA’,‘QA’,‘QA’, 
//     ‘Manager’]

// ####################################################################

const outputArray = (input) => {

    const twoDimArr = [];
    const arr = [];

    for (let key in input) {

        const temp = [];

        let count = input[key];

        for (let i = 1; i <= count; i++) {
            temp.push(key);
            arr.push(key);
        }

        twoDimArr.push(temp);

    }

    console.log(twoDimArr);
    console.log(arr);

};

const input = {
    Developer: 5,
    Designer: 3,
    QA: 4,
    Manager: 1,
};

outputArray(input);