type AppUser = {
  name: string;
  age: number;
  permissions: {
    id: string;
    title: string;
    description: string;
  }[]; // this is a notation that describes an array of objects. It's different from wrapping the object in an array because that would define a single object only.
};

// indexed access types are useful for extracting parts of a type into a new type
type Perms = AppUser["permissions"];
type Perm = Perms[number];
