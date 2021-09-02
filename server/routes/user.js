const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');
const { isAuthorized } = require('../middleware/auth')

router.use('/', isAuthorized);

router.get('/info', userControllers.userInfo);
router.put('/info', userControllers.editUser);
router.delete('/info', userControllers.deleteUser);

router.get('/favorite', userControllers.favoriteList);
router.post('/favorite', userControllers.addFavorite);
router.delete('/favorite', userControllers.deleteFavorite);

module.exports = router;