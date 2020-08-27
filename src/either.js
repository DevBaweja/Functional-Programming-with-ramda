// Logic
// (*… → Boolean) → (*… → Boolean) → (*… → Boolean)
// f
// a predicate
// g
// another predicate
// Returns function a function that applies its arguments to `f` and `g` and `||`s their outputs together.

/*
A function wrapping calls to the two functions in an || operation, returning the result of the first function if it is truth-y and the result of the second function otherwise. Note that this is short-circuited, meaning that the second function will not be invoked if the first returns a truth-y value.

In addition to functions, R.either also accepts any fantasy-land compatible applicative functor.

See also or.

const gt10 = x => x > 10;
const even = x => x % 2 === 0;
const f = R.either(gt10, even);
f(101); //=> true
f(8); //=> true

R.either(Maybe.Just(false), Maybe.Just(55)); // => Maybe.Just(55)
R.either([false, false, 'a'], [11]) // => [11, 11, "a"]
*/
