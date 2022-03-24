const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const {
  getProfile,
  getPublicProfile,
  updateProfile,
} = require("../controllers/profile");

router.route("/:username").get(getPublicProfile);
router.use("/", auth);
router.route("/").get(getProfile).patch(updateProfile);

module.exports = router;
