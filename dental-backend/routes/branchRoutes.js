const express = require('express');
const router = express.Router();
const branchController = require('../controllers/branchController');

// Get all branches
router.get('/', branchController.getAllBranches);

// Get doctors for a branch
router.get('/:branchId/doctors', branchController.getDoctorsByBranch);

module.exports = router;
