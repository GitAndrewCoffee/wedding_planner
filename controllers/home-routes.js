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

router.get('/eventnotes/:id', (req, res) => {
  console.log("The event notes page has been called with a get");
  // res.render('event_notes')
  Event.findOne({
      where: {
          id: req.params.id
      },
      attributes: [
          'title'
      ],
      include: {
        model: Event_item,
        as: 'event_item',
        attributes: ['title', 'notes'],
        where: {event_id: req.params.id}
      }
  })
      .then(dbEventItemData => {
          // const viewData = dbEventItemData.map(event => event.get({ plain: true }));

          res.render('event_notes', {
            dbEventItemData
          });
      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      
      });
});




module.exports = router;