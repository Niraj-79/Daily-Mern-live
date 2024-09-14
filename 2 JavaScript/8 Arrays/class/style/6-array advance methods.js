console.log('Array Arrow Functions');
const numbers = [1, 2, 3, 4, 5];

// Create a new array with each number doubled
const doubled = numbers.map((num) => num * 2);
console.log("Doubled:", doubled); // Output: [2, 4, 6, 8, 10]

// Filter the array to includ only even numbers
const evens = numbers.filter((num) => num % 2 == 0);
console.log("Evens:", evens); // Output: [2, 4]

// Calculate the sum of all numbrs
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log("Sum:", sum); // Output: 15



console.log("Array non-Arrow Functions");
let arr = [1, 12, 45, 11, 9, 8, 0];

let newArr = arr.map(function (item) {
  return item * item;
});

let thirdArr = newArr.filter(function (item) {
  return item % 2 === 0;
});

let fourthArr = arr.reduce(function(item) {
  return item + item;
})
console.log("Your arr Value is:", arr);
console.log("Your newArr Value is:", newArr);
console.log("Your thirdArr value is:", thirdArr);
console.log("Your fourthArr value is:", fourthArr);
