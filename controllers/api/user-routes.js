const { User } = require("../../models/User");
const router = require('express').Router();

router.post('/', (req, res) => {
    console.log("Post /user running");
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

  module.exports = router;