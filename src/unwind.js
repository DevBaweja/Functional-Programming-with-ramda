/*
const key = 'hobbies';
const object = {
    name: 'alice',
    hobbies: ['Golf', 'Hacking'],
    colors: ['red', 'green'],
};

const unwind = (key, object) => {
    return object[key].reduce((acc, item) => {
        acc.push({ ...object, [key]: item });
        return acc;
    }, []);
};

const unwindResult = unwind(key, object);
console.log(unwindResult);
*/
// => [
//   { name: 'alice', hobbies: [ 'Golf', 'Hacking' ], colors: 'red' },
//   { name: 'alice', hobbies: [ 'Golf', 'Hacking' ], colors: 'green' }
// ]

var R = require('ramda');
var { has, propIs, reduce, clone, dissoc, assoc } = R;

var key = 'hobbies';
var object = {
    name: 'alice',
    hobbies: ['Golf', 'Hacking'],
    colors: ['red', 'green'],
};

var unwind = function (key, object) {
    // If prop as key is not in Object or prop as key is not an List in Object
    if (!has(key, object) || !propIs(Array, key, object)) return [object];
    // Reduce Function
    var fn = function (acc, item) {
        // Cloning
        var clonedObject = clone(object);
        // Removing [key] from newly cloned object
        var dissocObject = dissoc([key], clonedObject);
        // Adding [key] to newly dissocated object
        var assocObject = assoc([key], item, dissocObject);
        // Adding assocated object to Accumulator
        acc.push(assocObject);
        return acc;
    };
    // Reduce over object[key] which is an list
    // Initialize Accumulator with empty list
    return reduce(fn, [], object[key]);
};
console.log(unwind(key, object));
