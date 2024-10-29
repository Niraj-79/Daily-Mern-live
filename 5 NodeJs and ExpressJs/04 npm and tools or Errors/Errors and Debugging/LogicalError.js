let x = 5;
if ((x = 10)) {
  // Assignment instead of comparison
  console.log("x is 10"); // Incorrectly prints this
}

let arr = [1, 2, 3, 4, 5];
for (let i = 0; i <= arr.length; i++) {
  console.log(arr[i]); // Prints undefined at the end of the loop
}

let num = "10";
console.log(num + 5); // Expected result : 15, prints 105
