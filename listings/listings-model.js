const db = require('../db/dbConfig.js');

module.exports = {
    // add,
    find,
    // findBy,
    // findById,
  };

  function find() {
    return db('listings').select('*');
  }