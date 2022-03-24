const Profile = require("../models/Profile");
const Address = require("../models/Address");
const SocialProfile = require("../models/SocialProfile");
const ProfileLink = require("../models/ProfileLink");

const getPublicProfile = async (req, res) => {
  try {
    const { username } = req.params;
    const profile = await Profile.findOne({ username: username }).lean();

    if (profile) {
      var addresses = await Address.find({ user: profile.user }).lean();
      var socialProfile = await SocialProfile.findOne({
        user: profile.user,
      }).lean();
      var profileLink = await ProfileLink.findOne({
        user: profile.user,
      }).lean();
    }
    return res.json({ profile, addresses, socialProfile, profileLink });
  } catch (err) {
    return res.json(err);
  }
};

const updateProfile = async (req, res) => {
  try {
    const user_id = req.user._id;
    const profile = await Profile.findOne({ user: user_id }).lean();

    if (profile.subscriptionType === "IRON") {
      const { description, avatarUrl } = req.body;
      const newProfile = await Profile.findOneAndUpdate(
        { user: user_id },
        { description: description, avatarUrl: avatarUrl },
        { new: true }
      ).lean();
      res.json(newProfile);
    } else {
      const { username, description, avatarUrl } = req.body;
      const profileWithUsernameExists = await Profile.exists({
        username: username,
        user: { $ne: user_id },
      });

      if (profileWithUsernameExists) {
        return res.json({
          errors: {},
          _message: "Username Not Available",
          name: "ValidationError",
          message:
            "Username Not Available: User with `username` already exists.",
        });
      } else {
        const newProfile = await Profile.findOneAndUpdate(
          { user: user_id },
          {
            username: username,
            description: description,
            avatarUrl: avatarUrl,
          },
          { new: true }
        ).lean();
        res.json(newProfile);
      }
    }
  } catch (err) {
    return res.json(err);
  }
};

const getProfile = async (req, res) => {
  try {
    const user_id = req.user._id;
    const profile = await Profile.findOne({ user: user_id }).lean();
    if (profile) {
      var addresses = await Address.find({ user: profile.user }).lean();
      var socialProfile = await SocialProfile.findOne({
        user: profile.user,
      }).lean();
      var profileLink = await ProfileLink.findOne({
        user: profile.user,
      }).lean();
    }
    return res.json({ profile, addresses, socialProfile, profileLink });
  } catch (err) {
    return res.json(err);
  }
};

module.exports = {
  getProfile,
  getPublicProfile,
  updateProfile,
};
