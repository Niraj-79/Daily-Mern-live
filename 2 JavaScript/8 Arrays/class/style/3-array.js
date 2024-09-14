const fruits = ["Apple", "Banana", "Cherry"];
// Using while loop
console.log("Using while loop:");
let i = 0;
while (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}

// Using a for loop
console.log("Using for loop:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Example
console.log("Define Prime Number:");
let primeNumbers = [2, 3, 5, 7, 11, 13, 17, 19, 23];
console.log(`Your first Prime Number is: ${primeNumbers[0]}`);
console.log(`Your second Prime Number is: ${primeNumbers[1]}`);
console.log(`Your third Prime Number is: ${primeNumbers[2]}`);
console.log(`Your fourth Prime Number is: ${primeNumbers[3]}`);

let myIndex = 5; // Please change value and go to console.
console.log("Prime Number is:", primeNumbers[myIndex]);

// console.log("MyNumber is first Prime Number");
// let a = 0;
// while (i < 9) {
//   console.log("MyNumber is:", primeNumbers[i]);
//   i++;
// }

console.log("MyNumber is second Prime Number");
while (i < primeNumbers.length) {
  console.log("MyNumber is:", primeNumbers[i]);
  i++;
}
