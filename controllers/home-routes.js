const router = require('express').Router();
const { Event_item, Event, User, Wedding } = require('../models/index');
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
  console.log("The root page has been called with a get");
  res.redirect('/events');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/eventnotes', (req, res) => {
  console.log("The event notes page has been called with a get");
  res.render('/event_notes');
});



module.exports = router;