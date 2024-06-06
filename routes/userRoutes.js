const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
//const authMiddleware = require('../middlewares/auth');

if (process.env.NODE_ENV !== 'production') {
  router.post('/register', userController.register);
};
router.post('/login', userController.login);

module.exports = router;
