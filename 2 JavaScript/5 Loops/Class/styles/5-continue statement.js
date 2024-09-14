for (let i = 0; i < 10; i++) {
  if (i === 5) {
    continue; // Skip the iternation when i is 5
  }
  console.log(i);
}
// Outpur: 0, 1, 2, 3, 4, 6, 7, 8, 9

// example 1
console.log(`Example: Break and Continue`);
for (let i = 0; i < 50; i++) {
  if (i % 2 === 0) {
    continue;
  }
  if (i % 17 === 0) {
    break;
  }
  console.log(i);
}

// example 2
console.log(`Example: Break and Continue`);
for (let i = 0; i < 50; i++) {
  if (i % 2 === 0) {
    continue;
  }
  if (i % 18 === 0) {
    break;
  }
  console.log(i);
}
