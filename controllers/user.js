// CONTROLLERS user.js

const User = require('../models/User');

function index(req, res, next) {
    User.find({}, function(err, user) { //there was a discrepancy with the brackets in the code we were supposed to copy, so i put a bracket there to fix it but it may not be correct
        res.render('user/index', {
            user,
            user: req.user
        });
    });
}
function addName(req, res, next) {
    req.user.names.push(req.body);
    req.user.save(function (err) {
      res.redirect("/user");
    });
  }

  module.exports = {
    index,
    User,
    addName,
}