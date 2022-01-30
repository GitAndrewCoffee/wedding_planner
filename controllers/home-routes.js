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

  // res.render('event_notes',{
  //   viewData: {
  //     event: {title: "Help me, I'm broken Inside"}
  //   }
  // })

  Event.findOne({
      where: {
          id: req.params.id
      },
      as: 'event',
      attributes: [
          'title',
          'start_time',
          'end_time'          
      ],
      include: [{
        model: Event_item,
        attributes: ["title", "notes"]        
      }]
  })
      .then(dbData => {
          // console.log("!! << Data Pulled >> !!");
          
          console.log(dbData);
          
          const viewData = dbData.get({ plain: true });

          res.render('event_notes',{
            viewData
        });
      })
      .catch(err => {
          console.log(err);
          res.status(500).json(err);
      
      });
});




module.exports = router;