const { assets } = require('../data')

const getAsset = (req, res) => {
    return res.json(assets)
}

module.exports = { getAsset }
