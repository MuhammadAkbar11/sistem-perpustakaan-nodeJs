const express = require('express');

const adminController = require('../../controllers/backEnd/adminController');
const router = express.Router();

router.get('/dashboard', adminController.dashboard);

module.exports = router;
