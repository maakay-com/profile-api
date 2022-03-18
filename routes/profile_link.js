const express = require('express');
const router = express.Router();
const { getProfileLink, createProfileLink, updateProfileLink, deleteProfileLink } = require('../controllers/profile_link')


router.get('/', getProfileLink)
router.post('/', createProfileLink)
router.patch('/:uuid', updateProfileLink)
router.delete('/:uuid', deleteProfileLink)


module.exports = router;
