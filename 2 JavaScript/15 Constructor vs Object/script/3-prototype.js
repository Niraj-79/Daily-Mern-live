// Using constructor function
function User(name, age, email, isAdmin) {
  this.name = name;
  this.age = age;
  this.email = email;
  this.isAdmin = isAdmin;
}

// Method to update user's admin status using prototype
User.prototype.makeUserAdmin = function () {
  this.isAdmin = true;
};

// Create user1 object using the User constructor
const user1 = new User("Prashant Jain", 32, "prashant@example.com", false);

// Create user2 object using the user constructor
const user2 = new User("Shiv", 19, "shiv@example.com", false);

// Make user 1 an admin
user1.makeUserAdmin();
