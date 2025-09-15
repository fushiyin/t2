const { Op } = require('sequelize');
const { Project } = require('../models/project');

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
        { name: { [Op.iLike]: `%${search}%` } },
        { description: { [Op.iLike]: `%${search}%` } },
        { client_name: { [Op.iLike]: `%${search}%` } },
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
      order: [['start_date', 'DESC']],
    });

    res.json({ data: rows, total: count, page: pageNum, pageSize });
  } catch (err) {
    console.error('Failed to fetch projects', err);
    res.status(500).json({ error: 'Failed to fetch projects', details: err.message });
  }
}

async function getProjectById(req, res) {
  try {
    const project = await Project.findByPk(req.params.id);
    if (!project) return res.status(404).json({ error: 'Project not found' });
    res.json({ data: project });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch project' });
  }
}

module.exports = { getProjects, getProjectById };
