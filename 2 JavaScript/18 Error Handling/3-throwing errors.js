console.log("Error Handling (Throwing Errors)");

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

try {
  console.log(divide(4, 0));
} catch (error) {
  console.error(error.message); // Division by zero is not allowed
}

// Example
console.log("Example");

function division(a, b) {
  if (b === 0) {
    throw new Error("Divisde by zero");
  }
  return a / b;
}

console.log(division(6, 3));
try {
  console.log(division(3, 0));
} catch (error) {
  console.log("Error occured");
  console.log(error.message);
}
console.log(division(3, 6));
