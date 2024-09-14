console.log("Using Constructors");
// function User(name, age, email, isAdmin) {
//   this.name = name;
//   this.age = age;
//   this.email = email;
//   this.isAdmin = isAdmin;

//   // Method to update user's admin status
//   this.makeUserAdmin = function () {
//     this.isAdmin = true;
//   };
// }

// // Create user1 object using the User constructor
// const user1 = new User("Prashant Jain", 32, "prashant@example.com", false);

// // Create user2 object using the user constructor
// const user2 = new User("Shiv", 19, "shiv@example.com", false);

// // Make user 1 an admin
// user1.makeUserAdmin();





// Example
let student1 = {
  name: "Rohan",
  age: 12,
  course: "MERN",
  roll: 155,
  printName() {
    console.log(this.name);
  },
};

let student2 = {
  name: "Shyam",
  age: 18,
  course: "CSE",
  roll: 2,
};

function Students(name, age, course, roll) {
  this.name = name;
  this.age = age;
  this.course = course;
  this.roll = roll;

  this.printName = function () {
    console.log(this.name);
  };
}

let student3 = new Students("Hari", 19, "It", 3);
let student4 = new Students("Gita", 20, "CSE", 4);

console.log(student1);
console.log(student2);
console.log(student3);
console.log(student4);

student1.printName();
//student2.printName();
student3.printName();
student4.printName();
