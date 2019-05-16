const db = require('../data/dbConfig');

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById,
};

async function insert(user) {
  const [id] = await db('users').insert(user, 'id'); // [1]

  return db('users')
    .where({ id })
    .first();
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}

function getAll() {
  return db('users');
}

function findById(id) {
  return null;
}
