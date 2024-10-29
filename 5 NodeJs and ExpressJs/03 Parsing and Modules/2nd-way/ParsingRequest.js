const http = require("http");
const fs = require("fs");
// const url = require("url");
const { URLSearchParams } = require("url");

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
    const bufferArr = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      bufferArr.push(chunk);
    });
    req.on("end", () => {
      const body = Buffer.concat(bufferArr).toString();
      const urlParams = new URLSearchParams(body);
      const bodyJson = {};

      // [["Item key", "Item value"]]
      // [["product", "Jeans"], ["budget", "999"]]

      for (const [key, value] of urlParams.entries()) {
        bodyJson[key] = value;
      }
      // console.log(bodyJson);
      fs.writeFileSync("buy.txt", JSON.stringify(bodyJson));
    });

    res.statusCode = 302;
    res.setHeader("Location", "/products");
    console.log("Sending Response");
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
