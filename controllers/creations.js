// CONTROLLERS creations.js
const Creation = require('../models/Creation');

function show(req, res) {
    Creation.find({}, (err, creations) => {
        if (err)
            return res.send(err);
            res.render('creations/show', {creations});
    })
}

function newCreation(req, res) {
    res.render("creations/new", {})
}

function create(req, res) {
    const creation = new Creation(req.body);
    creation.save((err) => {
        if(err)
        return res.send(err);
        return res.redirect('/show')
    })
}

module.exports = {
    show,
    create,
    newCreation,
}