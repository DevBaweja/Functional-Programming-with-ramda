// List
// (a → Boolean) → [a] → Boolean
// fn
// The predicate function.
// list
// The array to consider.
// Returns Boolean `true` if the predicate is satisfied by at least one element, `false` otherwise.

/*
Returns true if at least one of the elements of the list match the predicate, false otherwise.

Dispatches to the any method of the second argument, if present.

Acts as a transducer if a transformer is given in list position.

See also all, none, transduce.

const lt0 = R.flip(R.lt)(0);
const lt2 = R.flip(R.lt)(2);

R.any(lt0)([1, 2]); //=> false
R.any(lt2)([1, 2]); //=> true
*/

const R = require('ramda');

const { flip, lt, any } = R;

const lt2 = flip(lt)(2);
any(lt2, [1, 3]);
//=> true
any(lt2, [2, 3]);
//=> false
