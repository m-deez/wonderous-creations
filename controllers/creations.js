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
    if(req.params.id) {
        Creation.findById(req.params.id, (err, creation) => {
            if (err) return res.send(err);
            res.render('creations/weapon', {creation})
        })
    } else {
        res.render('creations/weapon', {creation: null})
    }
}

function newArmor(req, res) {
    if(req.params.id) {
        Creation.findById(req.params.id, (err, creation) => {
            if (err) return res.send(err);
            res.render('creations/armor', {creation})
        })
    } else {
        res.render('creations/armor', {creation: null})
    }
}

function newOther(req, res) {
    if(req.params.id) {
        Creation.findById(req.params.id, (err, creation) => {
            if (err) return res.send(err);
            res.render('creations/other', {creation})
        })
    } else {
        res.render('creations/other', {creation: null})
    }
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
        weaponType: req.body.weaponType,
        armorType: req.body.armorType,
        itemType: req.body.itemType,
        element: req.body.element,
        elementDamage: req.body.elementDamage,
        augment: req.body.augment,
        physDescription: req.body.physDescription,
        propertyDescription: req.body.propertyDescription,
    },
    (err, creation) => {
        if (err) return res.send(err);
        res.redirect('/show');
    })
}

function deleteCreation(req, res) {
    Creation.findByIdAndRemove(req.params.id, (err) => {
        if (err) return res.send(err);
        console.log("successful delete")
        res.redirect("/show")
    })
}

function newPost(req, res) {
    if(req.params.id) {
        Creation.posts.findById(req.params.id, (err, post) => {
            if (err) return res.send(err);
            res.render('creations/details/:id', {post})
        })
    } else {
        res.render('creations/details/:id', {post: null})
    }
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
    newPost,
}