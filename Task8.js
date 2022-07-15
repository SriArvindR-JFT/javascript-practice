// Q8. Write a function to generate random numbers and find if it’s even or not;

const findeEvenNo = () => {

    const num = Math.floor((Math.random() * 100) + 1);
    console.log(`The genrated number is ${num}`);

    if (num % 2 === 0) {
        return `${num} is a Even Number`;
    } else {
        return `${num} is not a Even Number`;
    }

};

console.log(findeEvenNo());