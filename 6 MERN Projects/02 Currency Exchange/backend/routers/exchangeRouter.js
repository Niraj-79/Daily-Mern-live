const express = require("express");
const exchangeController = require("../controllers/exchangeController");
const exchangeRouter = express.Router();

exchangeRouter.get("/convert", exchangeController.convertCurrency);

module.exports = exchangeRouter;
