// Core Modules
const express = require("express");
const { registeredHomes } = require("./hostRouter");

const storeRouter = express.Router();

storeRouter.get("/", (req, res, next) => {
  console.log(registeredHomes);
  res.render("index", { homes: registeredHomes, pageTitle: "Hamara airbnb" });
});

module.exports = storeRouter;
