const mongoose = require("mongoose");
const generateNonce = require("../utils/generate_nonce");

const UserSchema = new mongoose.Schema(
  {
    account_number: {
      type: String,
      required: true,
      minLength: 64,
      maxLength: 64,
    },
    nonce: {
      type: Number,
      default: generateNonce(),
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
