const Profile = require("../models/Profile");
const generateRandomUsername = require("./generateRandomUsername");

const getOrCreateProfile = async (user_id) => {
  var profile = await Profile.findOne({ user: user_id });

  if (!profile) {
    do {
      var randomUsername = generateRandomUsername();
      var profileWithUsernameExists = await Profile.findOne({
        username: randomUsername,
      });
    } while (profileWithUsernameExists);

    var profile = await Profile.create({
      username: randomUsername,
      user: user_id,
      avatarUrl: `https://avatars.dicebear.com/api/pixel-art/${randomUsername}.svg`
    });
  }

  return profile;
};

module.exports = getOrCreateProfile;
