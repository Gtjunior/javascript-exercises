const convertToCelsius = function(temp) {
  let celcius = Number( ( (temp - 32) * 5 / 9 ).toFixed(1) );
  return celcius;
};

const convertToFahrenheit = function(temp) {
  let fahrenheit = Number( ( (temp) * 9 / 5 + 32 ).toFixed(1) );
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
