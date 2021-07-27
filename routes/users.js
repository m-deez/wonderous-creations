// ROUTES users.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/users');

router.get('/', userController.index);
router.get('/users', isLoggedIn, userController.index);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
  }

module.exports = router;