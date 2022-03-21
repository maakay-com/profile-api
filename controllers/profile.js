const { profile } = require('../data')
const Profile = require('../models/Profile')
const Address = require('../models/Address')


const getProfile = async (req, res) => {

    try {
        const { username } = req.params;
        const profile = await Profile.findOne({ username: username })

        if (profile) {
            var addresses = await Address.find({ user: profile.user })
        }
        return res.json({ profile, addresses })

    } catch (err) {
        return res.json(err)
    }
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
