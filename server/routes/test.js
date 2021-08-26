const express = require('express');
const router = express.Router();
const testControllers = require('../controllers/testControllers');

router.get('/', testControllers.test);
router.get('/:id', testControllers.select);

module.exports = router;