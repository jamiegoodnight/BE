const router = require('express').Router();

const Listings = require('../listings/listings-model.js');
const restricted = require('../middleware/restricted.js');

// ----- Get all listings ------
router.get('/',  restricted, (req, res) => {
    Listings.find()
      .then(listing => {
        res.status(200).json(listing);
      })
      .catch(err => res.status(400).send(err));
  });

  module.exports = router;