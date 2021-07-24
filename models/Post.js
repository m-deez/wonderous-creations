// MODELS Post.js
//  post model  //
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema(
    {
        content: { type: String, required: true },
    },
    {
    timestamps: true,
    }
);

//  model  //
const Post = mongoose.model('Post', postSchema);

//  export  //
module.exports = Post;
