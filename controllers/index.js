// import router from Express
const router = require('express');

// import routes from controllers directory
const apiRoutes = require('./api/index.js');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');

// Use statements for router
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);


// Export to ../server.js
module.exports = router;