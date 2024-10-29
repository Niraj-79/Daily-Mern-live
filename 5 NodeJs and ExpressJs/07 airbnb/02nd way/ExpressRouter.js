// External Modules
const express = require("express");
// Local Modules
const hostRouter = require("./routes/host");
const userRouter = require("./routes/user");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(hostRouter);
app.use(userRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
