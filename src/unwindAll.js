/*
const keys = ['hobbies', 'colors'];
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

const unwindAll = (keys, object) => {
    return keys.map(key => unwind(key, object));
};

const unwindAllResult = unwindAll(keys, object);
console.log(unwindAllResult);
*/

// => [
//   [
//     { name: 'alice', hobbies: 'Golf', colors: ['red', 'green] },
//     { name: 'alice', hobbies: 'Hacking', colors: ['red', 'green] }
//   ],
//   [
//     { name: 'alice', hobbies: ['Golf', 'Hacking'], colors: 'red' },
//     { name: 'alice', hobbies: ['Golf', 'Hacking'], colors: 'green' }
//   ]
// ]

var R = require('ramda');
var { has, propIs, reduce, clone, dissoc, assoc } = R;
var { is, map } = R;

var unwind = function (key, object) {
    if (!has(key, object) || !propIs(Array, key, object)) return [object];
    var fn = function (acc, item) {
        var clonedObject = clone(object);
        var dissocObject = dissoc([key], clonedObject);
        var assocObject = assoc([key], item, dissocObject);
        acc.push(assocObject);
        return acc;
    };
    return reduce(fn, [], object[key]);
};

var keys = ['hobbies', 'colors'];
var object = {
    name: 'alice',
    hobbies: ['Golf', 'Hacking'],
    colors: ['red', 'green'],
};

var unwindAll = function (keys, object) {
    // If keys is not List
    if (!is(Array, keys)) return [object];
    var fn = function (key) {
        // unwind with key
        return unwind(key, object);
    };
    return map(fn, keys);
};

console.log(unwindAll(keys, object));
