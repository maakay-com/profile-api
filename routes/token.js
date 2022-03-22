const express = require("express");
const { getAllToken } = require("../controllers/token");

const router = express.Router();

router.get("/", getAllToken);

module.exports = router;
