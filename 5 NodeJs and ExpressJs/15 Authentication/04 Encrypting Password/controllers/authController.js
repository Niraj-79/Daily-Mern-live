const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const bcrypt = require("bcryptjs");

exports.getLogin = (req, res, next) => {
  res.render("auth/login", { pageTitle: "Login", isLoggedIn: false });
};

exports.getSignup = (req, res, next) => {
  res.render("auth/signup", { pageTitle: "Login", isLoggedIn: false });
};

exports.postLogin = (req, res, next) => {
  req.session.isLoggedIn = true;
  res.redirect("/");
};

exports.postSignup = [
  // First Name Validator
  check("firstName")
    .notEmpty()
    .withMessage("First name is mandatory")
    .trim()
    .isLength({ min: 2 })
    .withMessage("First Name should be minium 2 chars")
    .matches(/^[a-zA-Z ]+$/)
    .withMessage("First Name should only contain english alphabets"),

  // Last Name Validator
  check("lastName")
    .trim()
    .matches(/^[a-zA-Z ]*$/)
    .withMessage("Last Name should only contain english alphabets"),

  // Email Validator
  check("email")
    .isEmail()
    .withMessage("Please enter a valid email")
    .normalizeEmail(),

  // Password Validator
  check("password")
    .isLength({ min: 8 })
    .withMessage("Password should be minium 8 chars")
    .matches(/[a-z]/)
    .withMessage("Password should contain at least one lowercase letter")
    .matches(/[A-Z]/)
    .withMessage("Password should contain at least one uppercase letter")
    .matches(/[!@#$%^&*]/)
    .withMessage("Password should contain at least one special character"),

  // Confirm Password Validator
  check("confirm_password")
    .trim()
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Password does not match");
      }
      return true;
    }),

  // User Type Validator
  check("userType")
    .trim()
    .notEmpty()
    .withMessage("Please select a user type")
    .isIn(["guest", "host"])
    .withMessage("Please select either guest or host"),

  // Terms Accepted Validator
  check("termsAccepted")
    .notEmpty()
    .withMessage("Please accept terms and conditions"),

  (req, res, next) => {
    console.log("User came for signup: ", req.body);
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).render("auth/signup", {
        pageTitle: "Login",
        isLoggedIn: false,
        errorMessages: errors.array().map((err) => err.msg),
        oldInput: req.body,
      });
    }

    const { firstName, lastName, email, password, userType } = req.body;
    bcrypt.hash(password, 12).then((hashedPassword) => {
      console.log(hashedPassword);
      const user = new User({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        userType,
      });

      user
        .save()
        .then((result) => {
          console.log(result);
          res.redirect("/login");
        })
        .catch((error) => {
          return res.status(422).render("auth/login", {
            pageTitle: "Login",
            isLoggedIn: false,
            errorMessages: [error],
            oldInput: req.body,
          });
        });
    });
  },
];

exports.postLogout = (req, res, next) => {
  req.session.destroy();
  res.redirect("/login");
};
