const db = require('../database/db');

const sql = `INSERT INTO list (item)
             VALUES ($1)`;

export default function addOne(data) {
  return db.none(sql, [data]);
}
