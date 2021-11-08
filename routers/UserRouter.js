const express = require('express');
const userController = require('../controllers/UserController');
const auth = require ('../middleware/auth');

const router = express.Router();

router.route('/').post(userController.createUser);
router.use(auth.isAdminValidated);
router.route('/').get(userController.getUsers);

module.exports = router;