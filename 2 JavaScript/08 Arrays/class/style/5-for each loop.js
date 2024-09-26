// Example 1
let foods = ["bread", "rice", "meat", "pizza"];
foods.forEach(function (food) {
  console.log("Your Value is:", food);
});

// Example 2
console.log("Example 2");
let arr = [1, 12, 45, 11, 9, 8, 0];
arr.forEach(function (item) {
  console.log("Your forEach Value is :", item);
});

// Example 3
console.log("Example 3");
arr = [1, 12, 45, 11, 9, 8, 0];
arr.forEach(function (item, i) {
  console.log("Your forEach Value is :", item, "Array Value define is:", i);
});

// Example 4
console.log("Example 4 & Return Statement");
arr.forEach(function (item, i) {
  if (i === 2) return;
  console.log("Your Return Value is:", item, i);
});

// Example 5
console.log("Example 5 & Return Statement");
function tempPrintval(val) {
  if (val % 2 === 0) {
    console.log("Inside condition");
    return;
  }
  console.log(val);
}

for (let i = 1; i < 10; i++) {
  tempPrintval(i);
}
