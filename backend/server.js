require('dotenv').config();  /// richtig

const express = require('express');
const app = express();
const jwt = require('jsonwebtoken')  
const cookieParser = require('cookie-parser');  /// richtig
const crypto = require('crypto')       /// richtig 
const mongoose = require('mongoose');
const User = require('./models/User');

const { connect } = require("./configs/db.js");


const secret = process.env.TOKEN_SECRET;        ///// richtig
console.log(secret);

const port = process.env.PORT;
const databaseUrl = `${ process.env.DB_URL }/${ process.env.DB_NAME }`;



// Middleware
app.use(express.json());  /// body-parsen auch in der json enthalten
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser());
// DB Verbindung
connect();




// Routes
const usersRouter = require("./routes/userRouter");
app.use("/api/users", usersRouter);

const timeEntryRouter = require('./routes/timeEntryRouter');
app.use("/api/time-entries", timeEntryRouter);


app.post('/login', (req, res) => {

    const username = req.res.username;
    const user = { name: username }

    const accessToken = jwt.sign(user, process.env.TOKEN_SECRET)
    res.json({ accessToken: accessToken })
    return res
    .cookie(accessToken,
        {
           maxAge: 24 * 60 * 60 * 1000,
           httpOnly: true
        })
        .status(200)
        .json({ success: true, msg: `User ${ username } eingeloggt`})
});

app.post('/logout', (req, res) =>
{
    return res
    // wir nutzen die methode .clearCookie();
    .clearCookie('access_token')
    .status(200)
    .json({
        success: true,
        message: 'User wurder erfolgreich ausgeloggt'
    });
});



// Error Handling
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});


require("dotenv").config();
const PORT = process.env.PORT || 3000;  /// falls 4000 nicht funktioniert.


app.listen(PORT, () => {
    console.log(`Server is running on ${ PORT }`)
});











