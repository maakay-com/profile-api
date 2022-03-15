const express = require('express');
const router = express.Router();
const { getAsset } = require('../controllers/asset')

router.get('/', getAsset)

module.exports = router;
