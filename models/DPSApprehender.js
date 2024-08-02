const mongoose = require('mongoose');

const DPSApprehenderSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    firstName:{
      type: String,
      required: true
    },
    lastName:{
      type: String,
      required: true
    },
    midName:{
      type: String,
    },
    designation:{
      type: String,
      required: true
    },
    unit:{
      type: String,
      required: true
    }
  },{collection: 'apprehending-officers'});

module.exports = mongoose.model('DPSApprehender', DPSApprehenderSchema);
