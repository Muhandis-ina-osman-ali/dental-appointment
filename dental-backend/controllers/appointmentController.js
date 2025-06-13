const db = require('../models/db');

// Book an appointment
exports.bookAppointment = async (req, res) => {
  const { user_id, branch_id, doctor_id, date, time } = req.body;

  if (!user_id || !branch_id || !doctor_id || !date || !time) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
  const sql = `
  INSERT INTO appointments (user_id, branch_id, doctor_id, appointment_date, appointment_time)
  VALUES (?, ?, ?, ?, ?)
`;

await db.execute(sql, [user_id, branch_id, doctor_id, date, time]);

    res.status(201).json({ message: 'Appointment booked successfully' });
  } catch (err) {
    console.error('Booking error:', err);
    res.status(500).json({ message: 'Failed to book appointment' });
  }
};

// Get appointments by user
exports.getUserAppointments = async (req, res) => {
  const user_id = req.params.userId;

  try {
    const [results] = await db.execute(
      `SELECT a.*, b.name AS branch_name, d.full_name AS doctor_name
       FROM appointments a
       JOIN branches b ON a.branch_id = b.id
       JOIN doctors d ON a.doctor_id = d.id
       WHERE a.user_id = ?`,
      [user_id]
    );

    res.json(results);
  } catch (err) {
    console.error('Fetch error:', err);
    res.status(500).json({ message: 'Could not retrieve appointments' });
  }
};

// Mark appointment as completed
exports.markAsCompleted = async (req, res) => {
  const appointmentId = req.params.id;

  try {
    const sql = `UPDATE appointments SET status = 'completed' WHERE id = ?`;
    await db.execute(sql, [appointmentId]);
    res.json({ message: 'Appointment marked as completed' });
  } catch (err) {
    console.error('Completion error:', err);
    res.status(500).json({ message: 'Could not update appointment status' });
  }
};