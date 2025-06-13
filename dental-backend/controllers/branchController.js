const db = require('../models/db');

// Get all branches
exports.getAllBranches = async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT * FROM branches');
    res.json(rows);
  } catch (err) {
    console.error('Error fetching branches:', err);
    res.status(500).json({ message: 'Failed to fetch branches' });
  }
};

// Get doctors by branch ID
exports.getDoctorsByBranch = async (req, res) => {
  const { branchId } = req.params;

  try {
    const [rows] = await db.execute(
      'SELECT * FROM doctors WHERE branch_id = ?',
      [branchId]
    );
    res.json(rows);
  } catch (err) {
    console.error('Error fetching doctors:', err);
    res.status(500).json({ message: 'Failed to fetch doctors' });
  }
};
