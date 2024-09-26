console.log("Object Equality");
let a = { firstName: "Raju" };
let b = a;
let c = { firstName: "Raju" };

console.log(a == b); // Output: true
console.log(a === b); // Output: true
console.log(a == c); // Output: false
console.log(a === c); // Output: false

let student = {
  firstName: "Raju",
  lastName: "Kumar",
  age: 20,
  address: {
    houseNo: 10,
    road: "MG Road",
    city: "Bangalore",
    state: "Karnatak",
  },
  subjects: ["Maths", "Science", "English"],
  fessPaid: true,
};

let student2 = {
  firstName: "Mohan",
  lastName: "Rajpal",
  age: 25,
  address: {
    houseNo: 10,
    road: "Main Road",
    city: "Industrial area phase 2",
    state: "Chandigarh",
  },
  subjects: ["Maths", "Science", "English"],
  fessPaid: true,
};

student.friends = [student2];
console.log(JSON.stringify(student));

// Shallow Comparison
console.log(Object.keys(student));
