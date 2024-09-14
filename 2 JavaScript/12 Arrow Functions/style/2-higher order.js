// Functions that return a function
// first method
const creatDouble = () => {
  function double(num) {
    return num * 2;
  }
  return double;
};
const twice = creatDouble();
console.log("Your Twice one value is", twice(5));
// Output: 8

// second method
const creatDouble1 = () => {
  return (num) => num * 2;
};
const twice2 = creatDouble();
console.log("Your Value is:", creatDouble1()(4));
console.log("Your Twice Two Value is:", creatDouble1()(4));
// Output: 8




// Higher-Order Fun (Function as Argument)
const numbers = [1, 2, 3, 4, 5];
// Using map, a higher-order function
const doubled = numbers.map((num) => num * 2);
console.log("Your Numbers Value is:", doubled);
// Output: [2, 4, 6, 8, 10]

//Higher-Order Functions (Return Functions)
function creatAdder(x) {
  return function(y) {
    return x + y;
  };
}
const addFive = creatAdder(5);
console.log("Your addFive value is:",addFive(10)); // Output: 15
