let another, num;
do {
  num = parseInt(prompt("Enter a number: "), 10);
  console.log(`Square of ${num} is ${num * num}`);
  another = prompt("Want to enter another (y/n? ");
} while (another === 'y');