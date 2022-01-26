const router = require('express').Router();
const homeRoutes = require('./home-routes.js');
const myCalendarRoutes = require('./my-calendar-routes.js')
const apiRoutes = require('./api/');

router.use('/', homeRoutes);
router.use('/events', myCalendarRoutes)
router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;