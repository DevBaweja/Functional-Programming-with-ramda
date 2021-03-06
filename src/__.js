// Function
const R = require('ramda');
// A special placeholder value used to specify "gaps" within curried functions, allowing partial application of any combination of arguments, regardless of their positions.
/*
If g is a curried ternary function and _ is R.__, the following are equivalent:

g(1, 2, 3)
g(1)(2)(3)
g(_, 2, 3)(1)
g(_, _, 3)(1)(2)
g(_, _, 3)(1, 2)
g(_, 2, _)(1, 3)
g(_, 2)(1)(3)
g(_, 2)(1, 3)
g(_, 2)(_, 3)(1)
*/
const _ = R.__;
const { add } = R;

add();
//=> f2
add(1);
//=> f1
add(_, 1);
//=> f1
add(_, 1)(1);
//=> 2
add(1)(1);
//=> 2
add()(1, 1);
//=> 2

// f1 f2 f3 are simply # of argument to function
// Currying is notation of turning fn that takes more than one argument into
// series of fn that each takes some argument

const f = (x, y, z) => x + y + z;
f;
//=> f

const g = x => y => z => x + y + z;
g;
//=> g

// g here is curried version of f
f(1, 1, 1);
//=> 3
g(1)(1)(1);
//=> 3
