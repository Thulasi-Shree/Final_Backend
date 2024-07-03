
const catchAsyncError = require('../../middlewares/catchAsyncError');
const crypto = require('crypto-js');
require('dotenv').config();

exports.locationApikey = catchAsyncError(async (req, res, next) => {
    try {
        const apiKey1 = process.env.LOCATION_API_KEY;
        const secretKey = 'ghjdjdgdhddjjdhgdcdghww#hsh536';
    
        const apiKey = crypto.AES.encrypt(apiKey1, secretKey).toString();
        res.json({ apiKey });
        

        res.status(200).json({ apiKey });
    } catch (error) {
        console.error('Error retrieving API key:', error);
        res.status(500).json({ error: 'Unable to retrieve API key' });
    }
});

