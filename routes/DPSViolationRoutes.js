const express = require('express');
const router = express.Router();
const DPSViolationController = require('../controllers/DPSViolationController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, DPSViolationController.createDPSCitation);
router.get('/', DPSViolationController.getDPSCitations);

module.exports = router;