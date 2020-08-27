const fs = require('fs');
const R = require('ramda');
// console.log(R);

const readFile = path => fs.readFileSync(path, { encoding: 'utf-8' });

const readData = R.pipe(
    R.converge(R.concat, [
        R.pipe(R.replace(/.*\//, ''), R.replace(/\..*/, ''), R.concat('Date:'), R.concat(R.__, ';')),
        readFile,
    ])
);

R.pipe(
    R.map(
        R.pipe(
            readData,
            R.replace(/\n/, ''),
            R.split(';'),
            R.dropLast(1),
            R.map(R.pipe(R.split(':'), R.view(R.lensIndex(1)))),
            R.converge(R.map, [R.pipe(R.head, R.objOf), R.tail])
        )
    ),
    R.transpose,
    R.map(R.mergeAll),
    console.log
)(['./input/btc.csv', './input/eth.csv']);
