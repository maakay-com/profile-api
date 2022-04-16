const express = require("express");
const router = express.Router();

const { upgradeSubscription } = require("../controllers/upgradeSubscription");
const auth = require("../middleware/auth");

router.use("/", auth);
router.route("/").post(upgradeSubscription);

module.exports = router;
