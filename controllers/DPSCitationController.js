const DPSCitation = require('../models/DPSCitation');

exports.createDPSCitation = async (req, res) => {
  try {
    const dpscitation = new DPSCitation(req.body);
    await dpscitation.save();
    res.status(201).send(dpscitation);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.getDPSCitations = async (req, res) => {
  try {
    const dpscitations = await DPSCitation.find({});
    res.status(200).send(dpscitations);
  } catch (error) {
    res.status(500).send({error: 'Failed to fetch DPS Citations'});
  }
};

exports.getDPSCitationsById = async (req, res) => {
  try {
    const dpscitation = await DPSCitation.findById(req.params.id);
    if (!dpscitation) {
      return res.status(404).send();
    }
    res.status(200).send(dpscitation);
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.updateDPSCitation = async (req, res) => {
  try {
    const dpscitation = await DPSCitation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!dpscitation) {
      return res.status(404).send();
    }
    res.status(200).send(dpscitation);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.deleteDPSCitation = async (req, res) => {
  try {
    const dpscitation = await DPSCitation.findByIdAndDelete(req.params.id);
    if (!application) {
      return res.status(404).send();
    }
    res.status(200).send(dpscitation);
  } catch (error) {
    res.status(500).send(error);
  }
};
