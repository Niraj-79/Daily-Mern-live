//
console.log("Call By Value");
let c = 10;
let d = c;
console.log(`C=${c}, d=${d}`);
c = 15;
console.log(`C=${c}, d=${d}`);

//
console.log(`Call By Reference`);
let x = { myValue: 10 };
let y = x;
let z = { myValue: 15 };
console.log(`x=${x.myValue}, y=${y.myValue}`);
x.myValue = 15;
console.log(`X=${x.myValue}, y=${y.myValue}`);

console.log(x == y);
console.log(z == y);
console.log(z === y);
