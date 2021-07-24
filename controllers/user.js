// CONTROLLERS user.js

function index(req, res, next) {
    User.find({}, function(err, user) { //there was a discrepancy with the brackets in the code we were supposed to copy, so i put a bracket there to fix it but it may not be correct
        res.render('user/index', {
            user,
            user: req.user
        });
    });
}