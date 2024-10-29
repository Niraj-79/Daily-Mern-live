const express = require("express");
const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {
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

hostRouter.post("/add-home", (req, res, next) => {
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

module.exports = hostRouter;