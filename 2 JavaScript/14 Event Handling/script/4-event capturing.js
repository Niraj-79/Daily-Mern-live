console.log("Event Propagation (Capturing)");

// // JavaScript
// const outerDiv = document.getElementById("outerDiv");
// const innerButton = document.getElementById("innerButton");

// outerDiv.addEventListener("click", () => {
//   console.log("Outer DIV clicked (capturing).");
// });

// innerButton.addEventListener("click", () => {
//   console.log("Inner Button clicked.");
// }, true // Enable capturing phase
// );

// // Clicking the button will log;
// // "Outer DIV clicked (capturing)."
// // "Inner Button clicked."




// Exmample
const outer = document.querySelector(".outer");
const inner = document.querySelector(".inner");

outer.addEventListener("click", () => {
  console.log("outer");
}, true );

// first method
inner.addEventListener("click", (event) => {
  console.log("inner");
  event.stopPropagation();
});
