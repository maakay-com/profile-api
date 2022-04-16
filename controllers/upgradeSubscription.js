const Profile = require("../models/Profile");

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

    if (upgradeTier === "GOLD" || upgradeTier === "DIAMOND") {
      const user_id = req.user._id;
      const profile = await Profile.findOne({ user: user_id }).lean();
      return res.json({
        accountNumber: process.env.TNBC_ACCOUNT_NUMBER,
        metadata: `upgradesub_${profile._id}_${upgradeTier}`,
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
