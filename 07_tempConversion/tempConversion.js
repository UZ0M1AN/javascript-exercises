const ftoc = function(farenheit) {
  const celsius = (farenheit - 32) * 5 / 9;
  return +celsius.toFixed(1);
};

const ctof = function(celsius) {
  const farenheit = celsius * 9 / 5 + 32;
  return +farenheit.toFixed(1);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
