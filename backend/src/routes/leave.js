const express = require("express");
const {
    getLeaveRequests,
    updateLeaveRequestStatus,
    addRequest,
    getLeaveRequestsById,
} = require("../controllers/RequestController");
const { requireAuth } = require("../controllers/authController");

const router = express.Router();

router.get("/", requireAuth, getLeaveRequests);
router.patch("/:id/status", requireAuth, updateLeaveRequestStatus);
router.get("/:id", requireAuth, getLeaveRequestsById);
router.post("/", requireAuth, addRequest);

module.exports = router;
