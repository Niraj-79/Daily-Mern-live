// const { registeredHomes } = require("../routers/hostRouter");
const { registeredHomes } = require("./hostController");

exports.getHome = (req, res, next) => {
  console.log(registeredHomes);
  res.render("index", { homes: registeredHomes, pageTitle: "Hamara airbnb" });
};
