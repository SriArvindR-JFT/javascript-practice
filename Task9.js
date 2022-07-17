// Q9. Write logic to swap values of two variables without using a third variable;

const swapValues = (x, y) => {

    console.log(`Before swap; \n x = ${x} \n y = ${y}`);

    let dataTypeX = typeof x;
    let dataTypeY = typeof y;

    if (dataTypeX === 'number') {
        x = x.toString();
    }
    if (dataTypeY === 'number') {
        y = y.toString();
    }

    x = x + y;
    y = x.substring(0, x.length - y.length);
    x = x.substring(y.length);

    if (dataTypeX === 'number') {
        y = Number(y);
    }
    if (dataTypeY === 'number') {
        x = Number(x);
    }

    return (`After swap; \n x = ${x} \n y = ${y}`);

};

let x = 'Hi';
let y = 63;

console.log(swapValues(x, y));