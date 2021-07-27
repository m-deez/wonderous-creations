// MODELS Creation.js
//  Creation model  //
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const creationSchema = new Schema(

        {
            name: String,
        }

    // {
    //     name: { type: String, required: true },
    //     rarity: { type: String, required: false },
    //     weaponType: { type: String, required: false },
    //     damageDie: { type: Number, required: false },
    //     element: { type: String, required: false },
    //     elementDamage: { type: Number, required: false },
    //     armorType: { type: String, required: false },
    //     armorValue: { type: Number, required: false },
    //     itemType: { type: String, required: false },
    //     slot: { type: String, required: false },
    //     augment: { type: Number, required: false },
    //     image: { type: String, required: false },
    //     physDescription: { type: String, required: false },
    //     propertyDescription: { type: String, required: false },

    //     posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
    // }
);

//  model  //
const Creation = mongoose.model('Creation', creationSchema);

//  export  //
module.exports = Creation;