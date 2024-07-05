const mongoose = require('mongoose');

//{ title: 'puso', name: 'mike allan borromeo', designation: 'traffic enforcer' },

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
  },{collection: 'violations'});

module.exports = mongoose.model('DPSApprehender', DPSApprehenderSchema);
