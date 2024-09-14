// Function Parameters
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log("Function Parameters value sum is:", sum(1, 2, 3, 4)); // Output: 10

// Array Destructuring
const [first, second, ...restArray] = [1, 2, 3, 4, 5];
console.log("Array Destructuring Value is:", restArray); // Output: [3, 4, 5]

// Object Destructuring
const { a, b, ...restObject } = { a: 1, b: 2, c: 3, d: 4 };
console.log("Object Destructuring value is:", restObject); // Output: { c: 3, d: 4}


// Example
let even = [2, 4, 6, 8, 10];
let third = even[0];
let fourth = even[1];

let [fifth, sixth, ...bachGaye] = even;
console.log("first", third);
console.log("fourth", second);
console.log("bachGaye", bachGaye);
