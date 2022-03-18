const { users } = require('../data')


const getUser = (req, res) => {
    const { account_number } = req.params;
    const singleUser = users.find(
        (user) => user.account_number === account_number
    )

    if (!singleUser) {
        return res.status(404).json({'detail': 'Not Found'})
    }

    return res.json(singleUser)
}

module.exports = { getUser }
