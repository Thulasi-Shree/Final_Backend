const catchAsyncError = require('../../middlewares/catchAsyncError');
const Settings = require('../../model/Settings');
const SuccessHandler = require('../../utils/successHandler');
const ErrorHandler = require('../../utils/errorHandler');

// Update minimum delivery charge and tax amount
const updateSettings = catchAsyncError(async (req, res, next) => {
  const { minDeliveryCharge, taxAmount, deliveryChargePerKm, deliveryKm } = req.body;

  try {
    let settings = await Settings.findOne();

    if (!settings) {
      settings = new Settings({ minDeliveryCharge, taxAmount, deliveryChargePerKm, deliveryKm });
    } else {
      settings.minDeliveryCharge = minDeliveryCharge;
      settings.taxAmount = taxAmount;
      settings.deliveryChargePerKm = deliveryChargePerKm;
      settings.deliveryKm = deliveryKm;
    }

    await settings.save();

    const successResponse = new SuccessHandler('Settings updated successfully', settings);
    successResponse.sendResponse(res);
  } catch (error) {
    console.error(error);
    next(new ErrorHandler('Internal Server Error', 500));
  }
});
const getSettings = catchAsyncError(async (req, res, next) => {
    try {
      const settings = await Settings.find();
  
      if (!settings) {
        return next(new ErrorHandler('Data not found', 404));
      }
  
      const successResponse = new SuccessHandler('Data fetched successfully', settings);
      successResponse.sendResponse(res);
    } catch (error) {
      console.error(error);
      next(new ErrorHandler('Internal Server Error', 500));
    }
  });

module.exports = {
  updateSettings,
  getSettings
};
