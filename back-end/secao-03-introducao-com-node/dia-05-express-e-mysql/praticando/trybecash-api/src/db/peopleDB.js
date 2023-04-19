const conn = require('./connection');

const insert = (person) => {
  return (
    conn.execute(
      `INSERT INTO people
        (first_name, last_name, email, phone) VALUES (?, ?, ?, ?)`,
      [person.firstName, person.lastName, person.email, person.phone],
    )
  )
};

const select = (id) => {
  if (!id) {
    return conn.execute(
      'SELECT * FROM people'
    )
  }
  
  return conn.execute(
    `SELECT * FROM people WHERE id = ?`,
    [id]
  )
};

module.exports = {
  insert,
  select
}