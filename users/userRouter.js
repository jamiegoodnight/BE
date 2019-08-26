const router = require('express').Router();

const Users = require('./users-model.js');
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


module.exports = router;