// Define a callback function
function gretting(name) {
  console.log("Hello " + name);
}

// Define a function tha takes a callback
function processUserInput(callback) {
  var name = prompt("Please enter your name: ");
  callback(name);
}
// Call the function with the callback
processUserInput(gretting);



// Example
console.log('Example second')
function hello(name) {
  console.log("Hello " + name);
}

function capitalize(name) {
  let upper = name.toUpperCase();
  console.log(upper);
}

function processUserInput(process) {
  let studentName = prompt("Enter your name: ");
  process(studentName);
}
processUserInput(hello);
processUserInput(capitalize);
