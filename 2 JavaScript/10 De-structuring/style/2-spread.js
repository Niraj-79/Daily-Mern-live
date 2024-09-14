let even = [2, 4, 6, 8, 10, 86];
console.log("First Even Numbers: ", even);

let newEven = [0, ...even, 14];

newEven.push(12);
console.log("Second Even Numbers: ", even);
console.log("Third Even Numbers: ", newEven);
console.log("Even Number length is: ", newEven.length);

let obj = {
  a: 45,
  x: 98,
  hello: "world",
  z: {
    name: "Zain",
    age: 22,
  },
};
let newObj = { ...obj };
console.log("First obj number is: ", JSON.stringify(obj));
console.log("new obj number is: ", JSON.stringify(newObj));

newObj.x = 100;
newObj.z.name = "Ali";

console.log("First obj update number is: ", JSON.stringify(obj));
console.log("new obj update number is: ", JSON.stringify(newObj));

// Array Expansion
const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // Output: [1, 2, 3]
// [1, 2, 3, 4, 5]
const arr3 = [...arr1, 4, 5];

// Object Expansion
const obj1 = { a: 1, b: 2 };
// Output: {a: 1, b: 2, c: 3}
const obj2 = { ...obj1, c: 3 };

// Function Arguments
function sum(a, b, c) {
  return a + b + c;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers));
// Output: 6
 