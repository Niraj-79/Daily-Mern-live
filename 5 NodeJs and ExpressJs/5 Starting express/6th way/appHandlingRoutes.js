const app = express();
app.use("/", (req, res, next) => {
  console.log("Hello World");
  //res.send('<p>Welcome to Submit Details Page</p>');
  next();
});

app.use("/submit-details", (req, res, nect) => {
  console.log("Second Middleware", req.url, req.method);
  res.send("<p>Welcome to Submit Details Page</p>");
});

app.use("/", (req, res, mext) => {
  console.log("Second Middleware", req.url, req.method);
  res.send("<p>Welcome to Complete Coding</p>");
});
