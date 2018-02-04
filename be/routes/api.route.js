const express = require('express');

const router = express.Router();
const UserController = require('../controllers/user.controller');
const users = require('./api/users.route');
const bills = require('./api/bills.route');

router.post('/register', UserController.createUser);
router.post('/login', UserController.authUser);

router.use('/users', users);
router.use('/bills', bills);

module.exports = router;