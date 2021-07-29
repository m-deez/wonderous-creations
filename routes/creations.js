// ROUTES creations.js
const express = require('express');
const router = express.Router();
const creationController = require('../controllers/creations');

router.get('/', creationController.show);
router.get('/new', creationController.newCreation);
//router.get('/show/:id', creationController.details);
router.get('/weapon', creationController.newWeapon);
router.get('/armor', creationController.newArmor);
router.get('/other', creationController.newOther);
//router.post('/:id', creationController.add);

module.exports = router;