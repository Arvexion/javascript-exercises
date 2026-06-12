// Function that takes an array and returns an array without the seconds arguments
const removeFromArray = function(array, ...args) {
    // Creates a new array
    const cleanArray = [];

    // Goes through each item in the array
    array.forEach((item) => {
        // If the array has the item, add it to the new array
        if (!args.includes(item)) {
            cleanArray.push(item);
        }
    });

    return cleanArray;
};

// Do not edit below this line
module.exports = removeFromArray;
