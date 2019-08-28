const db = require("../db/dbConfig.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
  remove,
  update,
  getBookingsForUser
};

function find() {
  return db("bookings");
}

function add(booking) {
  return db("bookings")
    .insert(booking, "booking_id")
    .then(ids => {
      // console.log("DID we get here?", ids)
      const [booking_id] = ids;
      return findById(booking_id);
    });
}

// function findBy(id) {
//   return db("bookings").where({ booking_id: id });
// }

function findById(id) {
  return db("bookings")
    .where({ booking_id: id })
    .first();
}

function remove(id) {
  return db("bookings")
    .where({ booking_id: id })
    .del();
}

function update(data, id) {
  return db("bookings")
    .where({ booking_id: id })
    .update(data);
}

// function findBy(id) {
//   return db("bookings as b")
//     .where({ id })
//     .select(
//       "b.booking_id",
//       "b.user_id",
//       "u.username",
//       "b.listing_id",
//       "l.listing_name",
//       "b.startDate",
//       "b.stopDate"
//     )
//     .join("users as u", "b.user_id", "u.id")
//     .join("listings as l", "l.listing_id", "b.listing_id");
// }

function findBy(id) {
  return db("users")
    .where({ id })
    .select("users.username")
    .first();
}

function getBookingsForUser(id) {
  return (
    db("bookings as b")
      .leftJoin("listings as l", "b.listing_id", "l.listing_id")
      // .select({
      //   booking_id: "b.booking_id",
      //   userr_id: "b.user_id",
      //   listing_name: "l.listing_name",
      //   listing_id: "l.listing_id",
      //   startDate: "b.startDate",
      //   stopDate: "b.stopDate"
      // })
      .select(
        "b.booking_id",
        "b.user_id",
        "b.listing_id",
        "l.listing_name",
        "b.startDate",
        "b.stopDate"
      )
      .then(bookings => {
        return bookings.filter(e => e.user_id === parseInt(id));
      })
  );

  return db("bookings as b").where({ user_id: id });
  // .select(
  //   "b.booking_id",
  //   // "b.user_id",
  //   "b.listing_id",
  //   "l.listing_name",
  //   "b.startDate",
  //   "b.stopDate"
  // );
}

function getListingForBooking(id) {
  return db("listings").where();
}
