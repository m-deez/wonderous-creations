// ROUTES index.js
const express = require('express');
const router = require('express').Router();
const passport = require('passport');
const indexControllers = require('../controllers/index');

//router.get('/', indexControllers.index);
router.get('/', function (req, res) {
    res.render('index', {
        user: req.user,
    });
});

//  google oauth login route  //
router.get(
    '/auth/google',
    passport.authenticate('google', { scope: ['profile', 'email'] })
);
//  google oauth callback route  //
router.get(
    '/oauth2callback',
    passport.authenticate('google', {
      successRedirect: '/user',
      failureRedirect: '/',
    })
);
//  oauth logout route  //
router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});
  
module.exports = router;