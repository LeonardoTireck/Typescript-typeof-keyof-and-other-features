type Operations = {
  readonly add: (a: number, b: number) => number;
  readonly subtract: (a: number, b: number) => number;
};

type Results<T> = {
  -readonly [Key in keyof T]?: number; // if you add a question mark before the column, you'd make all the properties optional
  // the readonly flag tells that the properties cannot be changed after
};

let mathOperations: Operations = {
  add(a: number, b: number) {
    return a + b;
  },
  subtract(a: number, b: number) {
    return a - b;
  },
};

let mathResults: Results<Operations> = {
  add: mathOperations.add(1, 3),
  // subtract: mathOperations.subtract(1, 3),
  // as seen above, we can only comment the subtract line because of the question mark before the column when mapping the Keys in the Results<T> type
};

// the same could be done in the type Operations, before the column on the add/subtract methods.

// if you want the opposite behavior, you can add a minus (-) before the question mark, which would make the property/method required. If you flag the Operation methods with the question mark, but the Results mapped types with the -?, you'd essentially override and make it required.
// the same could be done with the readonly flag. If you add a minus (-) before it in the Results type, it would "erase" that flag.
mathResults.add = 10; // this would not be possible without the - flag
console.log(mathResults);
