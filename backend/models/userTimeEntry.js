const mongoose = require('mongoose');
const crypto = require('crypto');

const { Schema, model } = require('mongoose');

const userTimeEntrySchema = new mongoose.Schema({

  username: {
    type: String,
    required: true,
  },

  startTime: {
    type: Date,
    required: true,
  },

  endTime: {
    type: Date,
    required: true,
  },
  
});
                            /// fehler!
const userTimeEntryModel = new model('userTimeEntry', userTimeEntrySchema, 'users');
module.exports = userTimeEntryModel;
