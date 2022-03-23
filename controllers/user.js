const User = require("../models/User");
const getOrCreateProfile = require("../utils/getOrCreateProfile");

const getOrCreateUser = async (req, res) => {
  try {
    const accountNumber = req.body.accountNumber;

    const user = await User.findOne({ account_number: account_number }).lean();

    if (!user) {
      const user = await User.create(req.body);
      await getOrCreateProfile(user._id);
      return res.json(user);
    } else {
      await getOrCreateProfile(user._id);
      return res.json(user);
    }
  } catch (err) {
    return res.json(err);
  }
};

module.exports = { getOrCreateUser };
