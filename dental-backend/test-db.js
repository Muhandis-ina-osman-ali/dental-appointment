// test-db.js
require('dotenv').config();
const mysql = require('mysql2');

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

conn.connect(err => {
  if (err) {
    console.error('Connection error:', err.message);
  } else {
    console.log('✅ Connected to MySQL successfully!');
  }
  conn.end();
});
