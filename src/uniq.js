// List
// [a] → [a]
// list
// The array to consider.
// Returns Array The list of unique items.

/*
Returns a new list containing only one copy of each element in the original list. R.equals is used to determine equality.

R.uniq([1, 1, 2, 1]); //=> [1, 2]
R.uniq([1, '1']);     //=> [1, '1']
R.uniq([[42], [42]]); //=> [[42]]
*/

const R = require('ramda');
const { uniq } = R;

uniq([1, 2, 3, 1, 2, 3]);
[1, 2, 3];

uniq([{ k1: 'v1' }, { k1: 'v1' }, { k2: 'v2' }]);
[{ k1: 'v1', k2: 'v2' }];
