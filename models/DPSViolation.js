const mongoose = require('mongoose');

const DPSViolationSchema = new mongoose.Schema({
      violation: {
        type: String,
        required: true
      },
      amount: {
        type: Number,
        required: true
      }
},{collection: 'violations'});

module.exports = mongoose.model('DPSViolation', DPSViolationSchema);
