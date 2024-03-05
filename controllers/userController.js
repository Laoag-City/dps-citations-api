const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const secretKey = process.env.JWT_SECRET;

exports.register = async (req, res) => {
  //console.log(req.body);
  try {
    const user = new User(req.body);
    await user.save();
    const token = jwt.sign({ _id: user._id.toString() }, secretKey);
    res.status(201).send({ user, token });
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user || !(await user.comparePassword(req.body.password))) {
      return res.status(401).send({ error: 'Login failed!' });
    }
    const token = jwt.sign({ _id: user._id, username:user.username }, secretKey);
    res.send({ _id:user._id, username:user.username, userrole:user.userrole, token });
  } catch (error) {
    res.status(400).send(error);
  }
};
