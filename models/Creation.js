// MODELS Creation.js
//  creation model  //
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const creationSchema = new Schema(
    {
        name: { type: String, required: true },
        rarity: { type: String, required: false },
        type: { type: String, required: false },
        damageDie: { type: Number, required: false },
        element: { type: String, required: false },
        elementDamage: { type: Number, required: false },
        augment: { type: Number, required: false },
        image: { type: String, required: false },
        physDescription: { type: String, required: false },
        propertyDescription: { type: String, required: false },

        posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],

        votes: [{ type: Schema.Types.ObjectId, ref: 'Vote' }],
    },
    {
        timestamps: true,
    }
);

//  model  //
const Creation = mongoose.model('Creation', creationSchema);

//  export  //
module.exports = Creation;