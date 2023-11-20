const mongoose = require("mongoose");
const userTimeEntrySchema = new mongoose.Schema({
  username: {
    type: String,
    ref: "User", // Referenz auf den "username" im User-Models
    required: true,
  },
  startTime: {
    type: String,
    required: true,
  },
  endTime: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});
const UserTimeEntry = mongoose.model("UserTimeEntry", userTimeEntrySchema, "userTimeEntries");
module.exports = UserTimeEntry;


