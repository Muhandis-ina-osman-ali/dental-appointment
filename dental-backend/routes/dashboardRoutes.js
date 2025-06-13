// Updated `routes/dashboardRoutes.js` to handle dashboard API endpoints

const express = require('express');
const router = express.Router();
const db = require('../models/db');

// Get all appointments
router.get('/appointments', async (req, res) => {
  try {
    const [appointments] = await db.execute(`
      SELECT a.id, u.full_name AS patient, a.appointment_date AS date, a.appointment_time AS time,
             b.name AS branch, a.status
      FROM appointments a
      JOIN users u ON a.user_id = u.id
      JOIN branches b ON a.branch_id = b.id
      ORDER BY a.appointment_date DESC, a.appointment_time DESC
    `);
    res.json(appointments);
  } catch (err) {
    console.error('Dashboard fetch appointments error:', err);
    res.status(500).json({ message: 'Failed to fetch appointments' });
  }
});

// Get branches with appointment count
router.get('/branches', async (req, res) => {
  try {
    const [branches] = await db.execute(`
      SELECT b.id, b.name, b.location, COUNT(a.id) AS appointments
      FROM branches b
      LEFT JOIN appointments a ON b.id = a.branch_id
      GROUP BY b.id
    `);
    res.json(branches);
  } catch (err) {
    console.error('Dashboard fetch branches error:', err);
    res.status(500).json({ message: 'Failed to fetch branches' });
  }
});

// Get dashboard stats (overview)
router.get('/overview', async (req, res) => {
  try {
    const [[{ total }]] = await db.execute(`SELECT COUNT(*) AS total FROM appointments`);
    const [[{ upcoming }]] = await db.execute(`SELECT COUNT(*) AS upcoming FROM appointments WHERE appointment_date >= CURDATE()`);
    const [[{ branches }]] = await db.execute(`SELECT COUNT(*) AS branches FROM branches`);

    res.json({ total, upcoming, branches });
  } catch (err) {
    console.error('Dashboard overview fetch error:', err);
    res.status(500).json({ message: 'Failed to fetch overview' });
  }
});

module.exports = router;
