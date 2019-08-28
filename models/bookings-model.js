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
    return db('bookings').select('*');
  }

  function add(booking) {
    return db('bookings')
    .insert(booking, 'booking_id')
      .then(ids => {
        // console.log("DID we get here?", ids)
        const [booking_id] = ids;
        return findById(booking_id);
      });
  }

  function findBy(filter) {
    return db('bookings').where(filter)
  }

  function findById(id) {
    return db('bookings')
      .where({ booking_id: id })
      .first();
  }

  function remove(id) {
    return db('bookings')
      .where({booking_id: id})
      .del()
  }

  function update(data, id){
    return db('bookings')
      .where({booking_id: id})
      .update(data)
  }

  // function findBy(filter) {
  //   return db('bookings as b')
  //   .select('b.booking_id', 'b.user_id', 'u.username', 'b.listing_id', 'l.listing_name', 'b.startDate', 'b.stopDate')
  //   .join('users as u', 'b.user_id', 'u.id')
  //   .join('listings as l', 'l.listing_id', 'b.listing_id')
  //   .where(filter)


  // }