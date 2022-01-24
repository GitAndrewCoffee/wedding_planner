const router = require('express').Router();
const { Event_item, Event, User, Wedding } = require('../models/index');
const sequelize = require('../config/connection');

router.get('/', (req, res) => {
  console.log("The root page has been called with a get");
  res.render('homepage');
});

router.get('/login', (req, res) => {
  res.render('login');
});

module.exports = router;