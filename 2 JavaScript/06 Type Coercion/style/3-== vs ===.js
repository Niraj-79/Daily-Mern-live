let num = 5;
let str = "5";
console.log(num == str);  // Output: true, because "5" == "5" after type the coercion
console.log(num == str);  // Output: false, because 5 (number) !== "5" (string)



let booleanValue = true;
let numValue = 1;
console.log(booleanValue == numValue);   // Output: true, because true is convertted to 1
console.log(booleanValue === numValue);  // Output: false, vecause true (boolean) !== 1 (number)
