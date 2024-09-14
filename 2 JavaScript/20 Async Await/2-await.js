console.log("Using Await");
// Using await
async function fetchData() {
  let response = await fetch("https://api.example.com/data");
  let data = await response.json();
  return data;
}

//
function fetchUsers() {
  console.log("fetchusers value is: ");
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.log(error));
}
fetchUsers();

//
async function getUsers() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let json = await response.json();
  console.log("Inside getUsers value is: ");
  console.log(json);
}
getUsers();

// Async / Await (Handling Exceptions)
console.log("Async / Await (Handling Exceptions)");
async function getData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/comments");
    let data = await response.json();
    return data;
  } catch (error) {
    console.log("Error", error);
  }
}
getData();

////
async function getUsers1() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let json = await response.json();
    console.log("Inside getUsers value and error define is: ");
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}
getUsers1();


// Async / Await (Fetch API using async/await)
console.log("Async / Await (Fetch API using async/await)");
async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchData("https://jsonplaceholder.typicode.com/posts");
