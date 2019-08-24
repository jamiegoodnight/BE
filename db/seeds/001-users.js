
exports.seed = function(knex) {

  return knex('users')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'ilikervs123',password: "password123", landowner: false},
        { username: 'rvsrock321',password: "password123", landowner: false},
        { username: 'rvparkowner123',password: "password123", landowner: true},
        { username: 'ihaveland123',password: "password123", landowner: true}
      ]);
    });
};
