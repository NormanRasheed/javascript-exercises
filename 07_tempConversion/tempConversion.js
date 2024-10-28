const convertToCelsius = function(num) {
  formula = (num - 32) * 5/9;
  rounded = Math.round(formula * 10) / 10
  return rounded;
};

const convertToFahrenheit = function(num) {
  formula = (num * 9/5) + 32;
  rounded = Math.round(formula * 10) / 10
  return rounded;
};

console.log(convertToCelsius(28));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
