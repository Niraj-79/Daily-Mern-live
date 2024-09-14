// console.log("Fetch API;");
// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok " + response.statusText);
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error));


// Method 1
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(function (response) {
//   return response.json();
// })
// .then((json) => console.log(json))
// .catch((error) => console.log(error));

// Method 2
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((error) => console.log(error));
