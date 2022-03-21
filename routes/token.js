const express = require("express");
const router = express.Router();
const { getAllToken } = require("../controllers/token");

router.get("/", getAllToken);

module.exports = router;
