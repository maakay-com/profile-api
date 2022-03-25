const { profile_links } = require("../data");
const ProfileLink = require("../models/ProfileLink");

const getAllProfileLink = async (req, res) => {
  try {
    const user_id = req.user._id;
    const profileLinks = ProfileLink.find({ user: user_id }).lean();
    res.json(profileLinks);
  } catch (err) {
    res.json(err);
  }
};

const getProfileLink = (req, res) => {
  res.json(profile_links);
};

const createProfileLink = (req, res) => {
  res.json(profile_links);
};

const updateProfileLink = (req, res) => {
  res.json(profile_links);
};

const deleteProfileLink = (req, res) => {
  res.json(profile_links);
};

module.exports = {
  getAllProfileLink,
  getProfileLink,
  createProfileLink,
  updateProfileLink,
  deleteProfileLink,
};
