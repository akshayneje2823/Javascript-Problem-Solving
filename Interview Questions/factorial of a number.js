// Calculate the factorial of the number


let number = 10;

function factorial(x) {
    if (x === 0) {
        return 1
    }
    return x * factorial(x - 1);
};

console.log(factorial(number))