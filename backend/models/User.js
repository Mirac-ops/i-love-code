const mongoose = require('mongoose');
const crypto = require('crypto');

const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: String,
    password: String
},
{
    timestamps: true
}
);

const userModel = new model('User', userSchema, 'users');
module.exports = userModel;




