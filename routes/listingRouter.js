const router = require('express').Router();

const Bookings = require('../models/bookings-model.js');
const Listings = require('../models/listings-model.js');
const restricted = require('../middleware/restricted.js');

// ----- Get all listings ------
router.get('/', (req, res) => {
    Listings.find()
      .then(listing => {
        res.status(200).json(listing);
      })
      .catch(err => res.status(400).send(err));
  });

// ------ Add new Listing ---------
router.post('/', restricted, (req,res) =>{
    let listing = req.body;
    console.log("listing in body", listing)
    !listing.listing_name || !listing.user_id ? res.status(400).json({message: "A new Listing must had a listing_name and a user_id property."}) :
    Listings.add(listing)
      .then(listing => {
        let {listing_id, listing_name, created_at} = listing
        res.status(201).json({message: "Successfully Created a Listing", listing_id, listing_name, created_at});
      })
      .catch( err => {
        res.status(400).json({message: "Oh no, something went wrong! Make sure the listing name is Unique. If it is, speak with BE."});
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

// ---- Update a Listing ------
router.put('/:id', restricted, (req,res)=>{
  const id = req.params.id
  const listing = req.body

  Listings.update(listing, id)
    .then(updated => {
      !updated ? res.status(400).json({message: "That Listing does not exist."}) :
      res.status(200).json({message: `Successfully updated listing with an ID of ${id}.`})
    })
    .catch(err => {
      res.status(400).json({message: "You need to pass in the data you want to update."})
    })
})

// ----- Get a Listing by Id -----
router.get('/:id', (req,res)=> {
  const id = req.params.id

  Listings.findById(id)
    .then( listing => {
      !listing ? res.status(400).json({message: "That listing does not exist."}) :
      console.log("HERES THE FRICKIN ID", id)
      Bookings.findBy({user_id: id})
      .then(bookings => {
        res.status(200).json({...listing, bookings})
      })
      .catch( err => {
        res.status(500).json({err, message: "In Bookings data model"})
      })

    })
    .catch( err => {
      res.status(500).json({message: "Error happened in the server", err})
    })
})

// ----- Add a booking for the current Listing -----
router.post('/:id/booking', restricted, (req,res)=> {
    let dates = req.body;
    let listing_id = Number(req.params.id);
    let user_id = req.userId;
    !dates.startDate || !dates.stopDate ? res.status(400).json({message: "A new Booking must have a startDate and a stopDate."}) :
    Bookings.add({listing_id, user_id, ...dates})
      .then(booking => {
        // let {listing_id, listing_name, created_at} = listing
        res.status(201).json({message: "Successfully Created a Booking", booking});
      })
      .catch( err => {
        res.status(400).json({message: "Uh oh! Make sure the listing exists to make a booking."});
      })
})

// ----- Delete a Booking -----
router.delete('/:listing_id/booking/:booking_id', restricted, (req,res)=> {
  const id = req.params.booking_id

   Bookings.remove(id)
 .then( deleted => {
   !deleted ? res.status(400).json({message: "That Listing does not exist."}) :
   res.status(200).json({message: `Successfully deleted Booking with an ID of ${id}`})
 })
 .catch(err => {
   res.status(500).json({message: "There was a problem in the server with your request."})
 })
})

  module.exports = router;