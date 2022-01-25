const User = require("../../models/User");
const router = require('express').Router();

router.post('/', (req, res) => {
    console.log("Post /user running");
    console.log (req.body);
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    })
        .then(dbUserData => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;

            res.json(dbUserData);
        })
    
    
  });

  router.get("/", (req, res) => {
    console.log('user get route called')  
    res.json('Testing');
  });

  module.exports = router;