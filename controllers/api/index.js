const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const eventRoutes = require('./event-routes.js');
const eNoteRoutes = require('./enote-routes.js');

router.use('/users', userRoutes);
router.use('/events', eventRoutes);
router.use('/eventsnotes', eNoteRoutes);

module.exports = router;