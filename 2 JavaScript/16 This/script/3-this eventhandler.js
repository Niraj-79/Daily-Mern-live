console.log("this Keyword (Event Handler)");

document.getElementById("myButton").addEventListener("click", function () {
  console.log(this.id); // Output: myButton
});

// Example
let container = document.getElementById("container");
let button1 = document.getElementById("button1");
let button2 = document.getElementById("button2");
let button3 = document.getElementById("button3");

//// first
// container.addEventListener("click", function () {
//   console.log(this.id);
// });
// button1.addEventListener("click", function () {
//   console.log(this.id);
// });

// // second
// function handleClick() {
//   console.log(this.id);
// }
// container.addEventListener("click", handleClick);
// button1.addEventListener("click", handleClick);
// button2.addEventListener("click", handleClick);
// button3.addEventListener("click", handleClick);

//// third
// function handleClick() {
//   console.log(this.id);
// }
// handleClick();
// container.addEventListener("click", handleClick);
// button1.addEventListener("click", handleClick);
// button2.addEventListener("click", handleClick);
// button3.addEventListener("click", handleClick);

// // fourth
// function handleClick() {
//   console.log(this);
// }
// handleClick();
// container.addEventListener("click", handleClick);
// button1.addEventListener("click", handleClick);
// button2.addEventListener("click", handleClick);
// button3.addEventListener("click", handleClick);

// // fifth
// function handleClick() {
//   console.log(this.id);
// }
// handleClick();
// container.addEventListener("click", handleClick);
// button1.addEventListener("click", handleClick);
// button2.addEventListener("click", handleClick);
// button3.addEventListener("click", handleClick);

// // sixth
// function handleClick() {
//   console.log(this.id);
//   this.style.color = "white";
//   this.style.backgroundColor = "blue";
// }
// container.addEventListener("click", handleClick);
// button1.addEventListener("click", handleClick);
// button2.addEventListener("click", handleClick);
// button3.addEventListener("click", handleClick);
