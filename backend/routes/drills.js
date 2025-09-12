const express = require('express');
const router = express.Router();
const Drill = require('../models/Drill');


router.get('/', async (req, res, next) =>{
  try
  {
    const now = Date.now();
    if (cache && cacheExpires > now)
        {
      return res.json({ drills: cache, fromCache: true });
    }
    const drills = await Drill.find().lean();
    cache = drills;
    cacheExpires = now + CACHE_TTL_MS;
    res.json({ drills, fromCache: false });
  } catch (err)
  {
    next(err);
  }

});

router.get('/:id', async (req, res, next) =>
    {
  try {
    const id = req.params.id;
    const drill = await Drill.findById(id).lean();
    if (!drill) return res.status(404).json({ error: { code: 'not_found', message: 'Drill not found' }});
    res.json({ drill });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
