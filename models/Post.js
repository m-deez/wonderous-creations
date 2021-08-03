// MODELS Post.js
//  post model  //
const mongoose = require('mongoose');
const Schema = mongoose.Schema;



//  model  //
const Post = mongoose.model('Post', postSchema);

//  export  //
module.exports = Post;
