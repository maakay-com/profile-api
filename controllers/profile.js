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


const updateProfile = async (req, res) => {

    try {
        const user_id = req.user._id
        const profile = await Profile.findOne({ user: user_id })

        if ( profile.subscription_type === "IRON" ) {

            const { description, avatar_url } = req.body
            const newProfile = await Profile.findOneAndUpdate({ user: user_id }, { description: description, avatar_url: avatar_url }, { new: true })
            res.json(newProfile)

        } else {

            const { username, description, avatar_url } = req.body
            const profileWithUsernameExists = await Profile.exists({ username: username, user: {$ne: user_id} })

            if (profileWithUsernameExists) {
                return res.json({
                    "errors": {},
                    "_message": "Username Not Available",
                    "name": "ValidationError",
                    "message": "Username Not Available: User with `username` already exists."
                })

            } else {
                const newProfile = await Profile.findOneAndUpdate({ user: user_id }, { username: username, description: description, avatar_url: avatar_url }, { new: true })
                res.json(newProfile)
            }
        }
    } catch (err) {
        return res.json(err)
    }
}


module.exports = {
    getProfile,
    updateProfile
}
