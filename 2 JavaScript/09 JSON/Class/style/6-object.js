const obj1 = { a: 1 };
const obj2 = { a: 1 };
const obj3 = obj1;

console.log(obj1 == obj2); // Output: false (different instances)
console.log(obj1 == obj3); // Output: true (same instance)

console.log(obj1 === obj2); // Output: false (different instance)
console.log(obj1 === obj3); // Outpu: true (same instance)
