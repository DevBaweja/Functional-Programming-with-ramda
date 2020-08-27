// List
// Number → (a → a) → [a] → [a]
// idx
// The index.
// fn
// The function to apply.
// list
/*
An array-like object whose value at the supplied index will be replaced.

Returns Array A copy of the supplied array-like object with the element at index `idx`
replaced with the value returned by applying `fn` to the existing element.
See also update.

R.adjust(1, R.toUpper, ['a', 'b', 'c', 'd']);      //=> ['a', 'B', 'c', 'd']
R.adjust(-1, R.toUpper, ['a', 'b', 'c', 'd']);     //=> ['a', 'b', 'c', 'D']
*/
const R = require('ramda');

const { __, adjust, always, toUpper, subtract } = R;

const foo = always('foo');
foo();
//=> foo

adjust(0, foo, ['bar', 'bar']);
//=> ['foo','bar']

adjust(-1, foo, ['bar', 'bar']);
//=> ['bar','foo']

const listDec = adjust(__, subtract(__, 1));
listDec(0, [1, 1, 1]);
//=> [0, 1, 1]
