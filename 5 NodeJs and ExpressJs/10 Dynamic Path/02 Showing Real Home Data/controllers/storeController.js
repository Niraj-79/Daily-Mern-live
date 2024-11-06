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
  const homeId = req.params.homeIdentity;
  Home.findById(homeId, (home) => {
    if (!home) {
      console.log("Home not found");
      return res.redirect("/homes");
    }
    // console.log("Came to Detail Page", homeId, home);
    res.render("store/home-detail", { home: home, pageTitle: "Home Detail" });
  });
};
