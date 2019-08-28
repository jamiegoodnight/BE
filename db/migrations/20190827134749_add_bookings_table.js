
exports.up = function(knex) {
    return knex.schema
    .createTable('bookings', b => {
        b.increments('booking_id')

        b
            .integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        b
            .integer('listing_id')
            .unsigned()
            .notNullable()
            .references('listing_id')
            .inTable('listings')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        b
            .date('startDate')
        b
            .date('stopDate')
        b
            .timestamps(true, true)

    })
};

exports.down = function(knex) {

    return knex.schema
    .dropTableIfExists('bookings')

};
