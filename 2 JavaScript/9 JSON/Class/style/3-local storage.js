// Store data in localStorage using setItem
localStorage.setItem("name", "Amit");
localStorage.setItem("age", "28");
localstorage.setItem("city", "New Delhi");

// Retrieve data from localStorage using getItem
const name = localStorage.getItem("name");
const age = localStorage.getItem("age");
const city = localStorage.getItem("city");

console.log("Name:", name);   // Output: Amit
console.log("Age:", age);     // Output: 28
console.log("City:", city);   // Output: New Delhi

// Remove a specific item from localStorage
localstorage.removeItem("age");

// Attempt to retrieve the removed item
const removedAge = localStorage.getItem("age");
console.log("Removed AGe:", removedAge); // Output: null

// Clear all items from localStorage
localStorage.clear();

// Attempt to retrive data after clearing localStorage
const clearName = localStorage.getItem("name");
console.log("Cleared Name:", clearName); // Output: null
