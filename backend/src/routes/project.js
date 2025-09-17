const express = require("express");

const {
    getProjects,
    addNewProject,
    updateProject,
    getProjectById,
} = require("../controllers/projectController");

const router = express.Router();

router.get("/", getProjects);
router.post("/", addNewProject);
router.patch("/:id", updateProject);
router.get("/:id", getProjectById);

module.exports = router;
