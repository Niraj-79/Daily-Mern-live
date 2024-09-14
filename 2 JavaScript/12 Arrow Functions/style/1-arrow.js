// Normal Function
function add1(first, second) {
  return first + second;
}
console.log("Normal Function:", add1(4, 6));

// Anonymous function
const add2 = function(first, second) {
  return first + second;
}
console.log("Anonymous function:", add2(4, 9));


// Arrow Function
const add3 = (first, second) => {
  return first + second;
};
console.log("Arrow Function:", add3(8, 9));

const square = (num) => {
  return num * num;
};
console.log("5 square value is:", square(5));

const square1 = (num) => num * num;
console.log("6 square value is:" ,square1(6));

// Application with Array
console.log('Application with Array Exmple');
const numbers1 = [2, 4, 6, 8, 10];
let squares = numbers1.map(function (num) {
  return num * num;
});
let squares1 = numbers1.map((num) => num * num);





//Arrow Functions
console.log('Arrow Functions Example')
let sum = function (num1, num2) {
  return num1 + num2;
};
let Sum1 = (num1, num2) => {
  return num1 + num2;
};
let Sum2 = (num1, num2) => num1 + num2;
let Square = (num) => num * num;


//Arrow Functions (Anonymous & Arrow Callbacks Example)
console.log('Arrow Functions (Anonymous & Arrow Callbacks)')

const numbers = [1, 2, 3, 4];

// Callback function without arrow func tion
function double(num) {
  return num * 2;
}

// Using map with a regular function
const doubled = numbers.map(double);

console.log('Double with regular:', doubled);
// Output: [2, 4, 6, 8]

// Using map with an arrow function
const doubleArrow = numbers.map((num) => num * 2);

console.log('Doubled with arrow:', doubleArrow);
// Output: [2, 4, 6, 8];

