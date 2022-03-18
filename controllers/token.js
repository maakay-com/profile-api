const { tokens } = require('../data')

const gettoken = (req, res) => {
    return res.json(tokens)
}

module.exports = { gettoken }
