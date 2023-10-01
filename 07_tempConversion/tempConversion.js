const convertToCelsius = function(f) {
  let conversion = .5556 * (f - 32)
  if (Number.isInteger(conversion)) {
    return conversion
  }
  return parseFloat(conversion.toFixed(1))
};

const convertToFahrenheit = function(c) {
  let conversion = (c * 1.8) + 32
  if (Number.isInteger(conversion)) {
    return conversion
  }
  return parseFloat(conversion.toFixed(1))
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
