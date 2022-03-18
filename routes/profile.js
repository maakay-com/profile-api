const express = require('express');
const router = express.Router();
const { getProfile, updateProfile } = require('../controllers/profile')


router.get('/:username', getProfile)
router.patch('/:username', updateProfile)


module.exports = router;
