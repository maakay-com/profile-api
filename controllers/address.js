const { address } = require('../data')
const Address = require('../models/Address')


const getAllAddress = (req, res) => {
    return res.json(address)
}


const getAddress = (req, res) => {
    return res.json(address)
}


const createAddress = async (req, res) => {
    try {
        const address = await Address.create(req.body)
        return res.json(address)
    } catch (err) {
        return res.json(err)
    }
}


const updateAddress = (req, res) => {
    return res.json(address)
}


const deleteAddress = (req, res) => {
    return res.json(address)
}


module.exports = {
    getAllAddress,
    createAddress,
    updateAddress,
    deleteAddress,
    getAddress
}
