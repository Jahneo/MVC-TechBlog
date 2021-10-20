const router = require('express').Router();
//const User = require('./User');
const userRoutes = require('./user-routes.js');

router.use('/users', userRoutes);

module.exports = router;
