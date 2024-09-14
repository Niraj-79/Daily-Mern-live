console.log("Without Constructors");

// User object with properties
const user1 = {
  name: "Prashant Jain",
  age: 32,
  email: "Prashant@example.com",
  idAdmin: false,
};

const user2 = {
  name: "Shiv",
  age: 19,
  email: "shiva@example.com",
  isAdmin: false,
};

// Function to update user's admin status
function makeUserAdmin(user) {
  user.isAdmin = true;
}
makeUserAdmin(user1); // Make user an admin

// // Example
// let student1 = {
//   name: "Rohan",
//   age: 12,
//   course: "MERN",
//   roll: 155,
//   printName() {
//     console.log(this.name);
//   },
// };

// let student2 = {
//   name: "Shyam",
//   age: 18,
//   course: "CSE",
//   roll: 2,
// };

// function Students(name, age, course, roll) {
//   this.name = name;
//   this.age = age;
//   this.course = course;
//   this.roll = roll;
// }

// let student3 = new Students("Hari", 19, "It", 3);
// let student4 = new Students("Gita", 20, "CSE", 4);

// console.log(student1);
// console.log(student2);
// console.log(student3);
// console.log(student4);

// student1.printName();
// //student2.printName();
