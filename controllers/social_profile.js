const {social_profile} = require('../data')
const SocialProfile = require('../models/SocialProfile')

const getAllSocialProfile = async (req, res) => {
    const allProfiles = await SocialProfile.find()
    res.json(allProfiles)
}

const getSocialProfile = async (req, res) => {
    const profile = await SocialProfile.findById(req.param.id)
    if (!profile) {
        throw new Error(`profile not found!`) // A custom Error should be implemented!
    }
    res.json(profile)
}

const createSocialProfile = async (req, res) => {
    // TODO: ask about the response and body!!
    const userId = req.body.user_id
    const socialMedia = req.body.social_media_id
    const username = req.body.username
    const profile = await SocialProfile.create({
        user: userId,
        socialMedia: socialMedia,
        username: username,
    })
    res.json(profile)
}

const updateSocialProfile = async (req, res) => {
    const profile = await SocialProfile.findById(req.params.id)
    if (!profile) {
        throw new Error(`profile not found!`) // A custom Error should be implemented!
    }
    profile.username = req.body.username || profile.username
    profile.user = req.body.userId || profile.user
    profile.socialMedia = req.body.social_media_id || profile.socialMedia
    res.json(await profile.save())
}

const deleteSocialProfile = async (req, res) => {
    const profile = await SocialProfile.deleteOne({_id: req.params.id})
    if (!profile) {
        throw new Error(`profile not found!`) // A custom Error should be implemented!
    }
    res.json(profile)
}

module.exports = {
    getAllSocialProfile,
    getSocialProfile,
    createSocialProfile,
    updateSocialProfile,
    deleteSocialProfile,
}
