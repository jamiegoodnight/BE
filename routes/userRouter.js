const router = require('express').Router();

const Users = require('../models/users-model.js');
const Listings = require('../models/listings-model.js');
const Bookings = require('../models/bookings-model.js');

const restricted = require('../middleware/restricted.js');

// ----- Update User -----
router.put('/:id', restricted, (req,res)=>{
    const id = req.params.id
    const user = req.body

    Users.update(user, id)
      .then(updated => {
        !updated ? res.status(400).json({message: "That user does not exist."}) :
        res.status(200).json({message: `Successfully updated user with an ID of ${id}.`})
      })
      .catch(err => {
        res.status(400).json({message: "You need to pass in the data you want to update."})
      })
  })

// ----- Get a User -----
router.get('/:id', restricted, (req,res)=> {
  const id = req.params.id

  Users.findById(id)
    .then( user => {

      !user ? res.status(400).json({message: "That user does not exist."}) :

      Listings.findBy({user_id: id})
      .then( listings => {
        Bookings.findBy({user_id: id})
          .then(bookings => {
            res.status(200).json({...user,listings, bookings})
          })
          .catch( err => {
            res.status(500).json({err, message: "In Bookings data model"})
          })
      })
      .catch(err => {
        res.status(500).json({err})
      })

    })
    .catch( err => {
      res.status(500).json({message: "Error happened in the server", err})
    })
})

//----- Get all Users -----
router.get('/', restricted, (req,res) => {
    Users.find()
      .then( users => {
        res.status(200).json(users)
      })
        .catch( err => {
          res.status(500).json({message: "Oh no, an error happened", err})
        })
} )

// ----- Delete A User -----
router.delete('/:id', restricted, (req,res)=> {
  const id = req.params.id

   Users.remove(id)
 .then( deleted => {
   !deleted ? res.status(400).json({message: "That User does not exist."}) :
   res.status(200).json({message: `Successfully deleted listing with an ID of ${id}`})
 })
 .catch(err => {
   res.status(500).json({message: "There was a problem in the server with your request."})
 })
})


module.exports = router;