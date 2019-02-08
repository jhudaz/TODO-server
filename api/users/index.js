const express = require('express');
const UserController = require('./UserController');
const router = express.Router();

router.post('/auth', UserController.authenticate);
router.get('/getUser', UserController.getUser);

module.exports = router;