// Create a new Date object for the current date and time
const currentDate = new Date();
console.log(currentDate);

// Get the current timestamp in milliseconds since January 1, 1970
console.log("Current Time (ms since 1970):", currentDate.getTime());

// Get the current day of the week (0 = sunday, ..., 6 = Saturday)
console.log("Day of the week:", currentDate.getDate());

// Get the current year
console.log("Current Year:", currentDate.getFullYear());

// Get the current month (0 = january, ..., 11 = December)
console.log("Current Month:", currentDate.getMonth());

// Create a specific date (e.g., December 25, 2024)
const specificDate = new Date("2024-12-25");
console.log(specificDate);

// Log the specific date
console.log("Specific Date:", specificDate.toDateString());
