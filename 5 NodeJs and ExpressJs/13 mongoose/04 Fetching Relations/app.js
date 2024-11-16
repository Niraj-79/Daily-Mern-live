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

const app = express();
app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(path.join(rootDir, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/host", hostRouter);
app.use(storeRouter);

app.use(errorController.get404);

const mongoose = require("mongoose")
const PORT = 3000;
const MONGO_DB_URL = "mongodb+srv://root:root@airbnb.xqq4y.mongodb.net/airbnb?retryWrites=true&w=majority&appName=Airbnb";
mongoose.connect(MONGO_DB_URL).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running at: http://localhost:${PORT}`);
  });
});
