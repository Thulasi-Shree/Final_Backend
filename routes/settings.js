
const express = require('express');
const router = express.Router();
const settingsController = require('../controllers/settings/Settings')
const { isAuthenticatedUser } = require('../middlewares/authenticate');

router.put('/admin/settings', isAuthenticatedUser, settingsController.updateSettings); 
router.get('/admin/settings/get', isAuthenticatedUser, settingsController.updateSettings); 

module.exports = router;
