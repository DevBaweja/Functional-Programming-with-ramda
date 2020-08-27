// List
// Number → a → [a] → [a]
// idx
// The index to update.
// x
// The value to exist at the given index of the returned array.
// list
// The source array-like object to be updated.
/*
Returns Array A copy of `list` with the value at index `idx` replaced with `x`.
Added in v0.14.0

Returns a new copy of the array with the element at the provided index replaced with the given value.
See also adjust.

R.update(1, '_', ['a', 'b', 'c']);      //=> ['a', '_', 'c']
R.update(-1, '_', ['a', 'b', 'c']);     //=> ['a', 'b', '_']
*/

const R = require('ramda');

const { update } = R;

console.log(update(0, 'foo', ['bar', 'bar']));
//=> ['foo','bar']

console.log(update(-1, 'foo', ['bar', 'bar']));
//=> ['bar','foo']
