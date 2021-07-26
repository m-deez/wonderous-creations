// CONTROLLERS users.js

const User = require('../models/User');
function index(req, res, next) {
    User.find({}, function(err, users) { //there was a discrepancy with the brackets in the code we were supposed to copy, so i put a bracket there to fix it but it may not be correct
        res.render('users/index', {
            users,
            user: req.user
        });
    });
}

  module.exports = {
    index
}