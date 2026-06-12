// Function that returns a true if the argument is a leap year and false if not
const leapYears = function(year) {
    // Checks if year can be divided by four
    if ((year) % 4 === 0) {
        // Checks if year can be divided by 100
        if ((year) % 100 === 0) {
            // If year can be divided by 100, check if it can be divided by 400
            if ((year) % 400 === 0) {
                return true;
            }
            return false;
        }
        return true;
    }
    else {
        return false;
    }
        // returns year
};

// Do not edit below this line
module.exports = leapYears;
