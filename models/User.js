const mongoose = require("mongoose");
const generateNonce = require("../utils/generateNonce");
const generateRandomUsername = require("../utils/generateRandomUsername");

const UserSchema = new mongoose.Schema(
  {
    accountNumber: {
      type: String,
      required: true,
      minLength: 64,
      maxLength: 64,
    },
    nonce: {
      type: Number,
      default: generateNonce(),
    },
    uid: {
      type: String,
      default: generateRandomUsername(),
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
