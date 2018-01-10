const db = require('../database/db');

const sql = `SELECT * FROM list
             WHERE is_completed = FALSE`;

export default function getAll() {
  return db.any(sql);
}
