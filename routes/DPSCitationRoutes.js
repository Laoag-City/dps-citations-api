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