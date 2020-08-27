// Math
// Number -> Number -> Number
// a
// The first value
// b
// The second value
// Returns Number
// This means it takes Number then return fn that takes Number and then return Number

const R = require('ramda');

/*
Adds two values.
R.add(2, 3); //=> 5
R.add(7)(10); //=> 17
*/
const { add } = R;
const inc = add(1);
inc(inc(10));
//=> 12
