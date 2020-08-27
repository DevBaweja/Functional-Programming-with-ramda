// Logic
// [(*… → Boolean)] → (*… → Boolean)
// predicates
// An array of predicates to check
// Returns function The combined predicate

/*
Takes a list of predicates and returns a predicate that returns true for a given list of arguments if every one of the provided predicates is satisfied by those arguments.

The function returned is a curried function whose arity matches that of the highest-arity predicate.
See also anyPass.

const isQueen = R.propEq('rank', 'Q');
const isSpade = R.propEq('suit', '♠︎');
const isQueenOfSpades = R.allPass([isQueen, isSpade]);

isQueenOfSpades({rank: 'Q', suit: '♣︎'}); //=> false
isQueenOfSpades({rank: 'Q', suit: '♠︎'}); //=> true
*/
const R = require('ramda');
const { flip, gte, lte, allPass, all } = R;

const isBetween10And20 = allPass([flip(gte)(10), flip(lte)(20)]);

isBetween10And20(5);
//=> false
isBetween10And20(15);
//=> true
isBetween10And20(25);
//=> true

all(isBetween10And20, [10, 15, 20]);
//=> true
all(isBetween10And20, [1, 2, 3]);
//=> false

allPass([lte, gte])(10, 10);
//=> true
allPass([lte, gte])(5, 15);
//=> false

allPass([lte, flip(gte)])(10, 20);
//=> true
allPass([lte, flip(gte)])(20, 10);
//=> false
