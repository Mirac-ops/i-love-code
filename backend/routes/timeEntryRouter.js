const express = require('express');
const router = express.Router();
const timeEntryController = require ('../controller/timeEntryController');

router.route('/')         
.get(timeEntryController.getAllTimeEntries)
.post(timeEntryController.createTimeEntry)


module.exports = router;

