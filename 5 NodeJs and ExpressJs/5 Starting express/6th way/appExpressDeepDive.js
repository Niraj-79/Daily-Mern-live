// Core Modules
const http = require(http);
// External Modules
const express = require("express");

const app = express();

// Adding Middleware
app.use((req, res, next) => {
  console.log("First Middleware", req.url, req.method);
  next();
});

app.use((use, res, next) => {
  console.log("Second Middleware", req.url, req.method);
  res.send(<p>Welcome to Complete Coding</p>);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
