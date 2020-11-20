/*
const key = 'hobby';
const list = [
    { name: 'alice', hobby: 'Hacking' },
    { name: 'alice', hobby: 'Juggling' },
];

const wind = (key, list) => {
    const object = { ...list[0], [key]: [] };
    list.forEach(item => object[key].push(item[key]));
    return object;
};

const windResult = wind(key, list);
console.log(windResult);
*/
// => { name: 'alice', hobby: [ 'Hacking', 'Juggling' ] }

const R = require('ramda');
const { clone, assoc, forEach } = R;
var key = 'hobby';
var list = [
    { name: 'alice', hobby: 'Hacking' },
    { name: 'alice', hobby: 'Juggling' },
];

var wind = function (key, list) {
    // Cloning
    var clonedObject = clone(list[0]);
    // Adding [key] to newly Cloned Object
    // Initialize [key] with empty list
    var assocObject = assoc([key], [], clonedObject);

    var fn = function (item) {
        assocObject[key].push(item[key]);
    };

    forEach(fn, list);
    return assocObject;
};

console.log(wind(key, list));
