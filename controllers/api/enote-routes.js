const EventItem = require("../../models/Event_item");
const Event = require("../../models/Event");
const router = require('express').Router();
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

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
  router.get("/:id", withAuth, (req, res) => {
    console.log('event notes get route called');
    Event.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'title',
            'start_time',
            'end_time'
        ] 
    })
        .then(dbEventData => {
            //make the returned data useful
            const events = dbEventData.map(event => event.get({ plain: true }));
            
            //pull child items
            EventItem.findAll({
              where: {
                event_id: req.params.id
              },
              order: [
                ['id', 'DESC']
              ],
              attributes: [
                'title',
                'notes'
              ]
            })
              .then(function (eventitems, events){
                  const viewData = [eventitems, events];
                  res.render('events_notes', {
                    viewData      
              });            
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