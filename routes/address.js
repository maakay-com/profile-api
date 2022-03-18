const express = require('express');
const router = express.Router();

const {
    getAllAddress,
    getAddress,
    createAddress,
    updateAddress,
    deleteAddress
} = require('../controllers/address')


router.route('/').get(getAllAddress).post(createAddress)
router.route('/:uuid').get(getAddress).patch(updateAddress).delete(deleteAddress)


module.exports = router;
