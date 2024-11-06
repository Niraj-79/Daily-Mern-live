const Home = require("../models/Home");

exports.getIndex = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("store/index", {
      homes: registeredHomes,
      pageTitle: "Hamara airbnb",
    });
  });
};

exports.getHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("store/homes", {
      homes: registeredHomes,
      pageTitle: "Hamara airbnb",
    });
  });
};

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  console.log("Came to Detail Page", homeId);
  res.render("store/home-detail", { pageTitle: "Home Detail" });
};
