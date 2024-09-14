console.log(`Promises(Creation of Promise)`);
// // Creating a Promise
// let promise = new Promise((resolve, reject) => {
//   // Asynchronous operation
//   if (result()) {
//     resolve("Success");
//   } else {
//     reject("Error");
//   }
// });


// Example
function getDataFromInternet(successCallback) {
  console.log("Getting data from internet");
  successCallback("KG Coding");
}

getDataFromInternet((data) => {
  console.log(`Data is fetched ${data}`);
});

function getDataFromInternetUsingPromise() {
  let promise = new Promise((resolve, reject) => {
    console.log("Getting data from internet using Promise");
    for (let i = 0; i < 10000; i++) console.log(i);
    resolve("KG Coding");
    //reject("Internet Timeout");
  });
  return promise;
}

getDataFromInternetUsingPromise().then((data) => {
  console.log(`Data is fetched ${data}`);
});
