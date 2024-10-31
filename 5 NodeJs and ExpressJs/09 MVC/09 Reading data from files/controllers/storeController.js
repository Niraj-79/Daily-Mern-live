const Home = require("../models/Home");

// exports.getHome = (req, res, next) => {
//   let registeredHomes = Home.fetchAll();
//   res.render("index", { homes: registeredHomes, pageTitle: "Hamara airbnb" });
// };

exports.getHome = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("index", { homes: registeredHomes, pageTitle: "Hamara airbnb" });
  });
};
