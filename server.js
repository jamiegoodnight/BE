const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('./routes/authRouter')
const listingRouter = require('./routes/listingRouter')
const userRouter = require('./routes/userRouter')

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.get('/', (req,res)=>{
    res.status(200).send('<h1>5th Wheel BE</h1><a href="https://documenter.getpostman.com/view/8573861/SVfMTWGg">Link to the API docs</a>')
})

server.use('/auth', authRouter)
server.use('/listings', listingRouter)
server.use('/users', userRouter)



module.exports = server;

