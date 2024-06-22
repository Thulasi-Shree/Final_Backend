const mongoose = require('mongoose');

const SettingsSchema = new mongoose.Schema({
  minDeliveryCharge: {
    type: Number,
    required: true,
    default: 0
  },
  deliveryChargePerKm: {
    type: Number,
    required: true,
    default: 0
  },
  taxAmount: {
    type: Number,
    required: true,
    default: 0
  }
});

module.exports = mongoose.model('Settings', SettingsSchema);
