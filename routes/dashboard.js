const express = require('express');
const router = express.Router();


const dashboardcontroller = require('../controllers/dashboard_controller');

router.get('/', dashboardcontroller.page);

module.exports = router;