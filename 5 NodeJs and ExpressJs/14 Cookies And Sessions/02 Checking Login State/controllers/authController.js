exports.getLogin = (req, res, next) => {
  res.render("auth/login", { pageTitle: "Login", isLoggedIn: false});
};

// exports.postLogin = (req, res, next) => {
//   console.log(req.body);
//   req.isLoggedIn = true;
//   res.redirect("/");
// };

exports.postLogin = (req, res, next) => {
  console.log(req.isLoggedIn, req.body);
  res.redirect("/");
};
