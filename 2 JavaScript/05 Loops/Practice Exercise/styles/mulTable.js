console.log(
  `1. Develop a program using while that prints the multiplication table for a given number`
);

let num = prompt("Enter the number for which table has to be genrated:");
function getMultliPlication() {
  let i = 1; // initialization
  while (i <= 10) {
    // condition
    console.log(`${num} X ${i} = ${num * i}`);
    i++; // update
  }
}
getMultliPlication();


