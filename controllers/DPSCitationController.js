const { validationResult } = require('express-validator');
const mongoose = require('mongoose');
const DPSCitation = require('../models/DPSCitation');

// Helper function to check if a string is a valid ObjectId
const isValidObjectId = (id) => mongoose.Types.ObjectId.isValid(id);

// Create a new DPS Citation
exports.createDPSCitation = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Validate and convert apprehendingOfficerId to ObjectId
    if (req.body.apprehendingOfficerId && isValidObjectId(req.body.apprehendingOfficerId)) {
      req.body.apprehendingOfficerId = new mongoose.Types.ObjectId(req.body.apprehendingOfficerId);
    } else {
      return res.status(400).send('Invalid apprehendingOfficerId');
    }

    const dpscitation = new DPSCitation(req.body);
    await dpscitation.save();
    res.status(201).send(dpscitation);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

// Get DPS Citations with search and pagination
exports.getDPSCitations = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const searchQuery = req.query.search || '';
    
    // Extract date range from query parameters
    const startDate = req.query.startDate ? new Date(req.query.startDate) : null;
    const endDate = req.query.endDate ? new Date(req.query.endDate) : null;

    const query = {
      $or: [
        { ticketNumber: { $regex: searchQuery, $options: 'i' } },
        { firstName: { $regex: searchQuery, $options: 'i' } },
        { lastName: { $regex: searchQuery, $options: 'i' } },
        { licenseNumber: { $regex: searchQuery, $options: 'i' } },
        { plateNumber: { $regex: searchQuery, $options: 'i' } },
        { paymentORNumber: { $regex: searchQuery, $options: 'i' } },
      ],
    };

    // Add date range filter if both startDate and endDate are provided
    if (startDate && endDate) {
      query.dateApprehended = { $gte: startDate, $lte: endDate };
      } else if (startDate) {
        query.dateApprehended = { $gte: startDate };
        } else if (endDate) {
          query.dateApprehended = { $lte: endDate };
        }
    
    const totalDocuments = await DPSCitation.countDocuments(query);

    const dpsCitations = await DPSCitation.find(query)
      .populate('apprehendingOfficerId', 'firstName lastName')
      .sort({ dateApprehended: -1 })
      .skip(skip)
      .limit(limit);

    const formattedCitations = dpsCitations.map(citation => ({
      ...citation.toObject(),
      apprehendingOfficer: citation.apprehendingOfficerId ? `${citation.apprehendingOfficerId.firstName} ${citation.apprehendingOfficerId.lastName}` : ''
    }));

    res.status(200).json({
      totalDocuments,
      totalPages: Math.ceil(totalDocuments / limit),
      currentPage: page,
      pageSize: limit,
      dpsCitations: formattedCitations,
    });
  } catch (error) {
    console.error('Failed to fetch DPS Citations:', error);
    res.status(500).json({ error: 'Failed to fetch DPS Citations' });
  }
};

// Get DPS Citation by ID
exports.getDPSCitationsById = async (req, res) => {
  try {
    const dpscitation = await DPSCitation.findById(req.params.id)
      .populate('apprehendingOfficerId', 'firstName lastName');
    if (!dpscitation) {
      return res.status(404).send({ error: 'DPS Citation ID not found' });
    }
    const formattedCitation = {
      ...dpscitation.toObject(),
      apprehendingOfficer: dpscitation.apprehendingOfficerId ? `${dpscitation.apprehendingOfficerId.firstName} ${dpscitation.apprehendingOfficerId.lastName}` : ''
    };
    res.status(200).send(formattedCitation);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Get DPS Citation status by ID
exports.getDPSCitationStatusById = async (req, res) => {
  try {
    const dpscitation = await DPSCitation.findById(req.params.id);
    if (!dpscitation) {
      return res.status(404).send({ error: 'DPS Citation ID not found' });
    }
    res.status(200).json({
      commuteStatus: dpscitation.commuteStatus,
      paymentStatus: dpscitation.paymentStatus
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Update DPS Citation by ID
exports.updateDPSCitation = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    // Validate and convert apprehendingOfficerId to ObjectId if provided
    if (req.body.apprehendingOfficerId) {
      if (isValidObjectId(req.body.apprehendingOfficerId)) {
        req.body.apprehendingOfficerId = new mongoose.Types.ObjectId(req.body.apprehendingOfficerId);
      } else {
        return res.status(400).send('Invalid apprehendingOfficerId');
      }
    }

    const dpscitation = await DPSCitation.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .populate('apprehendingOfficerId', 'firstName lastName');
    if (!dpscitation) {
      return res.status(404).send({ error: 'DPS Citation ID not found' });
    }
    const formattedCitation = {
      ...dpscitation.toObject(),
      apprehendingOfficer: dpscitation.apprehendingOfficerId ? `${dpscitation.apprehendingOfficerId.firstName} ${dpscitation.apprehendingOfficerId.lastName}` : ''
    };
    res.status(200).send(formattedCitation);
  } catch (error) {
    console.error('Update failed:', error.message);
    res.status(500).json({ error: 'An error occurred while updating the citation' });
  }
};

// Delete DPS Citation by ID
exports.deleteDPSCitation = async (req, res) => {
  try {
    const dpscitation = await DPSCitation.findByIdAndDelete(req.params.id);
    if (!dpscitation) {
      return res.status(404).send({ error: 'DPS Citation ID not found' });
    }
    res.status(200).send(dpscitation);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
