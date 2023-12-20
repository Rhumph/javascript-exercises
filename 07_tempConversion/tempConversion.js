const convertToCelsius = function(fahrenheit) {
  let convertedCelsius = ((fahrenheit -32) * (5/9));
  const roundedCelsius = convertedCelsius.toFixed(1);
  let finalCelsius = Number.parseFloat(roundedCelsius);
  return (finalCelsius);
};

const convertToFahrenheit = function(celsius) {
  let convertedFahrenheit = ((celsius * (9/5) + 32));
  const roundedFahrenheit = convertedFahrenheit.toFixed(1);
  let finalFahrenheit = Number.parseFloat(roundedFahrenheit);
  return (finalFahrenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
