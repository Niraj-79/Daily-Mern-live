const { check } = require("express-validator");

// First Name Validator
 exports.firstNameValidation = check("firstName")
  .notEmpty()
  .withMessage("First name is mandatory")
  .trim()
  .isLength({ min: 2 })
  .withMessage("First Name should be minium 2 chars")
  .matches(/^[a-zA-Z ]+$/)
  .withMessage("First Name should only contain english alphabets"),

  // Last Name Validator
  exports.lastNameValidation = check("lastName")
    .trim()
    .matches(/^[a-zA-Z ]*$/)
    .withMessage("Last Name should only contain english alphabets"),

  // Email Validator
  exports.emailValidation = check("email")
    .isEmail()
    .withMessage("Please enter a valid email")
    .normalizeEmail(),

  // Password Validator
  exports.passwordValidation = check("password")
    .isLength({ min: 8 })
    .withMessage("Password should be minium 8 chars")
    .matches(/[a-z]/)
    .withMessage("Password should contain at least one lowercase letter")
    .matches(/[A-Z]/)
    .withMessage("Password should contain at least one uppercase letter")
    .matches(/[!@#$%^&*]/)
    .withMessage("Password should contain at least one special character"),

  // Confirm Password Validator
   exports.confirmPasswordValidation = check("confirm_password")
    .trim()
    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Password does not match");
      }
      return true;
    }),

  // User Type Validator
  exports.userTypeValidation = check("userType")
    .trim()
    .notEmpty()
    .withMessage("Please select a user type")
    .isIn(["guest", "host"])
    .withMessage("Please select either guest or host"),

  // Terms Accepted Validator
  exports.termsValidation = check("termsAccepted")
    .notEmpty()
    .withMessage("Please accept terms and conditions");
