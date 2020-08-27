// Object
// s → {s: x} → Boolean
// prop
// The name of the property to check for.
// obj
// The object to query.
// Returns Boolean Whether the property exists.

/*
Returns whether or not an object has an own property with the specified name

const hasName = R.has('name');
hasName({name: 'alice'});   //=> true
hasName({name: 'bob'});     //=> true
hasName({});                //=> false

const point = {x: 0, y: 0};
const pointHas = R.has(R.__, point);
pointHas('x');  //=> true
pointHas('y');  //=> true
pointHas('z');  //=> false
*/
const R = require('ramda');
const { has } = R;

const obj = { name: 'alice' };
has('name', obj);
//=> true

obj.hasOwnProperty('name');
//=> true
