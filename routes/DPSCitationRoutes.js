{/* 
  const express = require('express');
const router = express.Router();
const DPSCitationController = require('../controllers/DPSCitationController');
const authMiddleware = require('../middlewares/authMiddleware');
const { body, param } = require('express-validator');

// POST /dpscitations - Create a new citation (requires authentication)
router.post('/', 
  authMiddleware,
  [
    body('title').notEmpty().withMessage('Title is required'),
    body('author').notEmpty().withMessage('Author is required'),
    // Add more validation rules as needed
  ],
  DPSCitationController.createDPSCitation
);

// GET /dpscitations - Get all citations with pagination and filtering (requires authentication)
router.get('/', 
  authMiddleware,
  [
    query('page').optional().isInt({ min: 1 }).toInt(),
    query('limit').optional().isInt({ min: 1, max: 100 }).toInt(),
    // Add more filtering/validation as needed
  ],
  DPSCitationController.getDPSCitations
);

// GET /dpscitations/:id - Get a single citation by ID (requires authentication)
router.get('/:id',
  authMiddleware,
  [
    param('id').isMongoId().withMessage('Invalid citation ID'),
  ],
  DPSCitationController.getDPSCitationById
);

// PUT /dpscitations/:id - Update a citation by ID (requires authentication)
router.put('/:id',
  authMiddleware,
  [
    param('id').isMongoId().withMessage('Invalid citation ID'),
    body('title').optional().notEmpty().withMessage('Title is required'),
    body('author').optional().notEmpty().withMessage('Author is required'),
    // Add more validation rules as needed
  ],
  DPSCitationController.updateDPSCitation
);

// DELETE /dpscitations/:id - Delete a citation by ID (requires authentication)
router.delete('/:id',
  authMiddleware,
  [
    param('id').isMongoId().withMessage('Invalid citation ID'),
  ],
  DPSCitationController.deleteDPSCitation
);

module.exports = router;

  */}
const express = require('express');
const router = express.Router();
const DPSCitationController = require('../controllers/DPSCitationController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, DPSCitationController.createDPSCitation);
router.get('/', authMiddleware, DPSCitationController.getDPSCitations);
router.get('/:id', authMiddleware, DPSCitationController.getDPSCitationsById);
router.put('/:id', authMiddleware, DPSCitationController.updateDPSCitation);
//router.delete('/oscpapplications/:id', auth, applicationController.deleteApplication);

module.exports = router;
