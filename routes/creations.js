// ROUTES creations.js
const express = require('express');
const router = express.Router();
const creationController = require('../controllers/creations');

router.get('/editCreation/:id', creationController.newWeapon);
router.get('/', creationController.show);
router.get('/new', creationController.newCreation);
router.get('/weapon', creationController.newWeapon);
router.get('/armor', creationController.newArmor);
router.get('/other', creationController.newOther);
router.post('/show', creationController.create)
router.get('/details/:id', creationController.details);
router.get('/delete/:id', creationController.deleteCreation);
router.put('/show/:id', creationController.updateCreation);

module.exports = router;