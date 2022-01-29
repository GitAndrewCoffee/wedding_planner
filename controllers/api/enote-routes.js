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

  // get all of an event's event items for the event items page
  router.get("/:id", (req, res) => {
    console.log('event get route called');
    Event.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'title',
            'start_time',
            'end_time'
        ],
        include: {
          model: Event_item,
          where: {event_id: req.params.id}
        }
    })
        .then(dbEventItemData => {
            const viewData = dbEventItemData.map(event => event.get({ plain: true }));

            res.render('event_notes', {
              viewData
            });
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