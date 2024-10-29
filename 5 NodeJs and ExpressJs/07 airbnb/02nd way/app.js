const express = require("express");
const fs = require("fs");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <title>airbnb</title>
    </head>
    <body>
        <h1>Welcome to airbnb</h1>
    <a href="/add-home">Add Home</a>
    </body>
    </html>

    `);
});

app.get("/add-home", (req, res, next) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    
      <head>
        <title>Add Home</title>
      </head>
      <body>
        <h1>Add your Home</h1>
        <form action="/add-home" method="POST">
          <input type="text" name="houseName" placeholder="Name of your house" />          
        <input type="submit" value="Submit">
        </form>
      </body>
    </html>
    `);
});

app.post("/add-home", (req, res, next) => {
  console.log(req.body);
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Home Added</title>
      </head>
      <body>
        <h1>Home Added Successfully</h1>
        <a href="/">Go to Home</a>
      </body>
    </html>

    `);
});

app.use((req, res, next) => {
  console.log("Request Received", req.url, req.method, req.body);
  next();
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
