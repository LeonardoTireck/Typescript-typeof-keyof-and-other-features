const userName = "Leo";
console.log(typeof userName);
// This was all Javascript until now. The typeof operator already exists on Javacript.

// Now let's assume we want to store the type of a value in the UserName type.
// For reference, we'll use the userName constant.
type UserName = typeof userName; // this is a Typescript feature, a different operator than typeof on JS.
// as a result, UserName has a type of "Leo", instead of string. This happens because Typescript
// understands that userName is a constant and can't change it's value. If userName was a variable,
// the type of UserName would be string.

// Let's say we have a more complex value:
const settings = {
  difficulty: "easy",
  minLevel: 10,
  didStart: false,
  players: ["John", "Jane"],
};
// Now let's say we wan't to write the type that decribes this object
type Settings = typeof settings; // This is very powerful
// you can even create this type on a function parameter handler if you want to be more concise
function loadData(s: typeof settings) {
  // instead of using the Settings type, we can do this
  // ...
}

// We can also apply that concept when working directly with functions and callbacks:
function sum(a: number, b: number) {
  return a + b;
}

function subtract(a: number, b: number) {
  return a - b;
}

type SumFn = typeof sum;
type SubtractFn = typeof subtract;

function performMathAction(cb: SumFn | SubtractFn, a: number, b: number) {
  console.log(cb(a, b));
}

let result = performMathAction(subtract, 23, 10);
// of course this is a bad example because performMathAction now expects a function and both a and b
// as separated arguments.
// so we cant assign a value dynamically to the callback operation,
// since it would return a number. And performMathAction is expecting a function and the two parameters
// as separated arguments...
// This is to ilustrate the point of being able to type a callback based on the callback function
// itself, instead of going for the more generic approach that follows:
function performMathActionGenericApproach(
  cb: (a: number, b: number) => number,
  a: number,
  b: number
) {
  console.log(cb(a, b));
}
