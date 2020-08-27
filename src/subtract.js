// Math
// Number → Number → Number
// a
// The first value.
// b
// The second value.
// Returns Number The result of `a - b`.

const R = require('ramda');
/*
Subtracts its second argument from its first argument.

R.subtract(10, 8); //=> 2

const minus5 = R.subtract(R.__, 5);
minus5(17); //=> 12

const complementaryAngle = R.subtract(90);
complementaryAngle(30); //=> 60
complementaryAngle(72); //=> 18
*/
const { subtract } = R;
const _ = R.__;

const dec = subtract(_, 1);
console.log(dec(dec(10)));
//=> 8
