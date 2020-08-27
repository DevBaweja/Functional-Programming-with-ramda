const key = 'hobbies';
const object = {
    name: 'foo',
    hobbies: ['Golf', 'Hockey'],
};
const unwind = (key, object) => {
    return object[key].reduce((acc, item) => {
        acc.push({ ...object, [key]: item });
        return acc;
    }, []);
};

console.log(unwind(key, object));
