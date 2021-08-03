// CONTROLLERS posts.js
const Post = require('../models/Post');
const Creation = require('../models/Creation');


function newPost(req, res) {
    Creation.find(req.params.id, (err, creation) => {
        if (err) return res.send(err);
        creation[0].posts.push(req.body);
        creation[0].save((err) => {
            if (err) return res.send(err);
            res.render("creation/details", {
                title: "Add Comment",
                creation,
            })
        })
    })
}

module.exports = {
    newPost,
}