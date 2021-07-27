// ROUTES index.js
const express = require('express');
const router = express.Router();
//const passport = require('passport');
const indexController = require('../controllers/index');

// router.get('/', indexController.index);

router.get('/', function (req, res) {
    res.render('index', {
        user: req.user,
    });
});

/*
//  google oauth login route  //
router.get(
    '/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);
//  google oauth callback route  //
router.get(
    '/oauth2callback',
    passport.authenticate('google', {
      successRedirect: '/users',
      failureRedirect: '/',
    })
);
//  oauth logout route  //
router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});
*/

module.exports = router;