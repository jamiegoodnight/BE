const db = require('../db/dbConfig.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
    remove,
    update
  };

  function find() {
    return db('listings').select('*');
  }

  function add(listing) {
    return db('listings')
    .insert(listing, 'listing_id')
      .then(ids => {
        console.log("DID we get here?", ids)
        const [listing_id] = ids;
        return findById(listing_id);
      });
  }

  function findBy(filter) {
    return db('listings').where(filter);
  }

  function findById(id) {
    return db('listings')
      .where({ listing_id: id })
      .first();
  }

  function remove(id) {
    return db('listings')
      .where({listing_id: id})
      .del()
  }

  function update(data, id){
    return db('listings')
      .where({listing_id: id})
      .update(data)
  }