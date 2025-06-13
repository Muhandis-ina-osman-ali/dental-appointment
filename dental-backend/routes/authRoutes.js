// const express = require('express');
// const router = express.Router();
// const authController = require('../controllers/authController');

// // Routes for user registration and login
// router.post('/signup', authController.signup);
// router.post('/login', authController.login);

// module.exports = router;

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Routes for user registration and login
router.post('/signup', authController.signup);
router.post('/login', authController.login);

module.exports = router;
