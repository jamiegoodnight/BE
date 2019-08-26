
exports.up = function(knex) {
  return knex.schema
        .table('listings', listings => {
            listings
                .text("description")
            listings
                .string("image_url", 500)
            listings
                .renameColumn('id', 'listing_id')
        })
        .table('users', users => {

            users
                .string("image_url", 500)
            users
                .text('bio')
        })
};

exports.down = function(knex) {
        return knex.schema
            .table('listings', listings => {
            listings.dropColumn('description')
            listings.dropColumn('image_url')
            listings.renameColumn('listing_id', 'id')
        })
            .table('users', users => {

                users
                    .dropColumn('image_url')
                users
                    .dropColumn('bio')
            })

};
