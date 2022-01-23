const router = require('express').Router();
const { Event_item, Event, User, Wedding } = require('../models/index');
const sequelize = require('../config/connection');

router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/login', (req, res) => {
  res.render('login');
});

module.exports = router;