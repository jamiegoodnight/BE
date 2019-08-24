const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const authRouter = require('./authorization/authRouter')
const listingRouter = require('./listings/listingRouter')

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/auth', authRouter)
server.use('/listings', listingRouter)

module.exports = server;

