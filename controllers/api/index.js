// import express
const router = require('express').Router();

// import user, comment, and post routes
const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

// pass the imported routes to express
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

// export api routes
module.exports = router;