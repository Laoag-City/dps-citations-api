{/*
  const { validationResult } = require('express-validator');
const DPSCitation = require('../models/DPSCitation');

exports.createDPSCitation = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const dpscitation = new DPSCitation(req.body);
    await dpscitation.save();
    res.status(201).send(dpscitation);
  } catch (error) {
    res.status(400).send(error.message); // Handle specific error message
  }
};

exports.getDPSCitations = async (req, res) => {
  try {
    const dpscitations = await DPSCitation.find({});
    res.status(200).send(dpscitations);
  } catch (error) {
    res.status(500).send({ error: 'Failed to fetch DPS Citations' });
  }
};

exports.getDPSCitationsById = async (req, res) => {
  try {
    const dpscitation = await DPSCitation.findById(req.params.id);
    if (!dpscitation) {
      return res.status(404).send({ error: 'DPSCitation not found' });
    }
    res.status(200).send(dpscitation);
  } catch (error) {
    res.status(500).send(error.message); // Handle specific error message
  }
};

exports.updateDPSCitation = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const dpscitation = await DPSCitation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!dpscitation) {
      return res.status(404).send({ error: 'DPSCitation not found' });
    }
    res.status(200).send(dpscitation);
  } catch (error) {
    res.status(400).send(error.message); // Handle specific error message
  }
};

exports.deleteDPSCitation = async (req, res) => {
  try {
    const dpscitation = await DPSCitation.findByIdAndDelete(req.params.id);
    if (!dpscitation) {
      return res.status(404).send({ error: 'DPSCitation not found' });
    }
    res.status(200).send(dpscitation);
  } catch (error) {
    res.status(500).send(error.message); // Handle specific error message
  }
};

  */}
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
    // Get page and limit from query parameters, with default values
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Fetch the total count of documents
    const totalDocuments = await DPSCitation.countDocuments();

    // Fetch the documents with pagination and sorting by dateApprehended in ascending order
    const dpsCitations = await DPSCitation.find({})
      .sort({ dateApprehended: -1 })
      .skip(skip)
      .limit(limit);

    // Send the response with paginated results and metadata
    res.status(200).json({
      totalDocuments,
      totalPages: Math.ceil(totalDocuments / limit),
      currentPage: page,
      pageSize: limit,
      dpsCitations,
    });
  } catch (error) {
    console.error('Failed to fetch DPS Citations:', error);
    res.status(500).json({ error: 'Failed to fetch DPS Citations' });
  }
};

/* exports.getDPSCitations = async (req, res) => {
  try {
    const dpsCitations = await DPSCitation.find({});
    res.status(200).json(dpsCitations);
  } catch (error) {
    console.error('Failed to fetch DPS Citations:', error);
    res.status(500).json({ error: 'Failed to fetch DPS Citations' });
  }
};
 */
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

// Get amendStatus of a DPSCitation by ID
exports.getDPSCitationStatusById = async (req, res) => {
  try {
    const { id } = req.params;

    const dpscitation = await DPSCitation.findById(id);
    if (!dpscitation) {
      return res.status(404).send({ error: 'DPSCitation not found' });
    }

    res.status(200).send({ amendStatus: dpscitation.amendStatus });
  } catch (error) {
    console.error('Error in getDPSCitationStatusById:', error);
    res.status(500).send({ error: 'Internal Server Error' });
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
