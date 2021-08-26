const express = require('express');
const router = express.Router();
const signControllers = require('../controllers/signControllers');

// email login
router.post('/login', signControllers.login);

// TODO: oauth login
// router.post('/google');
// router.post('/github');

// logout
router.get('/logout', signControllers.logout);

module.exports = router;