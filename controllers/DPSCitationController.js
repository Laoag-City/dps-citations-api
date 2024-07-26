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
    res.status(400).send(error.message);
  }
};

{/* old code (no search) 
  exports.getDPSCitations = async (req, res) => {
  try {
    // Get page and limit from query parameters, with default values
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    // Fetch the total count of documents
    const totalDocuments = await DPSCitation.countDocuments();

    // Fetch the documents with pagination and sorting by dateApprehended in descending order
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
*/}
exports.getDPSCitations = async (req, res) => {
  try {
    // Get page and limit from query parameters, with default values
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    const searchQuery = req.query.search || '';

    // Build the query object for the search functionality
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

    // Fetch the total count of documents based on the search query
    const totalDocuments = await DPSCitation.countDocuments(query);

    // Fetch the documents with pagination and sorting by dateApprehended in descending order
    const dpsCitations = await DPSCitation.find(query)
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

exports.getDPSCitationsById = async (req, res) => {
  try {
    const dpscitation = await DPSCitation.findById(req.params.id);
    if (!dpscitation) {
      return res.status(404).send({ error: 'DPS Citation ID not found' });
    }
    res.status(200).send(dpscitation);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.getDPSCitationStatusById = async (req, res) => {
  try {
    const dpscitation = await DPSCitation.findById(req.params.id);
    if (!dpscitation) {
      return res.status(404).send({ error: 'DPS Citation ID not found' });
    }
    //res.status(200).send(dpscitation);
    res.status(200).json({ 
      commuteStatus: dpscitation.commuteStatus,
      paymentStatus: dpscitation.paymentStatus
     });
  } catch (error) {
    res.status(500).send(error.message);
  }
/*   try {
    const dpscitation = await DPSCitation.findById(req.params.id);
    if (!dpscitation) {
      return res.status(404).send({ error: 'DPS Citation ID not found' });
    }
    res.status(200).json({ 
      commuteStatus: dpscitation.commuteStatus,
      paymentStatus: dpscitation.paymentStatus
     });
  } catch (error) {
    console.error('Error in getDPSCitationStatusById:', error);
    res.status(500).send({ error: 'Internal Server Error' });
  }
 */
};

exports.updateDPSCitation = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const dpscitation = await DPSCitation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!dpscitation) {
      return res.status(404).send({ error: 'DPS Citation ID not found' });
    }
    res.status(200).send(dpscitation);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

/* exports.updateDPSCitation = async (req, res) => {
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
 */

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

{
  /* exports.deleteDPSCitation = async (req, res) => {
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
 */}