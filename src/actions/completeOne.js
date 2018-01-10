const db = require('../database/db');

const sql = `UPDATE list
             SET is_completed = TRUE
             WHERE id = $1`;

export default function completeOne(id) {
  return db.none(sql, [id]);
}
