// Q7. Write a function to generate random numbers and find if it’s prime or not;

const findePrime = () => {

    const num = Math.floor((Math.random() * 100) + 1);
    console.log(`The genrated number is ${num}`);

    let prime = false;

    if (num === 1) {
        return `${num} is not a Prime Number`;
    }

    if (num === 2) {
        return `${num} is a Prime Number`;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            prime = false;
            return `${num} is not a Prime Number`;
        } else {
            prime = true;
        }
    }

    if (prime === true) {
        return `${num} is a Prime Number`;
    }

};

console.log(findePrime());