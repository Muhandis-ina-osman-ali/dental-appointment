// // const bcrypt = require('bcryptjs');
// // const jwt = require('jsonwebtoken');
// // const db = require('../models/db'); // Make sure this is correct based on your project

// // // User Signup
// // exports.signup = (req, res) => {
// //   const { full_name, email, password } = req.body;

// //   if (!full_name || !email || !password) {
// //     return res.status(400).json({ message: 'All fields are required' });
// //   }

// //   const hashedPassword = bcrypt.hashSync(password, 10);
// //   const sql = 'INSERT INTO users (full_name, email, password) VALUES (?, ?, ?)';

// //   db.query(sql, [full_name, email, hashedPassword])
// //     .then(() => {
// //       res.status(201).json({ message: 'Signup successful' });
// //     })
// //     .catch((err) => {
// //       if (err.code === 'ER_DUP_ENTRY') {
// //         return res.status(409).json({ message: 'Email already exists' });
// //       }
// //       res.status(500).json({ message: 'Signup failed', error: err });
// //     });
// // };

// // // User Login
// // exports.login = (req, res) => {
// //   const { email, password } = req.body;

// //   const sql = 'SELECT * FROM users WHERE email = ?';
// //   db.query(sql, [email])
// //     .then(([results]) => {
// //       if (results.length === 0) {
// //         return res.status(400).json({ message: 'Invalid credentials' });
// //       }

// //       const user = results[0];
// //       const isMatch = bcrypt.compareSync(password, user.password);

// //       if (!isMatch) {
// //         return res.status(400).json({ message: 'Invalid credentials' });
// //       }

// //       const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });

// //       res.json({
// //         token,
// //         user: {
// //           id: user.id,
// //           full_name: user.full_name,
// //           email: user.email,
// //         },
// //       });
// //     })
// //     .catch((err) => {
// //       res.status(500).json({ message: 'Login failed', error: err });
// //     });
// // };

// exports.signup = (req, res) => {
//   console.log('Signup request body:', req.body); // ✅ Add this
//   const { full_name, email, password } = req.body;

//   if (!full_name || !email || !password) {
//     return res.status(400).json({ message: 'All fields are required' });
//   }

//   const hashedPassword = bcrypt.hashSync(password, 10);
//   const sql = 'INSERT INTO users (full_name, email, password) VALUES (?, ?, ?)';

//   db.query(sql, [full_name, email, hashedPassword])
//     .then(() => {
//       res.status(201).json({ message: 'Signup successful' });
//     })
//     .catch((err) => {
//       console.error('Signup error:', err); // ✅ Add this
//       if (err.code === 'ER_DUP_ENTRY') {
//         return res.status(409).json({ message: 'Email already exists' });
//       }
//       res.status(500).json({ message: 'Signup failed', error: err });
//     });
// };


// const bcrypt = require('bcryptjs');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const db = require('../models/db'); // adjust path if your db.js is elsewhere

// // User Signup
// exports.signup = (req, res) => {
//   console.log('Signup request body:', req.body);
//   const { full_name, email, password } = req.body;

//   if (!full_name || !email || !password) {
//     return res.status(400).json({ message: 'All fields are required' });
//   }

//   const hashedPassword = bcrypt.hashSync(password, 10);
//   const sql = 'INSERT INTO users (full_name, email, password) VALUES (?, ?, ?)';

//   db.execute(sql, [full_name, email, hashedPassword])
//     .then(() => {
//       res.status(201).json({ message: 'Signup successful' });
//     })
//     .catch((err) => {
//       console.error('Signup error:', err);
//       if (err.code === 'ER_DUP_ENTRY') {
//         return res.status(409).json({ message: 'Email already exists' });
//       }
//       res.status(500).json({ message: 'Signup failed', error: err });
//     });
// };

// // User Login
// exports.login = (req, res) => {
//   const { email, password } = req.body;
//   const sql = 'SELECT * FROM users WHERE email = ?';

//   db.execute(sql, [email])
//     .then(([results]) => {
//       if (results.length === 0) {
//         return res.status(400).json({ message: 'Invalid credentials' });
//       }

//       const user = results[0];
//       const isMatch = bcrypt.compareSync(password, user.password);
//       if (!isMatch) {
//         return res.status(400).json({ message: 'Invalid credentials' });
//       }

//       const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });
//       res.json({
//         token,
//         user: {
//           id: user.id,
//           full_name: user.full_name,
//           email: user.email,
//         },
//       });
//     })
//     .catch((err) => {
//       console.error('Login error:', err);
//       res.status(500).json({ message: 'Login failed', error: err });
//     });
// };


const bcrypt = require('bcryptjs');           // ← Import bcryptjs
const jwt = require('jsonwebtoken');          // ← Import jsonwebtoken
const db = require('../models/db');           // ← Your database connection

// User Signup
exports.signup = (req, res) => {
  console.log('Signup request body:', req.body);
  const { full_name, email, password } = req.body;

  if (!full_name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const hashedPassword = bcrypt.hashSync(password, 10);  // ← Uses bcrypt
  const sql = 'INSERT INTO users (full_name, email, password) VALUES (?, ?, ?)';

  db.execute(sql, [full_name, email, hashedPassword])
    .then(() => {
      res.status(201).json({ message: 'Signup successful' });
    })
    .catch((err) => {
      console.error('Signup error:', err);
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(409).json({ message: 'Email already exists' });
      }
      res.status(500).json({ message: 'Signup failed', error: err });
    });
};

// User Login
exports.login = (req, res) => {
  const { email, password } = req.body;
  const sql = 'SELECT * FROM users WHERE email = ?';

  db.execute(sql, [email])
    .then(([results]) => {
      if (results.length === 0) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }

      const user = results[0];
      const isMatch = bcrypt.compareSync(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }

      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });
      res.json({
        token,
        user: {
          id: user.id,
          full_name: user.full_name,
          email: user.email,
        },
      });
    })
    .catch((err) => {
      console.error('Login error:', err);
      res.status(500).json({ message: 'Login failed', error: err });
    });
};
