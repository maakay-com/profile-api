
const { profile_links } = require('../data')


const getAllProfileLink = (req, res) => {
    res.json(profile_links)
}

const getProfileLink = (req, res) => {
    res.json(profile_links)
}


const createProfileLink = (req, res) => {
    res.json(profile_links)
}


const updateProfileLink = (req, res) => {
    res.json(profile_links)
}

const deleteProfileLink = (req, res) => {
    res.json(profile_links)
}


module.exports = {
    getAllProfileLink,
    getProfileLink,
    createProfileLink,
    updateProfileLink,
    deleteProfileLink
}
