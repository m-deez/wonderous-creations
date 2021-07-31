// MODELS Creation.js
//  Creation model  //
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

function update (req, res) {
    Creation.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        image: req.body.image,
        propertyDescription: req.body.propertyDescription,
    }, function (err, user) {
        if(err) res.send(err);
        res.redirect('back');
    })
};

function index (req, res) {
    res.render('/index/profiles', {
        user: req.user,
    })
};

const creationSchema = new Schema(
    {
        name: { type: String, required: true },
        creationType: { type: String, required: false },
        rarity: { type: String, required: false },
        weaponType: { type: String, required: false },
        damageDie: { type: Number, required: false },
        element: { type: String, required: false },
        elementDamage: { type: Number, required: false },
        armorType: { type: String, required: false },
        armorValue: { type: Number, required: false },
        itemType: { type: String, required: false },
        slot: { type: String, required: false },
        augment: { type: String, required: false },
        image: { type: String, required: false },
        physDescription: { type: String, required: false },
        propertyDescription: { type: String, required: false },

        posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
    }
);


//  model  //
const Creation = mongoose.model('Creation', creationSchema);

//  export  //
module.exports = Creation;