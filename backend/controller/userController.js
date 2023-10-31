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
    /* await checkExistingEmail(req, res);
      await emailFormat(req, res); */
    const newUser = req.body;
    /* const hashedPassword = await hashPassword(newUser.password);
      newUser.password = hashedPassword; */
    const user = await User.create(newUser);
    //const token = createToken({ userId: user._id });
    res.status(201).json({ user });
    console.log("Benutzer erstellt:", user);
    //console.log("Token erstellt:", token);
  } catch (error) {
    console.error("Fehler beim Erstellen des Benutzers:", error);
  }
};

/* async function hashPassword(password) {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  }
 */

exports.loginUser = async (req, res) => {
  
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username, password });

    if (!user) {
      res.status(401).json({ message: 'Ungültige Anmeldeinformationen' });
      return;
    }

    const token = jwt.sign({ username }, secretKey);
    res.json({ token });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

