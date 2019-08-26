const bcrypt = require('bcryptjs');

exports.seed = function(knex) {

  return knex('users')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'ilikervs123',password: bcrypt.hashSync("password123"), bio:"Swag disrupt jean shorts echo park cold-pressed shabby chic crucifix. Cold-pressed 8-bit master cleanse live-edge microdosing hella ethical. Poke XOXO try-hard prism.",image_url:"http://www.bigleaf.net/wp-content/uploads/2017/10/avatar-placeholder.png", landowner: false},
        { username: 'rvsrock321',password: bcrypt.hashSync("password123"), bio:"Farm-to-table disrupt la croix sustainable next level art party fashion axe snackwave portland skateboard cliche selvage fingerstache echo park.",image_url:"http://www.bigleaf.net/wp-content/uploads/2017/10/avatar-placeholder.png", landowner: false},
        { username: 'rvparkowner123',password: bcrypt.hashSync("password123"), bio:"VHS direct trade salvia swag, gluten-free snackwave taiyaki tbh fanny pack yuccie umami migas locavore helvetica gastropub. Keytar narwhal succulents adaptogen, whatever venmo pitchfork tbh fixie tumeric. Farm",image_url:"http://www.bigleaf.net/wp-content/uploads/2017/10/avatar-placeholder.png", landowner: true},
        { username: 'ihaveland123',password: bcrypt.hashSync("password123"), bio:"Vice poutine veniam cillum small batch sriracha sartorial. Lyft hell of flexitarian copper mug quinoa, street art man bun knausgaard cardigan anim.",image_url:"http://www.bigleaf.net/wp-content/uploads/2017/10/avatar-placeholder.png", landowner: true}
      ]);
    });
};
