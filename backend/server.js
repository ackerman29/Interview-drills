require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const rateLimit = require('express-rate-limit');
const passport = require('passport');

const apiRoutes = require('./routes/api');
const authRoutes = require('./routes/auth');
const drillsRoutes = require('./routes/drills');
const { errorHandler } = require('./middleware/errorHandler');

require('./config/passport'); 

const app = express();
const PORT = process.env.PORT || 4000;

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/upivot-mini';
mongoose.connect(mongoUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  maxPoolSize: 20, 
}).then(() => {
  console.log('Mongo connected');
}).catch(err => {
  console.error('Mongo connection error', err);
});

app.use(helmet());
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));

const cors = require('cors');

const allowedOrigin = process.env.FRONTEND_URL || 'http://localhost:5173';

app.use(cors({
  origin: allowedOrigin,
  credentials: true,
  methods: ['GET','POST','PUT','DELETE','OPTIONS'],
  allowedHeaders: ['Content-Type','Authorization']
}));

app.options('*', cors({
  origin: allowedOrigin,
  credentials: true,
  methods: ['GET','POST','PUT','DELETE','OPTIONS'],
  allowedHeaders: ['Content-Type','Authorization']
}));



const limiter = rateLimit({
  windowMs: 5 * 60 * 1000, 
  max: 100, 
  standardHeaders: true,
  legacyHeaders: false
});

app.use(limiter);

app.use(passport.initialize());


app.use('/auth', authRoutes);
app.use('/api', apiRoutes);
app.use('/api/drills', drillsRoutes);

app.get('/', (req, res) => res.json({ ok: true }));

app.use(errorHandler);


app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});