const express = require('express');
const WaterController = require('../controllers/water-controller');

const router = express.Router();

// define routes
router.get('', WaterController.getData);

module.exports = router;