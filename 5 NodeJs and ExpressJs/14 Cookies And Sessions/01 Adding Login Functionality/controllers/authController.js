exports.getLogin = (req, res, next) => {
  res.render("auth/login", { pageTitle: "Login" });
};

exports.postLogin = (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
};
