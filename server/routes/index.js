// required modules for routing
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// define the novel model
const story = require('../models/novels');

/* GET main page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/main', {
    heading: 'Welcome to the Library',
    novels: ''
   });
});

module.exports = router;
