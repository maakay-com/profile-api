const mongoose = require("mongoose");

const ProfileLinkSchema = mongoose.Schema(
  {
    title: String,
    url: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ProfileLink", ProfileLinkSchema);
