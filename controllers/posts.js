// CONTROLLERS posts.js
const Creation = require('../models/Creation');


function newPost(req, res) {
    Creation.findById(req.params.id, (err, creation) => {
        if (err) return res.send(err);
        creation.posts.push(req.body);
        creation.save((err) => {
            if (err) return res.send(err);
            res.render("creations/details", {
                title: "Add Comment",
                creation,
            })
        })
    })
}

module.exports = {
    newPost,
}