// Closures (Lexical Scoping)
console.log("Closures (Lexical Scoping)");

var age = 21;
function init() {
  var name = "Mozilla";

  function displayName() {
    console.log("Your Name is:", name);
    console.log("Your Name is:", age);
  }
  displayName();
}
init();

// Closures (Closure Creation)
console.log("Closures (Closure Creation)");

function outerFunction() {
  const outerVariable = "I am outside!";
  function innerFunction() {
    console.log(outerVariable); //Accesses outerVariable from outerFunction's scope
  }
  return innerFunction;
}
const closureFunction = outerFunction();
closureFunction(); // Output: "I am outside!"

// Closures (Maintaining State)
console.log("Closures (Maintaining State)");

function makeCounter() {
  let count = 0; // Private variable
  return function () {
    count += 1;
    return count;
  };
}
const counter = makeCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3


// Example 2
console.log("Example");

let first = 56;
let outer = (outerArg) => {
  const outerConst = 3.14;

  let inner = (innerArg) => {
    const innerConst = 2.71;
    console.log(`First: ${first}`);
    console.log(`outerArg: ${outerArg}`);
    console.log(`outerConst: ${outerConst}`);
    console.log(`InnerArg: ${innerArg}`);
    console.log(`InnerConst: ${innerConst}`);
  };
  console.log(`Outer first: ${first}`);
  console.log(`Outer OuterArg: ${outerArg}`);
  console.log(`Outer outerConst; ${outerConst}`);
  return inner;
};
outer(78)(90);


// Example 2
console.log("Example 2");

let createCounter = () => {
  let count = 0;
  return () => ++count;
};

// let createCounter0 = () => {
//   let count = 0;
//   return function () {
//     return ++count;
//   };
// };

let counter1 = createCounter();
console.log(counter1()); // Output: 1
console.log(counter1()); // Output: 2
console.log(counter1()); // Output: 3

let counter3 = createCounter();
console.log(counter3()); // Output: 1
console.log(counter3()); // Output: 2
console.log(counter3()); // Output: 3
console.log(counter3()); // Output: 4
