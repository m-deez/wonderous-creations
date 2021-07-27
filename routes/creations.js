// ROUTES creations.js
const express = require('express');
const router = express.Router();
const creationController = require('../controllers/creations');

router.get('/', creationController.index);
router.post('/:id/creations/show', creationController.weapon)

module.exports = router