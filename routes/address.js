const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')

const {
    getAllAddress,
    getAddress,
    createAddress,
    updateAddress,
    deleteAddress
} = require('../controllers/address')

router.use('/', auth)
router.use('/:id', auth)
router.route('/').get(getAllAddress).post(createAddress)
router.route('/:id').get(getAddress).patch(updateAddress).delete(deleteAddress)


module.exports = router;
