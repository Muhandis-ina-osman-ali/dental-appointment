const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');

// POST: Book an appointment
router.post('/book', appointmentController.bookAppointment);

// GET: Fetch appointments for a specific user
router.get('/user/:userId', appointmentController.getUserAppointments);
router.put('/complete/:id', appointmentController.markAsCompleted);
router.get('/user/:userId', appointmentController.getUserAppointments);


module.exports = router;
