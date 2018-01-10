const db = require('../database/db');

const sql = `DELETE FROM list
             WHERE id = $1`;

export default function deleteOne(id) {
  return db.none(sql, [id]);
}
