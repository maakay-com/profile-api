const mongoose = require("mongoose");

const ProfileSchema = mongoose.Schema(
  {
    username: String,
    description: {
      type: String,
      default: "Awesome description.",
    },
    avatar_url: {
      type: String,
      default: "https://picsum.photos/200",
    },
    is_verified: {
      type: Boolean,
      default: false,
    },
    subscription_type: {
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
