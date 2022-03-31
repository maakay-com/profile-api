const express = require("express");
const router = express.Router();
const {
  getAllSocialProfile,
  getSocialProfile,
  createSocialProfile,
  updateSocialProfile,
  deleteSocialProfile,
} = require("../controllers/socialProfile");

router.route("/").get(getAllSocialProfile).post(createSocialProfile);
router
  .route("/id")
  .get(getSocialProfile)
  .patch(updateSocialProfile)
  .delete(deleteSocialProfile);

module.exports = router;
