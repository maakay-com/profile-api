const Profile = require("../models/Profile");
const { GOLD_TIER_FEE } = require("../constants");

const upgradeSubscription = async (req, res) => {
  try {
    const { upgradeTier } = req.body;

    if (!upgradeTier) {
      return res.json({
        errors: {},
        _message: "User validation failed",
        name: "ValidationError",
        message:
          "User validation failed: upgradeTier: Path `upgradeTier` is required.",
      });
    }

    if (upgradeTier === "GOLD") {
      const user_id = req.user._id;
      const profile = await Profile.findOne({ user: user_id }).lean();
      return res.json({
        accountNumber: process.env.TNBC_ACCOUNT_NUMBER,
        metadata: `upgradesub_${profile.uid}_${upgradeTier}`,
        amount: GOLD_TIER_FEE,
      });
    } else {
      return res.json({
        errors: {},
        _message: "User validation failed",
        name: "ValidationError",
        message: "User validation failed: Path `upgradeTier` is invalid.",
      });
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = { upgradeSubscription };
