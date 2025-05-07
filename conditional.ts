// particularly useful for builiding helper types
// let's say we're working with arrays.
// if we want to build a helper type that takes an array and returns the type of its elements
type StringArray = string[];
type ElementType = StringArray[number]; // string

let someArray: StringArray = ["a", "b", "c"];
let arrayElement: ElementType = someArray[2]; // "c" : string
// this is a good start but we can do better
// now lets say that we want to build a helper type that will work with all kinds of arrays and extract the type of its elements
// we can use conditional types to make it more generic

type GetElementType<T> = T extends any[] ? T[number] : never; // The extends here "asks" if the incoming T type is an array of any kind. And if it is, it will return the type of the specific element requested between the brackets, if it's not an array, it won't return.
// This is how you define a conditional type on TS
type Example1 = GetElementType<typeof someArray>;
let example1: Example1 = "Hello World";
// With this structure, we can pass the type of the elements of an array forward.

// another scenario in which this might be useful is for type checking the return value of a function based on its inputs:
type FullNamePerson = { firstName: string; lastName: string };

type FullNameOrNothing<T> = T extends FullNamePerson ? string : never;

function getFullName<T extends object>(person: T): FullNameOrNothing<T> {
  if (
    "firstName" in person &&
    "lastName" in person &&
    person.firstName &&
    person.lastName
  ) {
    return `${person.firstName} ${person.lastName}` as FullNameOrNothing<T>;
  }

  throw new Error("No first name and/or last name found.");
}

const name1 = getFullName({ firstName: "Leo", lastName: "Tireck" }); // this will return string type
console.log(name1);

const name2 = getFullName({ firstName: "Leo" }); // this will return the never type and will crash the app
