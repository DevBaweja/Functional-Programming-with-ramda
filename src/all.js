// List
// (a → Boolean) → [a] → Boolean
// fn
// The predicate function.
// list
// The array to consider.
// Returns Boolean `true` if the predicate is satisfied by every element, `false` otherwise.

/*
Returns true if all elements of the list match the predicate, false if there are any that don't.

Dispatches to the all method of the second argument, if present.

Acts as a transducer if a transformer is given in list position.
See also any, none, transduce.

const equals3 = R.equals(3);
R.all(equals3)([3, 3, 3, 3]); //=> true
R.all(equals3)([3, 3, 1, 3]); //=> false
*/

const R = require('ramda');
const { __, all, lte } = R;

const lte10 = lte(__, 10);

console.log(all(lte10, [1, 2, 3]));
//=> true
console.log(all(lte10, [11, 2, 3]));
//=> false
