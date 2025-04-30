type Operations = {
  add: (a: number, b: number) => number;
  subtract: (a: number, b: number) => number;
};

type Results<T> = {
  [Key in keyof T]: number;
};

let mathOperations: Operations = {
  add(a: number, b: number) {
    return a + b;
  },
  subtract(a: number, b: number) {
    return a - b;
  },
};

let exampleOperations: Results<Operations> = {
  add: mathOperations.add(1, 3),
  subtract: mathOperations.subtract(1, 3),
};

console.log(exampleOperations);
