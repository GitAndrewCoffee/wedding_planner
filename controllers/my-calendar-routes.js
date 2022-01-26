const Event = require("../models/Event");
const router = require('express').Router();
const sequelize = require('../config/connection');
const withAuth = require('../utils/auth');

// get all of a user's events for the My Calendar page
  router.get('/', withAuth, (req, res) => {
    console.log('event get route called');
    Event.findAll({
        where: {
            user_id: req.session.user_id
        },
        order: [
            [
                'start_time',
                'DESC'
            ]
        ],
        attributes: [
            'title',
            'start_time',
            'end_time'
        ] 
    })
        .then(dbEventData => {
            const events = dbEventData.map(event => event.get({ plain: true }));

            res.render('events', {
                events,
                loggedIn: true
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        
        });
  });

  module.exports = router;