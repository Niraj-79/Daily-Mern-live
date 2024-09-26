const fruits = ["Apple", "Banana", "Cherry"];
// Add elements to the end of the array using push
fruits.push("Date");
console.log("After push", fruits); // Output: ["Apple", "Banana", "Date"];

// Remove the last element using pop
const lastFruit = fruits.pop();
console.log("Popped fruit:", lastFruit); // Output: Date
console.log("After pop:", fruits); // Output: {"Apple", "Banana", "Cherry"}

// Add elements to the beginning using ushift
fruits.unshift("Elderberry");
console.log("After unshift:", fruits);
// Output: ["Elderberry", "Apple", "Banana", "Cherry"];

// Remove the first element using shift
const firstFruit = fruits.shift();
console.log("Shifted fruit:", firstFruit); // Outpupt: Elderberry
console.log("After shift:", fruits); // Output: ["Apple", "Banana", "Cherry"]


// Example
console.log("Different Methods of Array");
let arr = [3, 5, 6, 7, 9, 12, 36, 55, 79, 6];
let obj = {};
console.log("Your isArray Value is:", Array.isArray(arr));
console.log("Your isArray Value is:", Array.isArray(obj));

console.log("Your toString first Value is:", arr);
arr.push(15, 18);
console.log("Your toString second Value is", arr);
arr.pop();
console.log("Your toString third Value is", arr);
arr.sort();
console.log("Your toString fourth Value is", arr);




const numbers = [1, 2, 3, 4, 5];
// Find the first element greater than 3
const firstGreaterThanThree = numbers.find((num) => num > 3);
console.log("First number greater than 3:", firstGreaterThanThree);

// Find the index of the number 3;
const index = numbers.indexOf(3);
console.log("Index of 3:", index); // Output: 2;






