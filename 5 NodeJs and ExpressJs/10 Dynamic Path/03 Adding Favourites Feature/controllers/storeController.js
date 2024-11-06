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

exports.getFavourites = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("store/favourites", {
      homes: registeredHomes,
      pageTitle: "Favourites",
    });
  });
};

exports.postAddFavourites = (req, res, next) => {
  console.log("Came to add favourites", req.body);
  res.redirect("/favourites");
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
