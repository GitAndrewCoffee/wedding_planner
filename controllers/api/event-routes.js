const Event = require("../../models/Event");
const router = require('express').Router();
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, (req, res) => {
    console.log("POST /event running");
    console.log (req.body);
    Event.create({
        title: req.body.title,
        user_id: req.session.user_id,
        start_time: req.body.start_time,
        end_time: req.body.end_time
    })
        .then(dbEventData => res.json(dbEventData))
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
    
    
  });

  // get all of a user's events for the My Calendar page
  router.get("/", withAuth, (req, res) => {
    console.log('event get route called');
    Event.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: [
            'title',
            'start_time',
            'end_time'
        ] 
    })
        .then(dbEventData => {
            const events = dbEventData.map(event => event.get({ plain: true }));

            res.render('events', {
                events
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        
        });
  });

  module.exports = router;