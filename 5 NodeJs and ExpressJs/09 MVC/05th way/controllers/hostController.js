const Home = require("./../models/Home");

exports.getAddHome = (req, res, next) => {
  res.render("add-home", { pageTitle: "Host Your Home" });
};

exports.postAdddHome = (req, res, next) => {
  // console.log(req.body);

  // Long Method
  // const houseName = req.body.houseName;
  // const price = req.body.price;
  // const location = req.body.location;
  // const rating = req.body.rating;
  // const photoUrl = req.body.photoUrl;

  // Short's Method
  const { houseName, price, location, rating, photoUrl } = req.body;
  const newHome = new Home(houseName, price, location, rating, photoUrl);
  newHome.save();
  res.render("home-added", { pageTitle: "Home Hosted" });
};
