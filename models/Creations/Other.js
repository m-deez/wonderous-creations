// MODELS Other.js
//  Other model  //
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const otherSchema = new Schema(
    {
        name: { type: String, required: true },
        rarity: { type: String, required: true },
        itemType: { type: String, required: true },
        slot: { type: String, required: true },
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
const Other = mongoose.model('Other', otherSchema);

//  export  //
module.exports = Other;