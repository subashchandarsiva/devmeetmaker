const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function(req, res, next) {
  //GET Token
  const token = req.header("x-auth-token");
  //Verify Token
  if (!token) {
    res.status(401).json({ msg: "No authorization" });
  }

  try {
    const decode = jwt.verify(token, config.get("jwtToken"));

    req.user = decode.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Invalid Token" });
  }
};
