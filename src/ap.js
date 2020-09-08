// Function
// [a → b] → [a] → [b]
// Apply f => f (a → b) → f a → f b
// (r → a → b) → (r → a) → (r → b)
// applyF
// applyX
// Returns *

/*
ap applies a list of functions to a list of values.

Dispatches to the ap method of the second argument, if present. Also treats curried functions as applicatives.

R.ap([R.multiply(2), R.add(3)], [1,2,3]); //=> [2, 4, 6, 4, 5, 6]
R.ap([R.concat('tasty '), R.toUpper], ['pizza', 'salad']); //=> ["tasty pizza", "tasty salad", "PIZZA", "SALAD"]

// R.ap can also be used as S combinator
// when only two functions are passed
R.ap(R.concat, R.toUpper)('Ramda') //=> 'RamdaRAMDA'
*/

const R = require('ramda');

const { ap, add, multiply, pipe, repeat, concat, prop, toUpper } = R;

ap([multiply(2), add(3)], [1, 2, 3]);
//=> [2, 4, 6, 4, 5, 6]

ap(concat, toUpper)('ramda');
// => ramdaRAMDA

// S Combinators
// xyz = x(z)(y(z))

concat('ramda')(toUpper('ramda'));
// => ramdaRAMDA

const s = (x, y, z) => x(z)(y(z));

s(concat, toUpper, 'ramda');
// => ramdaRAMDA

const obj = {
    data: 'secret',
    reps: 3,
};

ap(pipe(prop('data'), repeat), prop('reps'))(obj);
// => ['secret', 'secret', 'secret']
s(pipe(prop('data'), repeat), prop('reps'), obj);
// => ['secret', 'secret', 'secret']
