// List
// a → [a] → [a]
// el
// The item to add to the head of the output list.
// list
// The array to add to the tail of the output list.

/*
Returns Array A new array.

Returns a new list with the given element at the front, followed by the contents of the list.
See also append.

R.prepend('fee', ['fi', 'fo', 'fum']); //=> ['fee', 'fi', 'fo', 'fum']
*/

const R = require('ramda');

const { prepend } = R;

console.log(prepend('el', ['list']));
//=> [ 'el', 'list' ]
console.log(prepend('el', 'list'));
//=> [ 'el', 'l', 'i', 's', 't' ]
