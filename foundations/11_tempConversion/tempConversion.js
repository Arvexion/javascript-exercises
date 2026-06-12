const convertToCelsius = function(temp) {
  let celsius = 0;

  // Converts temp to Celsius using a formula
  celsius = ((temp - 32) * 5 / 9)

  // Rounds off the Celsius
  celsius = Math.round(celsius * 10) / 10; 

  // Returns the temp
  return celsius;
};

const convertToFahrenheit = function(temp) {
  let fahrenheit = 0;

  // Converts temp to Fahrenheit using a formula
  fahrenheit = (temp * 9 / 5 + 32);

  // Rounds off the Fahrenheit
  fahrenheit = Math.round(fahrenheit * 10) / 10; 

  // Returns the temp
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
