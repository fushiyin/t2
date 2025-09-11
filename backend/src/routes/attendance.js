const express = require("express");
const { getCheckins } = require("../controllers/attendanceController");

const router = express.Router();

router.get("/", getCheckins);

module.exports = router;
