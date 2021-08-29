const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');
const { isAuthorized } = require('../middleware/auth')

router.use('/:id', isAuthorized);

router.get('/:id', userControllers.userInfo);
router.put('/:id', userControllers.editUser);
router.delete('/:id', userControllers.deleteUser);

router.get('/:id/favorite', userControllers.favoriteList);
router.post('/:id/favorite', userControllers.addFavorite);
router.delete('/:id/favorite', userControllers.deleteFavorite);

module.exports = router;