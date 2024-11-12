const Favourite = require("../models/Favourite");
const Home = require("../models/Home");

exports.getIndex = (req, res, next) => {
  Home.fetchAll().then((registeredHomes) => {
    res.render("store/index", {
      homes: registeredHomes,
      pageTitle: "Hamara airbnb",
    });
  });
};

exports.getHomes = (req, res, next) => {
  Home.fetchAll().then((registeredHomes) => {
    res.render("store/homes", {
      homes: registeredHomes,
      pageTitle: "Hamara airbnb",
    });
  });
};

exports.getFavourites = (req, res, next) => {
  Favourite.fetchAll((favouriteIds) => {
    Home.fetchAll().then((registeredHomes) => {
      const favouriteHomes = registeredHomes.filter((home) =>
        favouriteIds.includes(home.id)
      );
      res.render("store/favourites", {
        homes: favouriteHomes,
        pageTitle: "Favourites",
      });
    });
  });
};

exports.postAddFavourites = (req, res, next) => {
  // console.log("Came to add favourites", req.body);
  const homeId = req.body.id;
  Favourite.addToFavourites(homeId, (error) => {
    if (error) {
      console.log("Error while adding to favourites", error);
    }
    res.redirect("/favourites");
  });
};

exports.postRemoveFavourites = (req, res, next) => {
  const homeId = req.params.homeId;
  Favourite.deleteById(homeId, (error) => {
    if (error) {
      console.log("Error while remove from favourites", error);
    }
    // console.log("Came to remove favourites for ", homeId);
    res.redirect("/favourites");
  });
};

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeIdentity;
  Home.findById(homeId).then(([homes]) => {
    const home = homes[0];
    if (!home) {
      console.log("Home not found");
      return res.redirect("/homes");
    }
    res.render("store/home-detail", { home: home, pageTitle: "Home Detail" });
  });
};
