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

function newWeapon(req, res) {
    res.render('creations/weapon', {})
}

function newArmor(req, res) {
    res.render("creations/armor", {})
}

function newOther(req, res) {
    res.render("creations/other", {})
}

function create(req, res) {
    console.log(req.body)
    const creation = new Creation(req.body);
    creation.save((err) => {
        if(err) return res.send(err);
        return res.redirect('/show');
    })
}

function details(req, res) {
    Creation.findById(req.params.id, (err, creation) => {
        if (err) return res.send(err);
        creation.save((err) => {
            res.render('creations/details', {creation});
        })
    })
}

function updateCreation(req, res) {
    Creation.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        rarity: req.body.rarity,
        element: req.body.elememt,
        elementDamage: req.body.elememtDamage,
        augment: req.body.augment,
        physDescription: req.body.physDescription,
        propertyDescription: req.body.propertyDescription,
    },
    (err, creation) => {
        if (err) return res.send(err);
        res.render(`creations/${creation._id}/edit`, {creation});
    })
}

function deleteCreation(req, res) {
    Creation.findByIdAndDelete(req.prams.id, (err) => {
        if (err) return res.send(err);
        console.log("successful delete")
        res.redirect("/show")
    })
}

module.exports = {
    show,
    create,
    newCreation,
    newOther,
    newArmor,
    newWeapon,
    details,
    updateCreation,
    deleteCreation,
}