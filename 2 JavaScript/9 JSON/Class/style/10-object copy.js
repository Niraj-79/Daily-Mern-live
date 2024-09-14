// Shallow copy using Spread operator
console.log('Shallow copy using Spread operator')
const original = { a: 1, b: 2 };
const copy = { ...original };

copy.a = 3; // Modify the 'a' property in the copy

console.log(original); // Outpur: {a: 1, b: 2}
console.log(copy); //Output: {a: 3, b: 2};

// Example Shallow Copy Operator
let obj = {
  a: 45,
  b: 65,
  c: "Hello",
};
console.log(obj);

let objCopy = obj;
objCopy.a = 100;
console.log(obj);




// Deep Copy using JSON serialization
console.log('Deep Copy using JSON serialization')
const origina = { a: 1, b: { c: 2 } };
const deepCopy = JSON.parse(JSON.stringify(origina));

console.log(deepCopy); // Output: {Output: {a: 1, b: { c: 2 }}

// Example
let newObj = {
  d: 45,
  e: 65,
  f: "Hello",
};
console.log("obj", newObj);
let objCopy1 = copyMyObject(newObj);
console.log("Obj Copy", objCopy1);
objCopy1.g = 100;

console.log("obj", newObj);
console.log("Obj Copy", objCopy1);

function copyMyObject(newObj) {
  let obj2 = newObj;
  return obj2;

  // let objString = JSON.stringify(newObj);
  // let obj2 = JSON.parse(objString);
  // return obj2;
}




// Deep copy Using Recursion
console.log('Deep copy Using Recursion')
function deepCopyTwo(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }
  const copy = Array.isArray(obj) ? [] : {};
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopyTwo(obj[key]);
    }
  }
  return copy;
}

const originalTwo = { a: 1, b: { c: 2 } };
const deepCopyObj = deepCopyTwo(originalTwo);
console.log(deepCopyObj); // Output: { a: 1, b: { c: 2 }}
