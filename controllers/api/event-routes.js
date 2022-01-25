const Event = require("../../models/Event");
const router = require('express').Router();
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, (req, res) => {
    console.log("POST /event running");
    console.log (req.body);
    Event.create({
        title: req.body.title,
        user_id: req.session.user_id
    })
        .then(dbEventData => res.json(dbEventData))
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
    
    
  });

  router.get("/", (req, res) => {
    console.log('event get route called')  
    res.json('Testing');
  });

  module.exports = router;