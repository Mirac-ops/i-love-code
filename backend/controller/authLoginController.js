const jwt = require("jsonwebtoken");
const User = require("../models/authLogin");
const bcrypt = require("bcrypt");
require("dotenv").config();

// Funktion zur Authentifizierung und Token-Erstellung

function authLogin(req, res) {
  const { username, password } = req.body;

  User.findOne({ username }, (err, user) => {
    if (err || !user || user.password !== password) {
      return res.status(401).json({ message: "User Error!" });
    } else {
      const accessToken = jwt.sign({ userId: user._id }, "geheim", {
        expiresIn: "1h",
      });
      return res.status(200).json({ message: "Successful!", accessToken });
    }
  });
}

module.exports = { authLogin };
