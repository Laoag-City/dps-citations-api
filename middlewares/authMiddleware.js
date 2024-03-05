const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

require('dotenv').config();

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').replace('Bearer ', '');
    //console.log(req.header('Authorization'))
    //console.log(token)
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(decoded._id)
    // console.log(decoded.username)
    //const user = await User.findOne({ username: decoded.username});
    const user = await User.findOne({ _id: decoded._id});
    //const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });
    //console.log(decoded._id)

    if (!user) {
      throw new Error();
    }

    req.token = token;
    req.user = user;
    next();
  } catch (error) {
    res.status(401).send({ error: 'Please authenticate.' });
  }
};

module.exports = auth;
