// List
// a → [a] → [a]
// el
// The element to add to the end of the new list.
// list
// The list of elements to add a new item to. list.

/*
Returns Array A new list containing the elements of the old list followed by `el`.

Returns a new list containing the contents of the given list, followed by the given element.
See also prepend.

R.append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']
R.append('tests', []); //=> ['tests']
R.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]
*/

const R = require('ramda');

const { append } = R;
