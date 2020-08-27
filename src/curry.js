// Function
// (* → a) → (* → a)
// fn
// The function to curry.
// Returns function A new, curried function.
/*
Returns a curried equivalent of the provided function. The curried function has two unusual capabilities. First, its arguments needn't be provided one at a time. If f is a ternary function and g is R.curry(f), the following are equivalent:

g(1)(2)(3)
g(1)(2, 3)
g(1, 2)(3)
g(1, 2, 3)
*/
const R = require('ramda');
const { curry } = R;
const _ = R.__;

const f = (x, y, z) => x + y + z;
f;
//=> f
const g = curry(f);
g;
//=> f3

f(1, 1, 1);
//=> 2
g(1)(1)(1);
//=> 2
g(1, 1)(1);
//=> 2
g(1)(1, 1);
//=> 2

const a = (x, y, z) => 2 * x;
const b = curry(a);
b(1, 0, 0);
//=> 2
b(_, 0, 0)(1);
//=> 2
