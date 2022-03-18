
const { social_profile } = require('../data')


const getSocialProfile = (req, res) => {
    res.json(social_profile)
}


const createSocialProfile = (req, res) => {
    res.json(social_profile)
}


const updateSocialProfile = (req, res) => {
    res.json(social_profile)
}

const deleteSocialProfile = (req, res) => {
    res.json(social_profile)
}


module.exports = {
    getSocialProfile,
    createSocialProfile,
    updateSocialProfile,
    deleteSocialProfile
}
