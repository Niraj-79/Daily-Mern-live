// // Fnction to swap two numbers using call by reference
// function trySwap(obj) {
//   let temp = obj.a;
//   obj.a = obj.b;
//   obj.b = temp;
//   console.log(`Inside trySwap - a; ${obj.a}, b: ${obj.b}`);
// }

// function main() {
//   let obj = { a: 10, b: 20 };
//   console.log(`Before trySwap - a: ${obj.a}, b: ${obj.b}`);
//   trySwap(obj); // Swap x and y using reference
//   console.log(`After trySwap - a: ${obj.a}, b: ${obj.b}`);
// }
// main();


// //
// function swap(a, b) {
//   console.log(`In Function: Before Swap a=${a}, b=${b}`);
//   var temp = a;
//   a = b;
//   b = temp;
//   console.log(`In Function: After Swap a=${a}, b=${b}`);
// }
// let x = 10;
// let y = 20;
// console.log(`Before swap x=${x}, y=${y}`);
// swap(x, y);
// console.log(`After Swap x=${x}, y=${y}`);


//
function swapObjects(p, q) {
  console.log(`In Function: Before Swap p=${p.myValue}, q=${q.myValue}`);
  var temp = p.myValue;
  p.myValue = q.myValue;
  q.myValue = temp;
  console.log(`In Function: After Swap p=${p.myValue}, q=${q.myValue}`);
}
let obj1 = { myValue: 10 };
let obj2 = { myValue: 20 };
console.log(`Before swap obj1=${obj1.myValue}, obj2=${obj2.myValue}`);
swapObjects(obj1, obj2);
console.log(`Before swap obj1=${obj1.myValue}, obj2=${obj2.myValue}`);
