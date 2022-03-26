const mongoose = require("mongoose");

const ProfileSchema = mongoose.Schema(
  {
    username: String,
    description: {
      type: String,
      default: "Awesome description.",
    },
    avatarUrl: {
      type: String
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    subscriptionType: {
      type: String,
      enum: ["IRON", "GOLD", "DIAMOND"],
      default: "IRON",
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Profile", ProfileSchema);
