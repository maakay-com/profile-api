const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const auth = require('../middleware/auth')
const {
    getProfile,
    updateProfile
} = require('../controllers/profile')


router.route('/:username').get(getProfile);
router.use('/', auth);
router.route('/').patch(updateProfile);


module.exports = router;
