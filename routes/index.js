const express = require('express');
const router = express.Router();
const home_controller = require('../controllers/home_controller');

router.get('/',home_controller.home);
console.log('routes are working');

router.post('/espdata',home_controller.espdata);

router.use('/dashboard',require('./dashboard'));

module.exports = router;