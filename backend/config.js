const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'mysql.cuxfnpghdlvq.us-east-1.rds.amazonaws.com',
  user: 'admin',
  password: 'lT0pgcbreq',
  database: 'mysql8',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

module.exports = pool;