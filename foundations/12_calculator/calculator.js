const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, num) => total + num, 0)
};

const multiply = function(arr) {
  return arr.reduce((total, num) => total * num, 1)
};

const power = function(base, expo) {
	return base ** expo;
};

const factorial = function(num) {
  let total = 1;
  while (num != 0) {
    total *= num;
    num--;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
