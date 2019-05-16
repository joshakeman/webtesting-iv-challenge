const express = require('express');

const Users = require('../users/usersModel');

const usersRoute = require('../users/users-route')

const server = express();

server.use(express.json());

server.use('/users', usersRoute)


server.get('/', async (req, res) => {
  res.status(200).json({ message: 'success!' });
});


module.exports = server;