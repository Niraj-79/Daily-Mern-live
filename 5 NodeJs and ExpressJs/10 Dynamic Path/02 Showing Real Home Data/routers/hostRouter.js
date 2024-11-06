// Core Modules
const express = require("express");
const hostRouter = express.Router();
const hostController = require("../controllers/hostController");

hostRouter.get("/add-home", hostController.getAddHome);
hostRouter.post("/add-home", hostController.postAdddHome);

exports.hostRouter = hostRouter;
