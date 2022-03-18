const express = require('express');
const router = express.Router();
const { getUser } = require('../controllers/user')


router.get('/:account_number', getUser)


module.exports = router;
