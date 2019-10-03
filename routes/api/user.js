const express = require("express");
const { check, validationResult } = require("express-validator");

const router = express.Router();

// router.get("/", (req, res) => {
//   res.send("Users Route");
// });

router.post(
  "/",
  [
    check("name", "Name cannot be empty")
      .not()
      .isEmpty(),
    check("email", "Provide a valid email").isEmail(),
    check("password", "Is required and length should be more than 6").isLength({
      min: 5
    })
  ],
  (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
  }
);
module.exports = router;
