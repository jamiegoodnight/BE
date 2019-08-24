const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('./users-model.js');
const secrets = require('../config/jwt.js')


// ---------Register---------
router.post('/register', (req, res) => {
    let user = req.body;

    // hash password
    const hash = bcrypt.hashSync(user.password);
    user.password = hash;

    Users.add(user)
      .then( user => {
        let {id, username} = user
        res.status(201).json({message: "Successfully Created an Account", id, username});
      })
      .catch(error => {
        res.status(500).json({message: "Oh no, something went wrong!"});
      });
  });

// --------Login-----------
router.post('/login', (req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
      .first()
      .then(user => {
        if (user && bcrypt.compareSync(password, user.password)) {
          const token = generateToken(user);

          res.status(200).json({ message: `Welcome ${user.username}!`, token });
        } else {
          res.status(401).json({ message: 'Invalid Credentials, check the username and password and try again.' });
        }
      })
      .catch(error => {
        res.status(500).json(error);
      });
  });

//----------- Token Config --------
function generateToken(user) {
    const payload = {
      subject: user.id,
      username: user.username,
      landowner: user.landowner
      // ...other data
    }
    const options = {
      expiresIn: '5h'
    }
    return jwt.sign(payload, secrets.jwtSecret, options)
  }

module.exports = router;