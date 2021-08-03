// ROUTES posts.js
const express = require('express');
const router = express.Router();
const postController = require('../controllers/posts');

router.post('/details/:id', postController.newPost);

module.exports = router;