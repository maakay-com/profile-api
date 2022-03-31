const express = require("express");
const router = express.Router();
const { scanPayment } = require("../controllers/scanPayment")

router.route("/").post(scanPayment);

module.exports = router;
