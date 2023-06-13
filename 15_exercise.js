const Calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    if (b === 0) {
      return false;
    }
    return a / b;
  },
};
console.log(Calculator.add(2, 4));
console.log(Calculator.subtract(5, 3));
console.log(Calculator.multiply(9, 2));
console.log(Calculator.divide(12, 4));
