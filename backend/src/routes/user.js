const express = require("express");
const router = express.Router();
const { getAllUsers, getUserById, updateUser, resetPassword } = require("../controllers/userController");

router.get("/", getAllUsers);

router.get("/:id", getUserById);

router.patch("/:id", updateUser);

router.patch("/:id/reset-password", resetPassword);

module.exports = router;
