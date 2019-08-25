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

// ------ Add new Listing ---------
router.post('/', restricted, (req,res) =>{
    let listing = req.body;
    !listing.listing_name || !listing.user_id ? res.status(400).json({message: "A new Listing must had a listing_name and a user_id property."}) :
    Listings.add(listing)
      .then(listing => {
        let {id, listing_name, created_at} = listing
        res.status(201).json({message: "Successfully Created a Listing", id, listing_name, created_at});
      })
      .catch( err => {
        res.status(500).json({message: "Oh no, something went wrong!"});
      })

})

// ----- Remove a Listing --------
router.delete('/:id', restricted, (req,res)=> {
   const id = req.params.id

    Listings.remove(id)
  .then( deleted => {
    !deleted ? res.status(400).json({message: "That Listing does not exist."}) :
    res.status(200).json({message: `Successfully deleted listing with an ID of ${id}`})
  })
  .catch(err => {
    res.status(500).json({message: "There was a problem in the server with your request."})
  })

})
  module.exports = router;