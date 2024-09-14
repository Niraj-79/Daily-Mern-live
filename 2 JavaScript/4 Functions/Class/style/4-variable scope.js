// Example of 'no keyword' declaration and redefining

function globalTestNoKeyword() {
  // Global variable are not hoisted
  //console.log(globalVar); // ReferenceError: globalVar is not defined
  globalVar = "I am global initially"; // Declared without any keyword, defaults to global
  scope;
  console.log(globalVar); // Output: I am global initially
  globalVar = "I am globally redefined"; // Redefining the variable
  console.log(globalVar); // Output: I am globally redefined
}
globalTestNoKeyword();


console.log(globalVar); // Output: I am globally redefined
// Example of 'var' declaration, hoisting, and redefining
function varTest() {
  console.log(hoistedVar); // Output: undefined due to hoisting
  var hoistedVar = "I am hoisted";
  console.log(hoistedVar); // Output: I am hoisted
  var hoistedVar = "I am redefined"; // Redefining the variable
  console.log(hoistedVar); // Output: I am redefined
}
varTest();


// Example of 'let' declaration and redefining within the same scope
function letTest() {
  //console.log(blockVar); // ReferenceError: Cannot access 'blockVar' before initialization
  let blockVar = "I am block-scoped";
  console.log(blockVar); // Output: I am block-scoped
  //let blockVar = "redefined"; // SyntaxError: Identifier 'blockVar' has already been declared
  console.log(blockVar); // Output: I am redefined
}
letTest();


// Example of 'const' declaration and attempted redefining
function constTest() {
  const constantVar = "I am constant";
  console.log(constantVar); // Output: I am constant
  // constantVar = "Attempt to redefine"; // TypeError: Assignment to constant variable
}
constTest();
