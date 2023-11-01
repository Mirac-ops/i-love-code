const mongoose = require('mongoose');

const { Schema, model } = mongoose;
const userTimeEntrySchema = new Schema({
    username: {
        type: String,
        ref: 'User', // Referenz auf den "username" im User-Modell
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    }
},
{
    timestamps: true
}
);
const UserTimeEntry = model('UserTimeEntry', userTimeEntrySchema, 'userTimeEntries');
module.exports = UserTimeEntry;
