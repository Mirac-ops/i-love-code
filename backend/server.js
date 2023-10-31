const express = require('express');
const app = express();
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }))

const bodyParser = require('body-parser'); 
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('./models/User');
const bcrypt = require('bcrypt');

const { connect, closeConnection } = require("./configs/db.js"); 
connect();


/// Routes definiert.
const usersRouter = require("./routes/userRouter"); 
app.use("/api/users", usersRouter);    

const timeEntryRouter = require('./routes/timeEntryRouter');
app.use("/api/time-entries", timeEntryRouter);


require("dotenv").config();
const PORT = process.env.PORT;


app.listen(PORT, () => {
    console.log(`Server is running on ${ PORT }`) 
});  








