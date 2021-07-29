// ROUTES creations.js
const express = require('express');
const router = express.Router();
const creationController = require('../controllers/creations');

router.get('/', creationController.show);
router.get('/new', creationController.newCreation);
//router.get('/show/:id', creationController.details);
router.post('/creations', creationController.create);
//router.post('/:id', creationController.add);

module.exports = router;