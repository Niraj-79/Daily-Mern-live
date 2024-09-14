console.log('Event Propagation (Stopping Propagation)');

// // JavaScript
// innerButton.addEventListener('click', (event) => {
//   console.log('Inner Button clicked.');
//   event.stopPropagation(); // Stop the event from bubbling up
// });

// outerDiv.addEventListener('click', () => {
//   console.log('Outer DIV clicked.');
// });

// // Clicking the button will log only:
// // "Inner Button clicked."



// Exmample
const outer = document.querySelector(".outer");
const inner = document.querySelector(".inner");

outer.addEventListener("click", () => {
  console.log("outer");
});

// first method
inner.addEventListener("click", (event) => {
  console.log("inner");
  event.stopPropagation();
});

// // second method
// function clickHandler(event) {
//   console.log("clicked second method by inner");
//   event.stopPropagation();
// }
// inner.addEventListener('click', clickHandler);
