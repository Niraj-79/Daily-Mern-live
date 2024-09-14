console.log("Class (ES6 Convention Define first method)");

// User constructor function
class User {
  constructor(name, age, email, isAdmin) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.isAdmin = isAdmin;

    // Method to updaate user's admin status
    this.makeUserAdmin = function () {
      this.isAdmin = true;
    };
  }
}





// Create user1 object using the User constructor
const user1 = new User("Prashant Jain", 32, "prashant@example.com", false);

// Create user2 object using the User constructor
const user2 = new User("Shiv", 19, "shiv@example.com", false);

// Make user1 an admin
user1.makeUserAdmin();

console.log("Class (ES6 Convention) Define second method");
// Define a class
class Animal {
  // Constructor method
  constructor(name) {
    this.name = name;
  }

  // Method
  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

// Create an instance of the class
const animal = new Animal("Dog");
animal.speak(); // Output: "Dog makes a noise."








// Example
class Students {
  constructor(name, age, course, roll) {
    this.name = name;
    this.age = age;
    this.course = course;
    this.roll = roll;
  }
  printName() {
    console.name(this.name);
  }
}

let student3 = new Students("Hari", 19, "It", 3);
let student4 = new Students("Gita", 20, "CSE", 4);

console.log(student3);
console.log(student4);
