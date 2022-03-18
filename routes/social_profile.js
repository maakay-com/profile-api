const express = require('express');
const router = express.Router();
const {
    getAllSocialProfile,
    getSocialProfile,
    createSocialProfile,
    updateSocialProfile,
    deleteSocialProfile
} = require('../controllers/social_profile')


router.route('/').get(getAllSocialProfile).post(createSocialProfile)
router.route('/uuid').get(getSocialProfile).patch(updateSocialProfile).delete(deleteSocialProfile)


module.exports = router;
