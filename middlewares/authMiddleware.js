const jwt = require('jsonwebtoken');
const User = require('../models/user');

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ message: 'Access denied' });
  try {
    const decoded = jwt.verify(token, "general");
    req.user = decoded;
    next();
  } catch (err) {
    res.status(400).json({ message: 'Invalid token' });
  }
};

const checkRole = (role) => (req, res, next) => {
  console.log("User Role in token:", req.user.role);
  if (req.user.role !== role) return res.status(403).json({ message: 'Forbidden' });
  next();
};
module.exports = { verifyToken, checkRole };
