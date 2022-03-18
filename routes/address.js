const express = require('express');
const router = express.Router();

const { getAddress, createAddress, updateAddress, deleteAddress } = require('../controllers/address')


router.get('/', getAddress)
router.post('/', createAddress)
router.patch('/:uuid', updateAddress)
router.delete('/:uuid', deleteAddress)

module.exports = router;
