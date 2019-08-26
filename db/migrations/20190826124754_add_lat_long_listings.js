
exports.up = function(knex) {
    return knex.schema
    .table('listings', listings => {

        listings
            .float('lng',10,6)
        listings
            .float('lat',10,6)
    })
};

exports.down = function(knex) {
    return knex.schema
    .table('listings', listings => {
    listings.dropColumn('lat')
    listings.dropColumn('lng')
    })
};
