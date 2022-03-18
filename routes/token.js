const express = require('express');
const router = express.Router();
const { gettoken } = require('../controllers/token')

router.get('/', gettoken)

module.exports = router;
