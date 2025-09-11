const express = require("express");
const { getDashboardSummary, getGeneralStats } = require("../controllers/dashboardController");

const router = express.Router();

router.get("/summary", getDashboardSummary);
router.get("/stats", getGeneralStats);

module.exports = router;
