
exports.up = function(knex) {
    return knex.schema
    .createTable('users', users => {
        users.increments();

        users
          .string('username', 128)
          .notNullable()
          .unique();
        users.string('password', 128)
            .notNullable();
        users.boolean('landowner')
            .notNullable();
      })
      .createTable('listings', listings => {
          listings
            .increments();
          listings
            .string('listing_name')
            .unique()
            .notNullable()
          listings
            .integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
         listings
            .timestamps(true, true)
      })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('users')
        .dropTableIfExists('listings');
};
