const EventItem = require("../../models/Event_item");
const Event = require("../../models/Event");
const router = require('express').Router();
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');
const Event_item = require("../../models/Event_item");

router.post('/', withAuth, (req, res) => {
    console.log("POST /eventnotes running");
    console.log (req.body);
    Event.create({
        title: req.body.title,
        notes: req.session.notes,
        event_id: req.session.event_id,
    })
        .then(dbData => res.json(dbData))
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
    
    
  });

  // get all of a user's events for the My Calendar page
  router.get("/:id", (req, res) => {
    console.log('event notes get route called');
    Event.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'title',
            'start_time',
            'end_time'
        ],
        include: [{
          model: Event_item,
          as: 'event_items'
        }]
    })
        .then(dbEventData => {
            //make the returned data useful
            const events = dbEventData.map(event => event.get({ plain: true }));
            res.render('events_notes', {events}); 
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        
        });
  });

  router.delete('/:id', withAuth, (req, res) => {
    Comment.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbData => {
        if (!dbData) {
          res.status(404).json({ message: 'No event item found with this id!' });
          return;
        }
        res.json(dbData);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });
  

  module.exports = router;