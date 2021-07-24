// MODELS Armor.js
//  Armor model  //
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const armorSchema = new Schema(
    {
        name: { type: String, required: true },
        rarity: { type: String, required: true },
        armorType: { type: String, required: true },
        armorValue: { type: Number, required: true },
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
const Armor = mongoose.model('Armor', armorSchema);

//  export  //
module.exports = Armor;