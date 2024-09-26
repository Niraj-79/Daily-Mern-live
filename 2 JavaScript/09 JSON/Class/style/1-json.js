// // Define a javaScript object
// const person = {
//   name: "Amit",
//   age: 28,
//   city: "New Delhi",
//   skills: ["Javascript", "Node.js", "React"],
// };

// // Convert the javaScript object to a JSON string
// const jsonString = JSON.stringify(person);
// console.log("Json String:", jsonString);

// // Convert the JSON string back to a javaScript Object
// const jsonObject = JSON.parse(jsonString);
// console.log("JavaScript Object:", jsonObject);

// // Access properties from the parsed JavaScript Object
// console.log("Name:", jsonObject.name);
// console.log("Age:", jsonObject.age);
// console.log("City:", jsonObject.city);
// console.log("Skills:", jsonObject.skills.join(", "));



// Example
let user = {
  firstName: "Ram",
  lastName: "Sharma",
  age: 28,
  email: "ram@sharma.com",
  hobbies: ["Music", "Sports"],
};
console.log("User Value is:", user);

let userStr = JSON.stringify(user);
console.log("user String Value is: ", userStr);
console.log("user typeof value is:", typeof userStr);

let myStr =
  '{"firstName":"Shyam","lastName":"Komal","age":28,"rollNo":12,"email":"ram@sharma.com","hobbies":["Music","Sports"]}';
let newUser = JSON.parse(myStr);
console.log("Convert string to Object Value is:", newUser);
console.log("Convert String to Object single value is:", newUser.firstName);
console.log("Convert String to Object single value is:", newUser.lastName);
console.log("Convert String to Object single value is:", newUser.age);
console.log("Convert String to Object single value is:", newUser.rollNo);
console.log("Convert String to Object single value is:", newUser.email);
console.log("Convert String to Object single value is:", newUser.hobbies);

//
console.log('Second Method use.')
console.log("Convert String to Object single value is:", newUser["firstName"]);
console.log("Convert String to Object single value is:", newUser["lastName"]);
