// String Conversion
let num = 10;
let str = "The number is " + num;
console.log(str); // Output: "The number is 10"

console.log("Hi" + 44); // Output: Hi44
console.log("66" + 44); // Output: 6644


// Number Conversion
let strNum = "15";
let result = strNum - 5;
console.log(result); // Output: 10

console.log("Hi" - 44); // Output: Nan
console.log("66" - 44); // Output: 22


// Boolean Conversion
let boolValue = true;
let numberValue = 1;
console.log(boolValue == numberValue); // Output: true
// true is converted to 1 before comparison

console.log(true == 1); // Output: true
console.log(true == 2); // Output: false
