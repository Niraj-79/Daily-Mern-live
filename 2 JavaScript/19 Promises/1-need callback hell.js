// console.log("(Need: Callback Hell)");
// function step1(callback) {
//   setTimeout(() => {
//     console.log("Step 1");
//     callback();
//   }, 1000);
// }

// function step2(callback) {
//   setTimeout(() => {
//     console.log("Step 2");
//     callback();
//   }, 1000);
// }

// function step3(callback) {
//   setTimeout(() => {
//     console.log("Step 3");
//     callback();
//   }, 1000);
// }

// step1(() => {
//   step2(() => {
//     step3(() => {
//       console.log("All step complete");
//     });
//   });
// });

// // Example 1
// console.log("Checking call Hell");
// function getDataFromInternet(successCallback) {
//   console.log("Getting data from internet");
//   setTimeout(() => {
//     console.log("Got data from internet");
//     successCallback();
//   }, 3000);
//   console.log("Data Fetch is Set");
// }
// getDataFromInternet(() => {
//   console.log("Data is fetched");
// });

// Example 2
function getDataFromInternet(successCallback) {
  console.log("Getting data from internet");
  setTimeout(() => {
    successCallback("KG Coding");
  }, 3000);
}

function setDataToDB(successCallback) {
  console.log("Sending data to DB");
  setTimeout(() => {
    successCallback("db_row_25;");
  }, 2000);
}

function sendResponseToUser(successCallback) {
  console.log("Sending Response to User");
  setTimeout(() => {
    successCallback();
  }, 5000);
}

getDataFromInternet((data) => {
  console.log(`Data is fetch ${data}`);
  setDataToDB((id) => {
    console.log(`Data is saved in DB with id ${id}`);
    sendResponseToUser(() => {
      console.log("Response is send to user");
    });
  });
});
