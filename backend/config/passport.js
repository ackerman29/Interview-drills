const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');

const {
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  GOOGLE_CALLBACK_URL
} = process.env;

if (!GOOGLE_CLIENT_ID || !GOOGLE_CLIENT_SECRET || !GOOGLE_CALLBACK_URL) {
  console.warn('Google OAuth environment variables not set - /auth/google will fail until provided.');
}

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: GOOGLE_CALLBACK_URL,
}, async (accessToken, refreshToken, profile, done) => {
  try {
    const providerId = profile.id;
    const email = profile.emails && profile.emails[0] && profile.emails[0].value;
    const name = profile.displayName;
    const picture = profile.photos && profile.photos[0] && profile.photos[0].value;

    if (!email) {
      return done(new Error('Google profile missing email'), null);
    }

    let user = await User.findOne({ 'providers.provider': 'google', 'providers.providerId': providerId });
    if (!user) {
      user = await User.findOne({ email });
    }

    if (user) {
      const hasProvider = user.providers.some(p => p.provider === 'google' && p.providerId === providerId);
      if (!hasProvider) {
        user.providers.push({ provider: 'google', providerId });
        await user.save();
      }
      return done(null, user);
    }

    const newUser = new User({
      email,
      name,
      picture,
      providers: [{ provider: 'google', providerId }],
      createdAt: new Date()
    });
    await newUser.save();
    return done(null, newUser);
  } catch (err) {
    console.error('Passport Google callback error', err);
    return done(err, null);
  }
}));
