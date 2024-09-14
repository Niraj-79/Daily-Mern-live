console.log("Using Local Storage");

let userInfoStr = localStorage.getItem("userInfo");
console.log("User Information String value is:", userInfoStr);
console.log("User Information typeof value is:", typeof userInfoStr);
let userInfo = JSON.parse(userInfoStr);
console.log("Local storage fetch data is:", userInfo);



localStorage.setItem("name", "KG Coding");

let user = {
  firsName: "Ram",
  lastName: "Sharma",
  age: 28,
  email: "ram@sharma.com",
  hobbies: ["music", "sports"],
};
localStorage.setItem("userInfo", JSON.stringify(user));
