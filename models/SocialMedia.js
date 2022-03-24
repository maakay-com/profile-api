const mongoose = require("mongoose");

const SocialMediaSchema = mongoose.Schema(
  {
    title: String,
    logoUrl: String,
    baseUrl: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("SocialMedia", SocialMediaSchema);
