console.log("Promises(Handling of Promise)");
// // Handling a Promise: handle value
// promise.then((value) => {
//   console.log(value); // 'Success'
// });

// // Handling a Promise: handle rejection
// promise.catch((error) => {
//   console.log(error); // 'Error'
// });

// /* Handling a promise: Executes a block of code regardless of the promise's outcome.*/
// promise.finally(() => {
//   console.log("Operation completed");
// });


 
// // Example 1
// function getDataFromInternetUsingPromise() {
//   let promise = new Promise((resolve, reject) => {
//     console.log("Getting data from internet using Promise");
//     for (
//       let i = 0;
//       i < 10000;
//       i++ //console.log(i);
//     )
//       //resolve("KG Coding");
//       reject("Internet Timeout");
//   });
//   return promise;
// }

// getDataFromInternetUsingPromise()
//   .then((data) => {
//     console.log(`Data is fetched ${data}`);
//   })
//   .catch((error) => {
//     console.log(`Error: ${error}`);
//   })
//   .finally(() => {
//     console.log("Fanily block");
//   });


  // Example 2
function getDataFromInternetUsingPromise() {
  return new Promise((resolve, reject) => {
    console.log("Getting data from internet using Promise");
    for (
      let i = 0;
      i < 10000;
      i++ //console.log(i);
    )
      //resolve("KG Coding");
      reject("Internet Timeout");
  });
  return promise;
}

getDataFromInternetUsingPromise()
  .then((data) => {
    console.log(`Data is fetched ${data}`);
  })
  .catch((error) => {
    console.log(`Error: ${error}`);
  })
  .finally(() => {
    console.log("Fanily block");
  });
