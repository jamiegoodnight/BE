
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('listings')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('listings').insert([
        {listing_name: 'RV Site on Beautiful Blueberry Farm', user_id: 3 },
        {listing_name: 'Creek Side Camp', user_id: 4}
      ]);
    });
};
