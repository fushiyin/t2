const express = require("express");
const {
    getDailyReports,
    createNewReport,
} = require("../controllers/dailyReportController");
const { requireAuth } = require("../controllers/authController");
const router = express.Router();

router.get("/", getDailyReports);
router.post("/", requireAuth, createNewReport);

module.exports = router;
