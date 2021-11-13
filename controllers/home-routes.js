const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

router.get('/', (req, res) => {
  res.render('homepage', {
    id: 3,
    post_url: 'https://handlebarsjs.com/guide/',
    title: 'Handle Docs',
    created_at: new Date(),
    vote_count: 10,
    comments: [{}, {}],
    user: {
      username: 'Stester_user'
    }
  });
});
module.exports = router;