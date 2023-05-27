require("dotenv").config(); // load .env variables
const {userSchema, User, validate} = require('../models/user');
const mongoose = require('../database/connection');
const _ = require('lodash'); // For some extra utilities
const express = require('express');
const bcrypt = require("bcrypt"); // import bcrypt to hash passwords
const jwt = require("jsonwebtoken"); // import jwt to sign tokens


const router = express.Router();
//DESTRUCTURE ENV VARIABLES WITH DEFAULTS
const { SECRET } = process.env;

+

router.get('/getAll', async (req, res) => {

    res.send('all daata ');
}
);

router.get('/getOne', async (req, res) => {

    res.send(data);
}
);

app.post('/Post', async (req, res) => {

    user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    // A better way to write the above would be
    // user = new User(_.pick(req.body, ['name', 'email', 'password']));

    await user.save();
    res.send('POST request to the homepage')
  })

  router.put('/put', async (req, res) => {

    res.send('updating record');
}
);

router.delete('/delete', async (req, res) => {

    res.send('record deleted');
}
);

module.exports = router;