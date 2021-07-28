// ROUTES creations.js
const express = require('express');
const router = express.Router();
const creationController = require('../controllers/creations');

router.get('/', creationController.index);
//router.get('/new', creationController.new);
// router.get('/:id', creationController.show);
router.post('/', creationController.create);
router.post('/:id', creationController.add);

module.exports = router;