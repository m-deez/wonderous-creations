const express = require('express');
const router = express.Router();
const creationController = require('../controllers/creation');

router.get("/", creationController.index)
router.get("/creations", creationController.weapon)

module.exports = router