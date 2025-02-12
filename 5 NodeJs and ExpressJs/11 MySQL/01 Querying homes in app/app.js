// Core Modules
const path = require("path");

// External Module
const express = require("express");
const bodyParser = require("body-parser");

// Local Module
const { hostRouter } = require("./routers/hostRouter");
const storeRouter = require("./routers/storeRouter");
const rootDir = require("./util/path-util");
const errorController = require("./controllers/errorController");

const airbnbDb = require("./util/database-utils");
airbnbDb.execute("SELECT * FROM homes").then(([rows, fields]) => {
  console.log(rows);
});

const app = express();
app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(rootDir, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/host", hostRouter);
app.use(storeRouter);

app.use(errorController.get404);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at: http://localhost:${PORT}`);
});
