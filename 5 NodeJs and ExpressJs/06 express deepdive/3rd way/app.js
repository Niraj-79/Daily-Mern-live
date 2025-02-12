// External Module
const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded());

app.use((req, res, next) => {
  console.log("Request Received", req.url, req.method, req.body);
  next();
});

app.get("/", (req, res, next) => {
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <title>Myntra</title>
  </head>
  <body>
      <h1>Welcome to Myntra Home Page</h1>
      <form action="/buy-product" method="POST">
          <input type="text" placeholder="Enter the product that you want" name="product">
          <br />
          <input type="text" placeholder="Enter your budget" name="budget">
          <input type="submit">
      </form>
  </body>
  </html>`);
});

app.post("/buy-product", (req, res, next) => {
  fs.writeFile("buy.json", JSON.stringify(req.body), (err) => {
    res.statusCode = 302;
    res.setHeader("Location", "/products");
    res.end();
  });
});

app.get("/products", (req, res, next) => {
  res.send(`
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
});

app.use((req, res, next) => {
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
  res.end();
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at: http://localhost:${PORT}`);
});
