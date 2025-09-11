const express = require("express");
const {
    handleCheckin,
    handleBind,
    handleLogin,
    requireAuth,
    handleCheckout,
    handleCheckinStatusUpdate,
    getCurrentStatus,
    Login,
} = require("../controllers/authController");

const router = express.Router();

router.post("/checkin", handleCheckin);
router.post("/bind", handleBind);

router.post("/login", handleLogin);
router.post("/logout", requireAuth, handleCheckout);
router.post('/sign-in', Login);

router.get("/status", requireAuth, (req, res) => {
    res.json({
        authenticated: true,
        username: req.session.userId,
        role: req.userRole,
    });
});

router.patch("/checkin-status", requireAuth, handleCheckinStatusUpdate);
router.get("/checkin-status", requireAuth, getCurrentStatus);

module.exports = router;
