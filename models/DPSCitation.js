const mongoose = require('mongoose');

const DPSCitationSchema = new mongoose.Schema({
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
  apprehendingOfficerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'DPSApprehender'
  },
  apprehendingOfficer: {
    type: String,
    trim: true
  },
  apprehendingUnitOf:{
    type:String,
    trim: true
  },
  commuteStatus: {
    type: Boolean,
    default: false
  },
  commuteDate: {
    type: Date
  },
  commutedViolation: 
  {
    type: String
  },
  commutedViolationAmount: 
  {
    type: Number
  },
  commutedViolationRemark:{
    type: String
  },
  paymentStatus:{
    type: Boolean,
    default: false
  },
  paymentORNumber:{
    type: String,
    trim: true
  },
  amountPaid:{
    type:Number
  },
  paymentDate:{
    type: Date
  },
  paymentRemarks:{type: String,
    trim:true
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

module.exports = mongoose.model('DPSCitation', DPSCitationSchema);
