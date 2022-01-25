const Event = require("../../models/Event");
const router = require('express').Router();

router.post('/', (req, res) => {
    console.log("POST /event running");
    console.log (req.body);
    Event.create({
        title: req.body.title,
        wedding_id: req.body.wedding_id,
    })
        .then(dbEventData => res.json(dbEventData))
        .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
    
    
  });

  router.get("/", (req, res) => {
    console.log('user get route called')  
    res.json('Testing');
  });

  module.exports = router;