// Using JSON
console.log("Using JSON");
function jsonEqual(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}
const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2 };
console.log(jsonEqual(obj1, obj2)); // Output: true
