// CONTROLLERS creations.js
const Creation = require('../models/Creation');

function index(req, res) {
    Creation.find({}, (err, creations) => {
        if (err)
            return res.send(err);
            res.render("creations/show", {creations});
    })
}

function weapon(req, res) {
    const weapon = new Creation(req.body);
    weapon.save((err) => {
        if(err)
        return res.send(err);
        return res.redirect("/creations/show")
    })
}

module.exports = {
    index,
    weapon,
}