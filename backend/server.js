require("dotenv").config(); /// richtig

const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser"); /// richtig
const crypto = require("crypto");      /// richtig
const mongoose = require("mongoose");
const User = require("./models/User");
const bcrypt = require("bcrypt");       //// richtig

const { connect } = require("./configs/db.js");

const secret = process.env.TOKEN_SECRET;   ///// richtig
console.log(secret);

const port = process.env.PORT;
const databaseUrl = `${process.env.DB_URL}/${process.env.DB_NAME}`;

// Middleware
app.use(express.json());     /// body-parsen auch in der json enthalten
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
connect();                   // DB Verbindung


// Beginn Routes
const usersRouter = require("./routes/userRouter");
app.use("/api/users", usersRouter);

const timeEntryRouter = require("./routes/timeEntryRouter");
app.use("/api/time-entries", timeEntryRouter);
// Ende Routes


app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Hier den Benutzer aus der Datenbank abrufen (z.B., User.findOne)
    const user = await User.findOne({ username });

    if (!user) {
      return res
        .status(401)
        .json({ success: false, msg: "Benutzer nicht gefunden" });
    }

    // Passwort überprüfen
    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      // Passwort stimmt überein, Token erstellen und zurückgeben 
      const accessToken = jwt.sign(
        { name: username },
        process.env.TOKEN_SECRET
      );

      res.cookie("access_token", accessToken, {
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
      });

      return res
        .status(200)
        .json({ success: true, msg: `Benutzer ${ username } eingeloggt` });
    } else {
      return res.status(401).json({ success: false, msg: "Falsches Passwort" });
    }

  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, msg: "Serverfehler" });
  }
});

app.post("/logout", (req, res) => {
  return (
    res
      // wir nutzen die methode .clearCookie();
      .clearCookie("access_token")
      .status(200)
      .json({
        success: true,
        message: "User wurder erfolgreich ausgeloggt",
      })
  );
});

// Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

require("dotenv").config();
const PORT = process.env.PORT || 3000; /// falls 4000 nicht funktioniert.

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
