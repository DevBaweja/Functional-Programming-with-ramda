// Function
// (*… → a) → [*] → a
// fn
// The function which will be called with args

// args
// The arguments to call fn with

/*
Returns * result The result, equivalent to `fn(...args)`

Applies function fn to the argument list args. This is useful for creating a fixed-arity function from a variadic function. fn should be a bound function if context is significant.
See also call, unapply.

const nums = [1, 2, 3, -99, 42, 6, 7];
R.apply(Math.max, nums); //=> 42
*/
const R = require('ramda');

const { apply } = R;
