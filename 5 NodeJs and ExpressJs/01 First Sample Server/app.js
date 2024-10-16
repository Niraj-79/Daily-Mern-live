// Simple Node.Js Server
const http = require("http");

console.log("Server is running");

//// 1st way
// function requestHandler(req, res) {
//   console.log("I was here in handler");
// }

//// 2nd way
// const requestHandler = (req, res) => {
//   console.log("I was here in handler");
// };

//// 3rd way
// const requestHandler = (req, res) => {
//   console.log("I was here in handler", req);
// };

//// 4th way
// const requestHandler = (req, res) => {
//   console.log("Request Received", req.url, req.method, req.headers);
// };

//// 5th way
// const requestHandler = (req, res) => {
//   console.log("Request Received", req.url, req.method, req.headers);
//   // res.setHeader("Content-Type", "text/html");
//   res.write("<html>");
//   res.write("<head><title>My First Page</title></head>");
//   res.write("<body>");
//   res.write("<h1>Welcome to First Server</h1>");
//   res.write("</body>");
//   res.write("</html>");
//   res.end();
// };

//// 6th way
const requestHandler = (req, res) => {
  console.log("Request Received", req.url, req.method, req.headers);
  res.setHeader("Content-Type", "text/html");
  res.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <title>Document</title>
    </head>
    <body>
        <h1>Welcome to First Server</h1>
    </body>
    </html>
    `);
  res.end();
};


// -------------------------------------------------------------------------------------------------
//// 1st way
// http.createServer(requestHandler);

//// 2nd way
// const Server = http.createServer(requestHandler);
// Server.listen(3001);

//// 3rd way
const server = http.createServer(requestHandler);
const PORT = 3001;
server.listen(PORT, () => {
  console.log(`Server is running at: http://localhost:${PORT}`);
});
