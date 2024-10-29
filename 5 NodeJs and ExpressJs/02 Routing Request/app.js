const http = require("http");

// console.log("Server is running");

//// 1st way
// const requestHandler = (req, res) => {
//   console.log("Request Received", req.url, req.method, req.headers);
//   res.setHeader("Content-Type", "text/html");

//   if (req.url === "/") {
//     res.write(`
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <title>Home Page</title>
//     </head>
//     <body>
//         <h1>Welcome to First Server</h1>
//     </body>
//     </html>
//     `);
//   } else if (req.url === "/products") {
//     res.write(`
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <title>Products</title>
//     </head>
//     <body>
//         <h1>Products list will appear here.</h1>
//     </body>
//     </html>
//     `);
//   } else {
//     res.write(`
//     <!DOCTYPE html>
//     <html lang="en">
//     <head>
//         <title>404 Page</title>
//     </head>
//     <body>
//         <h1>404 Page Not Found</h1>
//     </body>
//     `);
//   }
//   res.end();
// };

// ----------------------------------------------------------------------
//  // 2nd way
// const requestHandler = (req, res) => {
//   console.log("Request Received", req.url, req.method, req.headers);
//   res.setHeader("Content-Type", "text/html");

//   if (req.url === "/") {
//     res.write(`
//   <!DOCTYPE html>
//   <html lang="en">
//   <head>
//       <title>Myntra</title>
//   </head>
//   <body>
//       <h1>Welcome to Myntra Home Page</h1>
//       <form action="/buy-products" method="POST">
//           <input type="text" placeholder="Enter the product that you want" name="product">
//            <br />
//           <input type="text" placeholder="Enter your budget" name="budget">
//           <input type="Submit">
//       </form>
//   </body>
//   </html>
//   `);
//   } else if (req.url === "/products") {
//     res.write(`
//   <!DOCTYPE html>
//   <html lang="en">
//   <head>
//       <title>Products</title>
//   </head>
//   <body>
//       <h1>Products list will appear here.</h1>
//   </body>
//   </html>
//   `);
//   } else {
//     res.write(`
//   <!DOCTYPE html>
//   <html lang="en">
//   <head>
//       <title>404 Page</title>
//   </head>
//   <body>
//       <h1>404 Page Not Found</h1>
//   </body>
//   `);
//   }
//   res.end();
// };

// ----------------------------------------------------------------------
//// 3rd way

const fs = require("fs");

const requestHandler = (req, res) => {
  console.log("Request Received", req.url, req.method);
  res.setHeader("Content-Type", "text/html");

  if (req.url === "/") {
    res.write(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <title>Myntra</title>
  </head>
  <body>
      <h1>Welcome to Myntra Home Page</h1>
      <form action="/buy-products" method="POST">
          <input type="text" placeholder="Enter the product that you want" name="product">
           <br />
          <input type="text" placeholder="Enter your budget" name="budget">
          <input type="Submit">
      </form>
  </body>
  </html>
  `);
  } else if (req.url === "/buy-products") {
    console.log("Form data received");
    fs.writeFileSync("buy.txt", "Myntra app");
    res.statusCode = 302;
    res.setHeader("Location", "/products");
  } else if (req.url === "/products") {
    res.write(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <title>Products</title>
  </head>
  <body>
      <h1>Products list will appear here.</h1>
  </body>
  </html>
  `);
  } else {
    res.statusCode = 404;
    res.write(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <title>404 Page</title>
  </head>
  <body>
      <h1>404 Page Not Found</h1>
  </body>
  `);
  }
  res.end();
};

// ---------------------------------------------------------------------------------------------
const server = http.createServer(requestHandler);
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is running at: http://localhost:${PORT}`);
});
