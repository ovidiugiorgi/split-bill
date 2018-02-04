const express = require('express');

const router = express.Router();
const UserController = require('../controllers/user.controller');
const users = require('./api/users.route');

router.post('/register', UserController.createUser);
router.post('/login', UserController.authUser);

router.use('/users', users);

module.exports = router;