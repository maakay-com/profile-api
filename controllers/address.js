const { address } = require('../data')


const getAddress = (req, res) => {
    return res.json(address)
}


const createAddress = (req, res) => {
    return res.json(address)
}


const updateAddress = (req, res) => {
    return res.json(address)
}


const deleteAddress = (req, res) => {
    return res.json(address)
}


module.exports = {
    createAddress,
    updateAddress,
    deleteAddress,
    getAddress
}
