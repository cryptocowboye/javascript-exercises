const add = function(firstNum, secondNum) {
	return Number(firstNum) + Number(secondNum);
};

const subtract = function(firstNum, secondNum) {
  return firstNum - secondNum;	
};

const sum = function(arr) {
	return arr.reduce((total, num) => {
    return total + num;
  }, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, num) => {
    return total * num;
  }, 1);
};

const power = function(firstNum, secondNum) {
	return firstNum ** secondNum;
};

const factorial = function(num) {
  if (num === 0 || num === 1)
    return 1;
  for (i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
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
