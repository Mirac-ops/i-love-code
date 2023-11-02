const User = require("../models/User");
const bcrypt = require("bcrypt");
exports.getUsers = async (req, res) => {
  // <<< zum User gehen mit getUsers.
  try {
    const users = await User.find(); // <<< User finden.
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send("Error fetching users");
  }
};
exports.createUser = async (req, res) => {
  try {
    const newUser = req.body;
    const user = await User.create(newUser);
    res.status(201).json({ user });
    console.log("Benutzer erstellt:", user);
  } catch (error) {
    console.error("Fehler beim Erstellen des Benutzers:", error);
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });
    if (!user) {
      res.status(401).json({ message: "Ungültige Anmeldeinformationen" });
      return;
    }
    const token = jwt.sign({ username }, secretKey);
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


