const mongoose = require("mongoose");

const SocialProfileSchema = mongoose.Schema(
  {
    username: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    socialMedia: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SocialMedia",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("SocialProfile", SocialProfileSchema);
