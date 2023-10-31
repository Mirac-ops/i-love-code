const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.route('/')
.get(userController.getUsers)
.post(userController.createUser)

module.exports = router;














/* router
.route('/:id')
.get(userController.getUserById)
.put(userController.updateUserById)
.delete(userController.deleteUserById);
 */



// const express = require('express');
// const userController = require('../controllers/userController');
// const { authenticateToken } = require('../middleware/auth');



// router.post('/login', userController.login);
// router.post('/register', userController.register);
// router.get('/time-entries', authenticateToken, timeEntryController.getTimeEntries);

// module.exports = router;
