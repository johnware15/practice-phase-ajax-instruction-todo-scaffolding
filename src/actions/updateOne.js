const db = require('../database/db');

const sql = `UPDATE list
             SET item = $1
             WHERE id = $2`;

export default function updateOne(item, id) {
  return db.none(sql, [item, parseInt(id)]);
}
