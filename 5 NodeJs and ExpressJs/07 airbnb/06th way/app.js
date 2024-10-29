// Core Modules
const path = require('path');

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

app.use((req, res, next) => {
  res.statusCode = 404;
  res.write(`

    `);
  res.end();
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at: http://localhost:${PORT}`);
});
