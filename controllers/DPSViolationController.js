const DPSViolation = require('../models/DPSViolation');

exports.createDPSCitation = async (req, res) => {
  try {
    const dpsviolation = new DPSViolation(req.body);
    await dpsviolation.save();
    res.status(201).send(dpsviolation);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getDPSCitations = async (req, res) => {
  try {
    const dpsviolation = await DPSViolation.find({});
    res.status(200).send(dpsviolation);
  } catch (error) {
    res.status(500).send({error: 'Failed to fetch DPS Citations'});
  }
};
