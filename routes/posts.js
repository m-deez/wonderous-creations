// ROUTES posts.js
const express = require('express');
const router = express.Router();
const postController = require('../controllers/posts');

router.post('/:id', postController.newPost);

module.exports = router;