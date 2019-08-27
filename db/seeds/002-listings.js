
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('listings')

    .then(function () {
      // Inserts seed entries
      return knex('listings').insert([
        {listing_name: 'RV Site on Beautiful Blueberry Farm', description:"Vape poutine portland tempor narwhal before they sold out. 90's polaroid humblebrag, listicle deep v franzen copper mug fugiat gentrify cornhole vaporware elit dolore tilde affogato. Chartreuse vinyl lumbersexual flexitarian pour-over. Flexitarian vegan pickled, anim stumptown ennui master cleanse duis aliquip in tote bag. Hell of pabst ethical tofu ugh. Plaid do mollit, cold-pressed tacos pabst typewriter. Est shabby chic raw denim yuccie, hell of art party kitsch jianbing vape.",image_url:"https://img.hipcamp.com/images/c_limit,f_auto,h_1200,q_60,w_1920/v1532040150/campground-photos/f6syfthfd9zrigongkic/juicy-blue-u-pick-berry-farm-rv-site-on-beautiful-blueberry-farm-hood-river-forest-people-rv.jpg", user_id: 3 },
        {listing_name: 'River Side Camp', description:"Adaptogen anim yuccie food truck. Chia prism beard live-edge. Selvage commodo VHS in, next level kitsch aliqua consequat glossier. Reprehenderit polaroid brooklyn bespoke ugh mustache ad etsy cillum meggings quinoa. Brunch cupidatat four loko, dolor vinyl health goth humblebrag cronut.",image_url:"https://img.hipcamp.com/images/c_limit,f_auto,h_1200,q_60,w_1920/v1433542792/mrjh1j6buoi15uzycgec/memaloose-memaloose-campground.jpg", user_id: 4}
      ]);
    });
};
