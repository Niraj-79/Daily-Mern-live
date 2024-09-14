console.log('Event Listeners');
// JavaScript 
const button = document.getElementById('myButton');
function handleClick() {
  alert('Button Clicked!');
}

// Attach event listner
button.addEventListener('click', handleClick);

// Remove event listner
button.removeEventListener('click', handleClick);




// Example 1
// Click Me! Button
let clickMeButton = () => {
  console.log("Click Me! Button was clicked");
};

// My Button
let clickHandler = () => {
  console.log("My Button Was clicked");
};

let buttonClickHandler = () => {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
};
let myButton = document.getElementById("myButton");
// // Using Event Handler
// button.onclick = buttonClickHandler;
// button.onclick = clickHandler;


// Using event listner
button.addEventListener("click", clickHandler);
button.addEventListener("click", buttonClickHandler);


// // Using remove Event Listner
// button.addEventListener("click", clickHandler);
// button.addEventListener("click", clickHandler);
// button.addEventListener("click", buttonClickHandler);
// button.removeEventListener("click", clickHandler);
