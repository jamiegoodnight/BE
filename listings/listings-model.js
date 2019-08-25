const db = require('../db/dbConfig.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
    remove
  };

  function find() {
    return db('listings').select('*');
  }

  function add(listing) {
    return db('listings')
      .insert(listing, 'id')
      .then(ids => {
        const [id] = ids;
        return findById(id);
      });
  }

  function findBy(filter) {
    return db('listings').where(filter);
  }

  function findById(id) {
    return db('listings')
      .where({ id })
      .first();
  }

  function remove(id) {
    return db('listings')
      .where({id})
      .del()
  }