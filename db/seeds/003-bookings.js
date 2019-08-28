
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('bookings')
    .then(function () {
      // Inserts seed entries
      return knex('bookings').insert([
        {user_id: 1, listing_id: 1, startDate: 'January 8, 2020', stopDate: 'January 12, 2020'},
        {user_id: 2, listing_id: 2, startDate: 'January 8, 2020', stopDate: 'January 12, 2020'},
        {user_id: 3, listing_id: 1, startDate: 'February 20, 2020', stopDate: 'February 23, 2020'}
      ]);
    });
};
