// Core Module
const http = require("http");

// Local Module
const { handler } = require("./RequestHandler");

function compare(num) {
  if ((num = 10)) {
    console.log("num is 10");
  } else {
    console.log("num is not 10");
  }
}

compare(5);

const server = http.createServer(handler);
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at: http://localhost:${PORT}`);
});
