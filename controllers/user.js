const { users } = require('../data')

const getUserProfile = (req, res) => {
    const { username } = req.params;
    const singleUser = users.find(
        (user) => user.username === username
    )

    if (!singleUser) {
        return res.status(404).json({'detail': 'Not Found'})
    }

    return res.json(singleUser)
}

module.exports = { getUserProfile }
