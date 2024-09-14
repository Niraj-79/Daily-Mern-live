console.log("Using Async");
// Using async
async function myFunction() {
  return "Hello";
}


// Example 1
console.log("Example 1 & Method 1");
function hello() {
  return "Hello world";
}
let str = hello();
console.log(str);
console.log(typeof str);


// Example 2
console.log("Example 2 & Method 2");
function namaste() {
  return new Promise((resolve, reject) => {
    resolve("Namaste");
  });
}
let str1 = namaste();
console.log(str1);


// Example 3
console.log("Example 3 & Method 3");
async function ola() {
  return "Ola Mundo";
}
let str2 = ola();
console.log(str2);
console.log(typeof str2);
str2.then((data) => console.log(data));
