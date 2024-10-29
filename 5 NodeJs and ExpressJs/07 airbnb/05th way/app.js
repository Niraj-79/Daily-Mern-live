// External Module
const express = require("express");
const bodyParser = require("body-parser");

// Local Module
const hostRouter = require("./hostRouter");
const storeRouter = require("./storeRouter");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/host", hostRouter);
app.use(storeRouter);

// app.use((req, res, next) => {
//   console.log("Request Received", req.url, req.method, req.body);
//   next();
// });

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
