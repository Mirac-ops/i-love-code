const mongoose = require('mongoose');

const { Schema, model } = require('mongoose');
const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: String,
},
{
    timestamps: true
}
);

const User = model('User', userSchema, 'users');

module.exports = User;


