// Function that takes two arguments and returns the sum of all numbers between, and including them
const sumAll = function(firstNum, secondNum) {
    // checks if both are positive integers
    if (firstNum < 0 || secondNum < 0 || !Number.isInteger(firstNum) || !Number.isInteger(secondNum)) {
        return "ERROR";
    }

    // Ensures the correct order of values
    let start = Math.min(firstNum, secondNum);
    let end = Math.max(firstNum, secondNum);

    let sum = 0;

    // Goes through the numbers and adds them
    for (let i = start; i <= end; i++) {
        sum += i;
    }

    // Returns the sum
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
