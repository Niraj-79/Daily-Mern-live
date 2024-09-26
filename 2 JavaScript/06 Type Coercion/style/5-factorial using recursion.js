function factorial(n) {
  // Base case: factorial of 0 is 1
  if (n === 0) {
    return 1;
  }
  // Recursive case: n! = n * (n-1 )!
  return n * factorial(n - 1);
}
// Example Use:
console.log(factorial(5)); // Output: 120
console.log(factorial(0)); // Output: 1
console.log(factorial(3)); // Output: 6
console.log(factorial(4)); // Output: 24




// Example Iterative Factorial
console.log("Example Iterative Factorial");
function getFactorialIterative(num) {
  console.log("getfactorial called");  // Please check browser console
  let i = 1;
  let result = 1;
  while (i <= num) {
    result *= i;
    i++;
  }
  return result;
}
console.log(getFactorialIterative(5)); // Output: 120

// Example Recursion Factorial
console.log("Example Recursion Factorial");
function getFactorial(num) {
  console.log(`getfactorial called ${num}`);   // Please check browser console
  if (num == 1 || 0) return 1;
  let fact = getFactorial(num - 1);
  return num * fact;
}
console.log(getFactorial(5)); // Output: 120
