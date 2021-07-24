// MODELS Vote.js
//  vote model  //
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const voteSchema = new Schema(
    {
        content: { type: Number, required: true },
    },
    {
    timestamps: true,
    }
);

//  model  //
const Vote = mongoose.model('Vote', voteSchema);

//  export  //
module.exports = Vote;
