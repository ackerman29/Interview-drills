const jwt = require('jsonwebtoken');
const User = require('../models/User');
const COOKIE_NAME = process.env.COOKIE_NAME || 'upivot_session';
const JWT_SECRET = process.env.JWT_SECRET || 'please_change_me';


async function requireAuth(req, res, next) {
  try {
    const token = req.cookies && req.cookies[COOKIE_NAME];
    console.log('Auth middleware token:', token);
    if (!token) return res.status(401).json({ error: { code: 'unauthenticated', message: 'No auth cookie' } });

    const payload = jwt.verify(token, JWT_SECRET);
    console.log('Decoded JWT payload:', payload); 

    const user = await User.findById(payload.sub).select('-__v');
    console.log('Found user:', user); 

    if (!user) return res.status(401).json({ error: { code: 'unauthenticated', message: 'User not found' }});

    req.user = user;
    next();
  } catch (err) {
    console.error('Auth middleware error:', err);
    return res.status(401).json({ error: { code: 'unauthenticated', message: 'Invalid token' } });
  }
}

module.exports = { requireAuth };
