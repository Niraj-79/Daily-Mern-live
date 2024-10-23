// Core Module
const http = require("http");

// Local Module
const { handler } = require("./RequestHandler");



const server = http.createServer(handler);
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at: http://localhost:${PORT}`);
});
