const express = require('express');
const router = express.Router();
const timeEntryController = require ('../controller/timeEntryController');

router.route('/')         
.get(timeEntryController.getTimeEntry)
.post(timeEntryController.getSaveTimeEntry)


module.exports = router;

