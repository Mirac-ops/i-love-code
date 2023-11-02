const express = require('express');
const app = express();
const mongoose = require('mongoose');
const User = require('./models/User');
const { connect } = require("./configs/db.js");

// Middleware
app.use(express.json());  /// body-parsen auch in der json enthalten
app.use(express.urlencoded({ extended: true }))
// DB Verbindung
connect();


// Routes
const usersRouter = require("./routes/userRouter");
app.use("/api/users", usersRouter);

const timeEntryRouter = require('./routes/timeEntryRouter');
app.use("/api/time-entries", timeEntryRouter);



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







