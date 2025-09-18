const express = require("express");
const {
    requireAuth,
    handleCheckout,
    handleCheckinStatusUpdate,
    getCurrentStatus,
    Login,
} = require("../controllers/authController");

const router = express.Router();


router.post("/logout", requireAuth, handleCheckout);
router.post('/sign-in', Login);

router.patch("/checkin-status", requireAuth, handleCheckinStatusUpdate);
router.get("/checkin-status", requireAuth, getCurrentStatus);

module.exports = router;
