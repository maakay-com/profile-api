const { profile } = require('../data')


const getProfile = (req, res) => {
    const { username } = req.params;
    const singleUser = profile.find(
        (user) => user.username === username
    )

    if (!singleUser) {
        return res.status(404).json({'detail': 'Not Found'})
    }

    return res.json(singleUser)
}


const updateProfile = (req, res) => {
    const { username } = req.params;
    const singleUser = profile.find(
        (user) => user.username === username
    )

    if (!singleUser) {
        return res.status(404).json({'detail': 'Not Found'})
    }

    return res.json(singleUser)
}


module.exports = {
    getProfile,
    updateProfile
}
