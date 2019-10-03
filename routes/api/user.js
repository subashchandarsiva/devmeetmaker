const express = require("express");
const { check, validationResult } = require("express-validator/check");
const User = require("../../model/User");
const gravatar = require("gravatar");
var bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const config = require("config");

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
  async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (user) {
        res.status(400).json({ error: [{ message: "User Already Exists" }] });
      }
      const avatar = gravatar.url(email, {
        s: "200",
        r: "pg",
        d: "mm"
      });

      user = new User({
        name,
        email,
        password,
        avatar
      });
      const salt = await bcrypt.genSaltSync(10);

      user.password = await bcrypt.hash(password, salt);
      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get("jwtToken"),
        { expiresIn: 3600 },
        (err, Token) => {
          if (err) throw err;
          res.json({ Token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Internal Server Error");
    }
  }
);
module.exports = router;
