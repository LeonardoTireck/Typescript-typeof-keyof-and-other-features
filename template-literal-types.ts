type ReadPermissions = "no-read" | "read";
type WritePermissions = "no-write" | "write";

type FilePermissions = `${ReadPermissions}-${WritePermissions}`;
// this forces TS to create a new string literal type (union)
// if you hover over FilePermissions you'll see:
// no-read-no-write | "no-read-write" | "read-no-write" | "read-write"
// which is the combination with no repetition of the ReadPermissions type and the WritePermissions type

// now lets say if you want to automatically create an event name (a method) for each property of the DataFile type

type DataFile = {
  data: string;
  permissions: FilePermissions;
};

// this is a template literal type that creates a union of string literals and adds "Changed" to each property name of the DataFile type
type DataFileEventNames = `${keyof DataFile}Changed`;

// now we can use this to create a type that has a method for each property of the DataFile type with the "Changed" suffix
type DataFileEvents = {
  [Key in DataFileEventNames]: () => void;
};

// now we can create a function that takes a DataFileEvents type and calls the method for each property of the DataFile type with the "Changed" suffix.
function triggerDataFileEvents(events: DataFileEvents) {
  let newData = events.dataChanged();
  let newPermissions = events.permissionsChanged();

  return { newData, newPermissions };
}
// this will return void because the methods in the DataFileEvents type return void.
