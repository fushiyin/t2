const { Op } = require("sequelize");
const { Project } = require("../models/project");

async function getProjects(req, res) {
    try {
        const {
            search,
            status,
            project_manager,
            start_date,
            end_date,
            page = 1,
            limit = 20,
        } = req.query;

        const where = {};

        if (search) {
            where[Op.or] = [
                { name: { [Op.like]: `%${search}%` } },
                { description: { [Op.like]: `%${search}%` } },
                { client_name: { [Op.like]: `%${search}%` } },
            ];
        }

        if (status) where.status = status;
        if (project_manager) where.project_manager = project_manager;

        if (start_date && end_date) {
            where.start_date = { [Op.gte]: start_date };
            where.end_date = { [Op.lte]: end_date };
        } else if (start_date) {
            where.start_date = { [Op.gte]: start_date };
        } else if (end_date) {
            where.end_date = { [Op.lte]: end_date };
        }

        const pageNum = Math.max(1, parseInt(page, 10) || 1);
        const pageSize = Math.max(1, parseInt(limit, 10) || 20);
        const offset = (pageNum - 1) * pageSize;

        const { rows, count } = await Project.findAndCountAll({
            where,
            limit: pageSize,
            offset,
            order: [["start_date", "DESC"]],
        });

        res.json({ data: rows, total: count, page: pageNum, pageSize });
    } catch (err) {
        console.error("Failed to fetch projects", err);
        res.status(500).json({
            error: "Failed to fetch projects",
            details: err.message,
        });
    }
}

async function getProjectById(req, res) {
    try {
        const project = await Project.findByPk(req.params.id);
        if (!project)
            return res.status(404).json({ error: "Project not found" });
        res.json({ data: project });
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch project" });
    }
}

async function addNewProject(req, res) {
    try {
        const {
            name,
            description,
            client_name,
            project_manager,
            start_date,
            end_date,
            status,
            budget,
            actual_cost,
        } = req.body;
        const newProject = await Project.create({
            name,
            description,
            client_name,
            project_manager,
            start_date,
            end_date,
            status,
            budget,
            actual_cost,
        });

        res.status(201).json({ data: newProject });
    } catch (err) {
        res.status(500).json({
            error: "Failed to create project",
            details: err.message,
        });
    }
}

async function updateProject(req, res) {
    try {
        const { id } = req.params;
        const {
            name,
            description,
            client_name,
            project_manager,
            start_date,
            end_date,
            status,
            budget,
            actual_cost,
        } = req.body;
        const project = await Project.findByPk(id);
        if (!project)
            return res.status(404).json({ error: "Project not found" });
        project.name = name || project.name;
        project.description = description || project.description;
        project.client_name = client_name || project.client_name;
        project.project_manager = project_manager || project.project_manager;
        project.start_date = start_date || project.start_date;
        project.end_date = end_date || project.end_date;
        project.status = status || project.status;
        project.budget = budget || project.budget;
        project.actual_cost = actual_cost || project.actual_cost;
        await project.save();
        res.json({ data: project });
    } catch (err) {
        res.status(500).json({
            error: "Failed to update project",
            details: err.message,
        });
    }
}

module.exports = { getProjects, getProjectById, addNewProject, updateProject };
