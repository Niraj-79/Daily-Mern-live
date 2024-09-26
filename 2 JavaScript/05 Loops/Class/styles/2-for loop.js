console.log(`for (initialisation; condition; update) {
  // body for the loop
}`);
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Outpur: 0, 1, 2, 3, 4

// example
console.log("example");
let num = prompt("Enter the number for which table has to be genrated:");
function getMultliPlication() {
  // let i = 1  //initialisation;
  // i <= 10;   // condition;
  // i++        // update
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} X ${i} = ${num * i}`);
  }
}
getMultliPlication();
