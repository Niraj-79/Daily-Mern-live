// Addition (+)
console.log(1 + 2);         // Output: 3 (Number + Number)
console.log('Hi' + 'Sam');  // Output: "Hi Sam" (String + String)
console.log(5 + '5');       // Output: "55" (Number + String)
console.log(true + 'yes');  // Output: "trueyes" (Boolean + String)



// Subtraction (-)
console.log(10 - 5);        // Output: 5 (Number - Number)
console.log('10' - 5);      // Output: 5 (Number - String, "10" converted to 10)
console.log(10 - '5');      // Output: 5 (Number - String, "5" converted to 5)
console.log(true - 1);      // Output: 0 (Boolean - Number, true converted to 1)



// Multiplication (*)
console.log(2 * 3);         // Output: 6 (Number * Number)  
console.log('2' * 3);       // Output: 6 (String * Number, "2" converted to 2)
console.log(2 * '3');       // Output: 6 (Number * String, "3" converted to 3)
console.log(false * 10);    // Output: 0 (Boolean * Number, false converted to 0)


// Equality(==)
console.log(5 == '5');      // Output: true (String converted to Number)
console.log(true == 1);     // Output: true (Boolean converted to Number)
console.log(false == 0);    // Output: true (Boolean converted to Number)



// Strict Equality(===)
console.log(5 === '5');      // Output: false (Different type)
console.log(true === 1);     // Output: false (different type)
