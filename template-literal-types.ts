type ReadPermissions = "no-read" | "read";
type WritePermissions = "no-write" | "write";

type FilePermissions = `${ReadPermissions}-${WritePermissions}`;
// this forces TS to create a new string literal type
// if you hover over FilePermissions you'll see:
// no-read-no-write | "no-read-write" | "read-no-write" | "read-write"
// which is the combination with no repetition of the ReadPermissions type and the WritePermissions type
