// with this exclusive operator, we can get the value of the keys of a specific object:
type User = { name: string; age: number };
type UserKeys = keyof User;

let validKey: UserKeys;
validKey = "name";
validKey = "age";
// of course this example is not realistic.

// the benefit comes for example when you want to create an utility function that extracts the
// value of a determined property of an object:
function getProp<T extends object, T2 extends keyof T>(obj: T, key: T2) {
  // This function uses generics to enforce type safety when accessing a property of an object.
  // - T is a generic type that must be an object.
  // - T2 is constrained to be one of the keys of T (i.e., keyof T).
  // The function takes an object (obj) and a key (key), and safely returns the value at that key.
  // If the value is undefined or null, it throws an error.

  const value = obj[key];

  if (value === undefined || value === null) {
    throw new Error("Accessing undefined or null value.");
  }

  return value;
}

const user: User = { name: "Leo", age: 27 };

const val = getProp(user, "age"); // : number

// you can now use the getProp function on any object

const dataObject = {
  id: 23458,
  value: "Superduper",
  isActive: true,
  nullProp: null,
  consumers: ["1", "2", "3", "4"],
  whoAmI() {
    console.log(this.id);
  },
};

const dataObjectRandomValue = +getProp(dataObject, "consumers")[1];
console.log(dataObjectRandomValue, val);
