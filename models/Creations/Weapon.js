// MODELS Weapon.js
//  Weapon model  //
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const weaponSchema = new Schema(
    {
        name: { type: String, required: true },
        rarity: { type: String, required: true },
        weaponType: { type: String, required: true },
        damageDie: { type: Number, required: true },
        element: { type: String, required: false },
        elementDamage: { type: Number, required: false },
        augment: { type: Number, required: false },
        image: { type: String, required: false },
        physDescription: { type: String, required: true },
        propertyDescription: { type: String, required: true },

        posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],

        votes: [{ type: Schema.Types.ObjectId, ref: 'Vote' }],
    },
    {
        timestamps: true,
    }
);

//  model  //
const Weapon = mongoose.model('Weapon', weaponSchema);

//  export  //
module.exports = Weapon;