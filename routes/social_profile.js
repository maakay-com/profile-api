const express = require('express');
const router = express.Router();
const { getSocialProfile, createSocialProfile, updateSocialProfile, deleteSocialProfile } = require('../controllers/social_profile')


router.get('/', getSocialProfile)
router.post('/', createSocialProfile)
router.patch('/:uuid', updateSocialProfile)
router.delete('/:uuid', deleteSocialProfile)


module.exports = router;
