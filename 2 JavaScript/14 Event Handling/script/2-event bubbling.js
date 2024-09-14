// console.log("Event Propagation (Bubbling)");

// // HTML;
// // <div id="outerDiv">
// // <button id="innerButton">Click Me</button>
// // </div>

// // JavaScript
// const outerDiv = document.getElementById("outerDiv");
// const innerButton = document.getElementById("innerButton");

// outerDiv.addEventListener("click", () => {
//   console.log("Outer DIV clicked (bubbling).");
// });

// innerButton.addEventListener("click", () => {
//   console.log("Inner Button Clicked.");
// });
// // Clicking the button will log:
// // "Inner Button Clicked."
// // "Outer DIV Clicked (bubbling)."


// Exmample
const outer = document.querySelector(".outer");
const inner = document.querySelector(".inner");

outer.addEventListener("click", () => {
  console.log("outer");
});

inner.addEventListener("click", () => {
  console.log("inner");
});
