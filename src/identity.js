// Function
// a → a
// x
// The value to return.
// Returns * The input value, `x`.

/*
A function that does nothing but return the parameter supplied to it. Good as a default or placeholder function.

R.identity(1); //=> 1

const obj = {};
R.identity(obj) === obj; //=> true
*/

const R = require('ramda');
const { identity } = R;

console.log(identity([1, 2, 3]));
