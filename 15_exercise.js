// const Calculator = {
//   add: function (a, b) {
//     return a + b;
//   },
//   subtract: function (a, b) {
//     return a - b;
//   },
//   multiply: function (a, b) {
//     return a * b;
//   },
//   divide: function (a, b) {
//     if (b === 0) {
//       return false;
//     }
//     return a / b;
//   },
// };
// console.log(Calculator.add(2, 4));
// console.log(Calculator.subtract(5, 3));
// console.log(Calculator.multiply(9, 2));
// console.log(Calculator.divide(12, 4));

///////////////////////////////
const Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => (b === 0 ? false : a / b),
};
console.log(Calculator.add(2, 4));
console.log(Calculator.subtract(5, 3));
console.log(Calculator.multiply(9, 2));
console.log(Calculator.divide(12, 4));