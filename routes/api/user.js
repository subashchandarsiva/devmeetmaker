const express = require("express");
const { check, validationResult } = require("express-validator/check");

const router = express.Router();

// router.get("/", (req, res) => {
//   res.send("Users Route");
// });

router.post(
  "/",
  [
    check("name", "Name is required")
      .not()
      .isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 6 or more characters"
    ).isLength({ min: 6 })
  ],
  (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    res.send("User Route");
  }
);
module.exports = router;
