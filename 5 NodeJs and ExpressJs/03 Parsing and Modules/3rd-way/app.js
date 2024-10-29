// Core Module
const http = require("http");

// Local Module
const RequestHandler = require("./RequestHandler");

const server = http.createServer(RequestHandler);
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is running at: http://localhost:${PORT}`);
});
