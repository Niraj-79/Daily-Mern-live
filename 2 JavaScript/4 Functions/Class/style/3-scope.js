// var
function learningVar() {
  console.log("Learning Var");
  console.log("x:", x);
  var x = 10;
  console.log("x:", x);
}
//learningVar();

// let
function learningLet() {
  console.log("y:", y);
  let y = 5;
  console.log("y:", y);
}
//learningLet();

// const
function learningConst() {
  console.log("a:", a);
  const a = 5;
  console.log("a:", a);
}
//learningConst();

// global
function testGlobal() {
  global = 22;
  console.log("global:", global);
  global = 44;
  console.log("global:", global);
}
testGlobal();
console.log("global:", global);

// var example
function testVar() {
  var pop = 88;
  console.log("pop:", pop);
  var pop = 99;
  console.log("pop:", pop);
}
testVar();
console.log("pop:", pop);
