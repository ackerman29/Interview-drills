async function requireAuth(req, res, next) {
  try {
    console.log('Auth middleware token (mock):', req.cookies);
    const token = req.cookies && req.cookies['upivot_session'];
    if (!token) {
      console.log('No token found, sending mock 401');
      return res.status(401).json({ error: 'No auth cookie (mock)' });
    }

    const payload = { sub: 'mockUserId' };
    console.log('Decoded JWT payload (mock):', payload);

    const user = { _id: 'mockUserId', name: 'Test User', email: 'test@example.com' };
    console.log('Found user (mock):', user);

    req.user = user;
    next();
  } catch (err) {
    console.error('Auth middleware error (mock):', err);
    return res.status(401).json({ error: 'Invalid token (mock)' });
  }
}

module.exports = { requireAuth };
