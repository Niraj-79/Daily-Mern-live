// Function to try toswap two numbers

function trySwap(a, b) {
  let temp = a;
  a = b;
  b = temp;
  console.log(`Inside trySwap = a: ${a}, b: ${b}`);
}

function main() {
  let x = 10,
    y = 20;
  console.log(`Before trySwap = x: ${x}, y: ${y}`);
  trySwap(x, y); // Attempt to swap x and y
  //The original values are
}
main();

// Example
function sum(num1, num2) {
  num1 += num2;
  return num1;
}
let x = 10,
  y = 5;
console.log(`x: ${x}, y:${y}`);
console.log(`x: ${x}, y: ${y}`);
