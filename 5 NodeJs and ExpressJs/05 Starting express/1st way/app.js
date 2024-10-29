// Core Module
const http = require("http");

// External Module
const express = require("express");

const app = express();

// // Local Module
// const { handler } = require("./RequestHandler");

const server = http.createServer(app);
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at: http://localhost:${PORT}`);
});
