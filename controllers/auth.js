require("dotenv").config();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { Account } = require("@commandokoala/thenewboston");
const generateNonce = require("../utils/generate_nonce");

const authUser = async (req, res) => {
  try {
    const { account_number, signature } = req.body;

    if (!(account_number && signature)) {
      return res.json({
        errors: {},
        _message: "User validation failed",
        name: "ValidationError",
        message:
          "User validation failed: account_number: Path `account_number` and `signature` is required.",
      });
    }

    const user = await User.findOne({ account_number }).lean();

    if (!user) {
      return res.json({
        errors: {},
        _message: "User validation failed",
        name: "ValidationError",
        message:
          "User validation failed: User associated with `account_number` does not exists.",
      });
    }

    const message = `Signing my maakay.com nonce: ${user.nonce}`;

    const isValidSignature = Account.verifySignature(
      message,
      signature,
      account_number
    );

    if (!isValidSignature) {
      return res.json({
        errors: {},
        _message: "Signature validation failed",
        name: "ValidationError",
        message: "Signature validation failed: Invalid signature.",
      });
    }

    const accessToken = jwt.sign(
      { _id: user._id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1800s" }
    );

    user.nonce = generateNonce();
    await user.save();

    return res.json({ user, accessToken: accessToken });
  } catch (err) {
    return res.json(err);
  }
};

module.exports = { authUser };
