// // const express = require('express');
// // const app = express();
// // const cors = require('cors');
// // const authRoutes = require('./routes/authRoutes');
// // require('dotenv').config();

// // app.use(cors());
// // app.use(express.json());

// // // Routes
// // app.use('/api/auth', authRoutes);

// // // Health check
// // app.get('/', (req, res) => {
// //   res.send('Backend is working!');
// // });

// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => {
// //   console.log(`Server running on http://localhost:${PORT}`);
// // });


// const express = require('express');
// const cors = require('cors');
// require('dotenv').config();

// const authRoutes = require('./routes/authRoutes');

// const app = express();
// // const PORT = process.env.PORT || 5000;
// const PORT = process.env.PORT || 5001;

// app.use(cors());
// app.use(express.json());

// // Routes
// app.use('/api/auth', authRoutes);

// // Health check
// app.get('/', (req, res) => {
//   res.send('Backend is working!');
// });

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
// // 
// const appointmentRoutes = require('./routes/appointmentRoutes');
// app.use('/api/appointments', appointmentRoutes);


const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/authRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');

const app = express();
app.use(cors());
app.use(express.json()); // ✅ Must have this!

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/appointments', appointmentRoutes);

app.get('/', (req, res) => {
  res.send('Backend is working!');
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

const branchRoutes = require('./routes/branchRoutes');
app.use('/api/branches', branchRoutes);

// GET /api/dashboard/appointments
const dashboardRoutes = require('./routes/dashboardRoutes');
app.use('/api/dashboard', dashboardRoutes);

