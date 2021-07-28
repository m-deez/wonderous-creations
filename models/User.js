// MODELS User.js
//  user model  //
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        googleId: String,
        creations: [{ type: Schema.Types.ObjectId, ref: 'Creation' }],
        posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }],
    },
    {
        timestamps: true,
    }
);

//  model  //
const User = mongoose.model('User', userSchema);

//  export  //
module.exports = User;
