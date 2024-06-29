
const express = require('express');
const router = express.Router();
const settingsController = require('../controllers/settings/Settings')
const { isAuthenticatedUser } = require('../middlewares/authenticate');

router.put('/admin/settings', settingsController.updateSettings); 
router.get('/admin/settings/get', settingsController.getSettings); 

module.exports = router;
