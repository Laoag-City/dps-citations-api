const mongoose = require('mongoose');

const DPSCitationSchema = new mongoose.Schema({
  firstName: String,
  LastName: String,
  MiddleName: String,
  homeAddress: String,
  licenseNumber:String,
  dateApprehended: Date,
  timeApprehended: Date,
  streetApprehended: String,
  plateNumber: String,
  vehicleColor: String,
  apprendingOfficer: String,
  amendStatus: Boolean,
  violations: [
    { violation: String,
      amount: Number,
      remarks: String,
    }
  ]
},{collection: 'citations'});

module.exports = mongoose.model('DPSCitation', DPSCitationSchema);
