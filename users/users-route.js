const Users = require('../users/usersModel');

const express = require('express')

const router = express.Router()

router.get('/users', async (req, res) => {
    const rows = await Users.getAll();
  
    res.status(200).json(rows);
  });

  module.exports = router