// CONTROLLERS users.js

const User = require('../models/User');

function index(req, res) {
    User.find({}, function(err, users) {
        res.render('users/index', {
            users,
            user: req.user
        });
    });
}

  module.exports = {
    index
}