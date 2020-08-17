const R = require('ramda');
/*
Returns a curried equivalent of the provided function. The curried function has two unusual capabilities. First, its arguments needn't be provided one at a time. If f is a ternary function and g is R.curry(f), the following are equivalent:

g(1)(2)(3)
g(1)(2, 3)
g(1, 2)(3)
g(1, 2, 3)
*/
const { curry } = R;

const f = (x, y, z) => x + y + z;
console.log(f);
const g = curry(f);
console.log(g);

console.log(f(1, 1, 1));
console.log(g(1)(1)(1));
console.log(g(1, 1)(1));
console.log(g(1)(1, 1));
