const express = require('express');
const router = express.Router();
const { requireAuth } = require('../middleware/auth');
const Attempt = require('../models/Attempt');
const Drill = require('../models/Drill');



router.get('/health', (req, res) => res.json({ ok: true }));

router.get('/me', requireAuth, (req, res) => {
  const { _id, email, name, picture, providers, createdAt } = req.user;
  res.json({ user: { id: _id, email, name, picture, providers, createdAt } });
});


router.post('/attempts', requireAuth, async (req, res) => {
  try {
   console.log('req.user:', req.user);
   console.log('req.body:', req.body);

    const { drillId, answers } = req.body;

    if (!drillId || !answers || !Array.isArray(answers)) {
      return res.status(400).json({ error: { code: 'invalid_input', message: 'drillId and answers are required' } });
    }

    const drill = await Drill.findById(drillId).lean();
    if (!drill)
        {
      return res.status(404).json({ error: { code: 'not_found', message: 'Drill not found' } });
    }

 let correctCount = 0;
drill.questions.forEach((q) => {
  const userAnswerObj = answers.find(a => a.qid === q.qid);
  if (userAnswerObj?.text === q.correctAnswer) correctCount++;
});

const score = Math.round((correctCount / drill.questions.length) * 100);


    const attempt = await Attempt.create({
      userId: req.user._id,
      drillId,
      answers,
      score,
      createdAt: new Date(),
    });

    res.json({ attemptId: attempt._id, score });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: { code: 'server_error', message: 'Something went wrong' } });
  }
});


router.get('/attempts', requireAuth, async (req, res) => {
  const limit = Math.min(parseInt(req.query.limit || '5', 10), 50);
  const attempts = await Attempt.find({ userId: req.user._id })
    .sort({ createdAt: -1 })
    .limit(limit)
    .lean();
  res.json({ attempts });
});

module.exports = router;
