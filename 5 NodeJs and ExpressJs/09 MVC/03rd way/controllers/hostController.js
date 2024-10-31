const { registeredHomes } = require("./../models/Home");

exports.getAddHome = (req, res, next) => {
  res.render("add-home", { pageTitle: "Host Your Home" });
};

exports.postAdddHome = (req, res, next) => {
  registeredHomes.push(req.body);
  res.render("home-added", { pageTitle: "Home Hosted" });
};
