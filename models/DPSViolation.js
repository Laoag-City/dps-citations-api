const mongoose = require('mongoose');

const DPSViolationSchema = new mongoose.Schema({
  ticketNumber: {
    type: String,
    required: true,
    trim: true
  },
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  middleName: {
    type: String,
    trim: true
  },
  homeAddress: {
    type: String,
    trim: true
  },
  licenseNumber: {
    type: String,
    required: true,
    trim: true
  },
  dateApprehended: {
    type: Date,
    required: true
  },
  timeApprehended: {
    type: Date,
  },
  streetApprehended: {
    type: String,
    trim: true
  },
  plateNumber: {
    type: String,
    trim: true
  },
  vehicleColor: {
    type: String,
    trim: true
  },
  apprehendingOfficer: {
    type: String,
    trim: true
  },
  amendStatus: {
    type: Boolean,
    default: false
  },
  dateAmended: {
    type: Date
  },
  violations: [
    {
      violation: {
        type: String,
        required: true
      },
      amount: {
        type: Number,
        required: true
      },
      remarks: {
        type: String,
        trim: true
      }
    }
  ]
},{collection: 'citations'});

module.exports = mongoose.model('DPSViolation', DPSViolationSchema);
