// CONTROLLERS creations.js
const Creation = require('../models/Creation');

function index(req, res) {
    Creation.find({}, (err, creations) => {
        if (err)
            return res.send(err);
            res.render("creations/index", {creations});
    })
}

function create(req, res) {
    const creation = new Creation(req.body);
    creation.save((err) => {
        if(err)
        return res.send(err);
        return res.redirect("/creations")
    })
}


module.exports = {
    index,
    creation,
    create,
}