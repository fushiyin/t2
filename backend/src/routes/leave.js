const express = require("express");
const {
    getLeaveRequests,
    updateLeaveRequestStatus,
} = require("../controllers/RequestController");

const router = express.Router();

router.get("/", getLeaveRequests);
router.patch("/:id/status", updateLeaveRequestStatus);

module.exports = router;
