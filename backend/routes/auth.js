const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const router = express.Router();
const User = require('../models/User');



const COOKIE_NAME = process.env.COOKIE_NAME || 'upivot_session';
const JWT_SECRET = process.env.JWT_SECRET || 'please_change_me';
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';

router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback', passport.authenticate('google', { session: false, failureRedirect: `${FRONTEND_URL}/?auth=fail` }), async (req, res) => {
  const user = req.user;
  const payload = {
    sub: user._id.toString(),
    email: user.email,
    name: user.name
  };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN || '7d' });

  const isProd = process.env.NODE_ENV === 'production';
  res.cookie(COOKIE_NAME, token, {
    httpOnly: true,
    secure: isProd,
    sameSite: isProd ? 'none' : 'lax',
    maxAge: 1000 * 60 * 60 * 24 * 7 
  });

  res.redirect(`${FRONTEND_URL}/dashboard`);
});

router.post('/signout', (req, res) => {
  res.clearCookie(COOKIE_NAME, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'lax' });
  return res.json({ ok: true });
});

module.exports = router;
