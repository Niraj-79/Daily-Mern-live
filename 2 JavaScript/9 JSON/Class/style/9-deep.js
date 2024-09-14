function deepEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true; // Same reference or both null
  }

  if (
    typeof obj1 !== "object" ||
    obj1 === null ||
    typeof obj2 !== "object" ||
    obj2 === null
  ) {
    return false;
  }
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false; // Different number of poperties
  }
  for (let key of keys1) {
    if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
      return false;
    }
  }
  return true;
}

const objD = { a: 1, b: { c: 3 } };
const objE = { a: 1, b: { c: 3 } };
const objF = { a: 1, b: { c: 4 } };

console.log(deepEqual(objD, objE)); // Output: true
console.log(deepEqual(objD, objF)); // Output: false
