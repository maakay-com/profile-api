const express = require("express");
const router = express.Router();
const { scanTransaction } = require("../controllers/scanTransaction")

router.route("/").post(scanTransaction);

module.exports = router;
