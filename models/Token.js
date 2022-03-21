const mongoose = require("mongoose");

const TokenSchema = mongoose.Schema(
  {
    name: String,
    symbol: String,
    logo_url: String,
    requires_metadata: Boolean,
    token_info_url: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Token", TokenSchema);
