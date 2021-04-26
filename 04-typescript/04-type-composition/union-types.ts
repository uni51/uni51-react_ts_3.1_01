// type A = {
//   foo: number;
//   bar?: string;
// };

// type B = { foo: string };
// type C = { bar: string };
// type D = { baz: boolean };

// type AorB = A | B; // { foo: number | string; bar?: string }
// type AorC = A | C; // { foo: number; bar?: string } or { bar: string }
// type AorD = A | D; // { foo: number; bar?: string } or { baz: boolean }