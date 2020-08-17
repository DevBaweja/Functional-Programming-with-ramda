// Math
// Number -> Number -> Number
// This means it takes Number then return fn that takes Number and then return Number

const R = require('ramda');

/*
Adds two values.
R.add(2, 3); //=> 5
R.add(7)(10); //=> 17
*/
const { add } = R;
const inc = add(1);

console.log(inc(inc(10)));
