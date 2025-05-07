// The infer operator is useful when we want to get the type of a return inside a function:
function add(a: number, b: number) {
  return a + b;
}

type AddFn = typeof add;
let userNameExample: string = "Leonardo";
// this type gives me the entire function as a type, we just want the type of the returned value
// for that, we combine the conditional type with the infer operator:
type ReturnValueType<T> = T extends (...args: any[]) => infer RV ? RV : never;
// The above type says:
// "If T is a function type, infer the return value type (RV) and use that;
// otherwise, fall back to `never`."
type AddFnReturnValueType = ReturnValueType<AddFn>; // :number
type UserNameExample = ReturnValueType<typeof userNameExample>; // :never
