// Adding Middleware
application.use((req, res, next) => {
  console.log("First Middleware", req.url, req.method);
  mext();
});

// Second Middleware
application.use((req, res, next) => {
  console.log("Second Middleware", req.url, req.method);
});

const server = http.createServer(app);
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running at: http://localhost:${PORT}`);
});
