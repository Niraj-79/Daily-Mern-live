const fs = require("fs");
const { URLSearchParams } = require("url");

const RequestHandler = (req, res) => {
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
      // console.log(JSON.stringify(bodyJson));
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

module.exports = {
  handler: RequestHandler,
};
