// syntax
(function () {
  // function body
});

// Example as a callback
setTimeout(function () {
  console.log("This is anonymous");
}, 1000);

// Assigned to a variable
const add = function (a, b) {
  return a + b;
};
console.log(add(2, 3)); // Outputs: 5



// Example
let myFunction = function() {
  console.log('I am an anonymous function');
}
myFunction();

setTimeout(function() {
  console.log('delay 3sec: I am an anonymous function');
}, 3000);