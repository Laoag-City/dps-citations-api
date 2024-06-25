{/* 
const express = require('express');
const router = express.Router();
const { body, param, validationResult } = require('express-validator');
const DPSCitationController = require('../controllers/DPSCitationController');
const authMiddleware = require('../middlewares/authMiddleware');

// POST /dpscitations - Create a new citation (requires authentication)
router.post('/', 
  authMiddleware,
  [
    body('firstName').notEmpty().withMessage('First Name is required'),
    body('lastName').notEmpty().withMessage('Last Name is required'),
    body('licenseNumber').notEmpty().withMessage('License Number is required'),
    body('dateApprehended').isISO8601().toDate().withMessage('Invalid date format for Date Apprehended'),
    body('timeApprehended').isISO8601().toDate().withMessage('Invalid date format for Time Apprehended'),
    // Add more validation rules as needed
  ],
  validateRequest,
  DPSCitationController.createDPSCitation
);

// GET /dpscitations - Get all citations (requires authentication)
router.get('/', authMiddleware, DPSCitationController.getDPSCitations);

// GET /dpscitations/:id - Get a single citation by ID (requires authentication)
router.get('/:id',
  authMiddleware,
  [
    param('id').isMongoId().withMessage('Invalid citation ID'),
  ],
  validateRequest,
  DPSCitationController.getDPSCitationById
);

// PUT /dpscitations/:id - Update a citation by ID (requires authentication)
router.put('/:id',
  authMiddleware,
  [
    param('id').isMongoId().withMessage('Invalid citation ID'),
    body('firstName').optional().notEmpty().withMessage('First Name is required'),
    body('lastName').optional().notEmpty().withMessage('Last Name is required'),
    body('licenseNumber').optional().notEmpty().withMessage('License Number is required'),
    body('dateApprehended').optional().isISO8601().toDate().withMessage('Invalid date format for Date Apprehended'),
    body('timeApprehended').optional().isISO8601().toDate().withMessage('Invalid date format for Time Apprehended'),
    // Add more validation rules as needed
  ],
  validateRequest,
  DPSCitationController.updateDPSCitation
);

module.exports = router;

// Validation middleware function
function validateRequest(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
}

  */}
const express = require('express');
const router = express.Router();
const DPSCitationController = require('../controllers/DPSCitationController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, DPSCitationController.createDPSCitation);
router.get('/', authMiddleware, DPSCitationController.getDPSCitations);
//router.get('/status/:id', DPSCitationController.getDPSCitationsById);
router.get('/:id', authMiddleware, DPSCitationController.getDPSCitationsById);
router.put('/:id', authMiddleware, DPSCitationController.updateDPSCitation);
//router.delete('/oscpapplications/:id', auth, applicationController.deleteApplication);

module.exports = router;
