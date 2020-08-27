// Function
// ((a … → b) … → [a] → *) → ((a …, Int, [a] → b) … → [a] → *)
// fn
// A list iteration function that does not pass index or list to its callback

// Returns function An altered list iteration function that passes (item, index, list) to its callback
/*
Creates a new list iteration function from an existing one by adding two new parameters to its callback function: the current index, and the entire list.

This would turn, for instance, R.map function into one that more closely resembles Array.prototype.map. Note that this will only work for functions in which the iteration callback function is the first parameter, and where the list is the last parameter. (This latter might be unimportant if the list parameter is not used.)

const mapIndexed = R.addIndex(R.map);
mapIndexed((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']);
=> ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
*/
const R = require('ramda');

const { addIndex, map, add } = R;
console.log(addIndex(map)(add, [0, 0, 0, 0, 0]));
