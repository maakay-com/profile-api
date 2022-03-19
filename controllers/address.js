const { address } = require('../data')
const Address = require('../models/Address')


const getAllAddress = async (req, res) => {

    try {
        const user_id = req.user._id
        const addresses = await Address.find({ user: user_id })
        return res.json(addresses)

    } catch (err) {
        return res.json(err)
    }
}


const getAddress = (req, res) => {
    return res.json(address)
}


const createAddress = async (req, res) => {
    try {
        req.body.user = req.user._id
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
