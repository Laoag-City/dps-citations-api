const express = require('express');
const router = express.Router();
const DPSApprehenderController = require('../controllers/DPSApprehenderController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/', authMiddleware, DPSApprehenderController.createDPSApprehender );
router.get('/', DPSApprehenderController.getDPSApprehender );

module.exports = router;