const Users = require('../users/usersModel');

const express = require('express')

const router = express.Router()

router.get('/', async (req, res) => {
    // const rows = await Users.getAll();
  
    res.status(200).send()
  });

  router.post('/', async (req, res) => {
    const user = await Users.insert(req.body);

    res.status(200).json(user);
  });

  router.delete('/', async (req, res) => {
    const user = await Users.remove(req.body.id);
  
    res.status(200).json(`User ${user} deleted`);
  });

  module.exports = router