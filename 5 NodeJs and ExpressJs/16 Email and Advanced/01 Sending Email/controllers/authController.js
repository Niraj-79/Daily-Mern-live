const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const sendGrid = require("@sendgrid/mail");
const SEND_GRID_KEY = "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";
sendGrid.setApiKey(SEND_GRID_KEY);

exports.getLogin = (req, res, next) => {
  res.render("auth/login", { pageTitle: "Login", isLoggedIn: false });
};

exports.getSignup = (req, res, next) => {
  res.render("auth/signup", { pageTitle: "Login", isLoggedIn: false });
};

exports.postLogin = async (req, res, next) => {
  const { email, password } = req.body;
  console.log(email, password);

  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("User not found");
    }

    const isMatch = await bcrypt.compare(password, user.password);
    console.log(user, isMatch);

    if (!isMatch) {
      throw new Error("Password does not match");
    }

    req.session.isLoggedIn = true;
    req.session.user = user;
    await req.session.save();
    res.redirect("/");
  } catch (err) {
    res.render("auth/login", {
      pageTitle: "Login",
      isLoggedIn: false,
      errorMessages: [err.message],
    });
  }
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


  async (req, res, next) => {
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

    try {
      const hashedPassword = await bcrypt.hash(password, 12)
      const user = new User({
        firstName, lastName, email, password: hashedPassword, userType,
      });
      await user.save();

      const welcomeEmail = {
        to: email,
        from: "kniraj17277@gmail.com",
        subject: "Welcome to AirBnb",
        html: ` <h1>Welcome ${firstName} ${lastName} Please book your first vacation home with us.</h1> `
      }

      await sendGrid.send(welcomeEmail);

    return res.redirect('/login');
    } catch (err) {
      return res.status(422).render("auth/signup", {
        pageTitle: "Login",
        isLoggedIn: false,
        errorMessages: [err.message],
        oldInput: req.body,
      });

    }
  },
];

exports.postLogout = (req, res, next) => {
  req.session.destroy();
  res.redirect("/login");
};
