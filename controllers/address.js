const { address } = require('../data')

const createAddress = (req, res) => {
    return res.json(address)
}

module.exports = { createAddress }
