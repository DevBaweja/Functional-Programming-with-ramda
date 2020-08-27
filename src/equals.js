// Relation
// a → b → Boolean
// a
// b
// Returns Boolean

/*
Returns true if its arguments are equivalent, false otherwise. Handles cyclical data structures.

Dispatches symmetrically to the equals methods of both arguments, if present.

R.equals(1, 1); //=> true
R.equals(1, '1'); //=> false
R.equals([1, 2, 3], [1, 2, 3]); //=> true

const a = {}; a.v = k;
const b = {}; b.v = k;
R.equals(a, b); //=> true
*/

const R = require('ramda');
const { equals } = R;

const a = {};
a.k = 'v';
const b = {};
b.k = 'v';

a === b;
//=> false
equals(a, b);
//=> true
a.another = 'v';
equals(a, b);
//=> false

const arrA = [1, 2, 3];
let arrB = [1, 2, 3];
arrA === arrB;
//=> false
equals(arrA, arrB);
//=> true
arrB = [3, 2, 1];
equals(arrA, arrB);
//=> false
