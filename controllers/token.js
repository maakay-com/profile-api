const { tokens } = require("../data");
const Token = require("../models/Token");

const getAllToken = async (req, res) => {
  const tokens = await Token.find({});
  return res.json(tokens);
};

module.exports = { getAllToken };
