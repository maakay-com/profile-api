const express = require('express');
const router = express.Router();
const { getOrCreateUser } = require('../controllers/user')


router.post('/', getOrCreateUser)


module.exports = router;
