const express = require("express");
const { getLeaveRequests } = require("../controllers/RequestController");

const router = express.Router();

router.get("/", getLeaveRequests);

module.exports = router;
