const express = require('express');
const router = express.Router();
const {
    getProfile,
    updateProfile
} = require('../controllers/profile')


router.route('/:username').get(getProfile).patch(updateProfile)


module.exports = router;
