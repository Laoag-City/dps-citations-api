const mongoose = require('mongoose');

const DPSCitationSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  middleName: String,
  homeAddress: String,
  licenseNumber:String,
  dateApprehended: Date,
  timeApprehended: Date,
  streetApprehended: String,
  plateNumber: String,
  vehicleColor: String,
  apprehendingOfficer: String,
  amendStatus: Boolean,
  dateAmended: Date,
  violations: [
    { violation: String,
      amount: Number,
      remarks: String,
    }
  ]
},{collection: 'citations'});

module.exports = mongoose.model('DPSCitation', DPSCitationSchema);
