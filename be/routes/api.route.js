const express = require('express');

const router = express.Router();
const users = require('./api/users.route');

router.use('/users', users);

module.exports = router;