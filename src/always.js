// Function
// a → (* → a)
// val
// The value to wrap in a function

// Returns function A Function :: * -> val.

/*
Returns a function that always returns the given value. Note that for non-primitives the value returned is a reference to the original value.

This function is known as const, constant, or K (for K combinator) in other languages and libraries.

const t = R.always('Tee');
t(); //=> 'Tee'
*/
const k = x => () => x;
// Implementation of always
const R = require('ramda');
const { always } = R;

const foo = always('foo');

foo();
//=> 'foo'
