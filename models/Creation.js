// MODELS Creation.js
//  Creation model  //
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema(
    {
        post: { type: String, required: true },
    },
    {
        timestamps: true,
    }
);

const creationSchema = new Schema(
    {
        name: { type: String, required: true },
        creationType: { type: String, required: false },
        rarity: { type: String, required: false },
        weaponType: { type: String, required: false },
        damageDie: { type: String, required: false },
        element: { type: String, required: false },
        elementDamage: { type: String, required: false },
        armorType: { type: String, required: false },
        armorValue: { type: Number, required: false },
        itemType: { type: String, required: false },
        slot: { type: String, required: false },
        augment: { type: String, required: false },
        image: { type: String, required: false },
        physDescription: { type: String, required: false },
        propertyDescription: { type: String, required: false },

        posts: [postSchema],
    }
);

//  model  //
const Creation = mongoose.model('Creation', creationSchema);

//  export  //
module.exports = Creation;