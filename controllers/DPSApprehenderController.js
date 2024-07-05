const DPSApprehender = require('../models/DPSApprehender');

exports.createDPSApprehender = async (req, res) => {
  try {
    const dpsapprehender = new DPSApprehender(req.body);
    await dpsapprehender.save();
    res.status(201).send(dpsviolation);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getDPSApprehender = async (req, res) => {
  try {
    const dpsapprehender = await DPSApprehender.find({});
    res.status(200).send(dpsapprehender);
  } catch (error) {
    res.status(500).send({error: 'Failed to fetch DPS Appreheding Officers'});
  }
};
