const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

app.use(express.json());

// const userRouter = require('./routes/userRouter');
// app.use('/api/user', userRouter);

const PORT = 4000; 
app.listen(PORT, () => {
    console.log(`Server is running on ${ PORT }`) 
});  