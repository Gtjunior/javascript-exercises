const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(nums) {
  return nums.reduce((acc, num) => acc + num, 0);
};

const multiply = function(nums) {
  return nums.reduce((acc, num) => acc * num, 1);
};

const power = function(num, exponent) {
  return num ** exponent;
};

const factorial = function(num) {
  let total = 1;
  for (let i = 1; i <= num; i++) {
     total = total * i;
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
