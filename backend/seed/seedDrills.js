const mongoose = require('mongoose');
const Drill = require('./models/Drill'); 
require('dotenv').config();

async function seed() {
  try {
    const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/upivot-mini';
    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      maxPoolSize: 20,
    });
    console.log('Mongo connected');

    const d1 = new Drill({
      title: 'HTTP Basics',
      difficulty: 'easy',
      tags: ['networking', 'http'],
      questions: [
        { qid: 'q1', prompt: 'What does HTTP stand for?', keywords: ['hypertext transfer protocol'] },
        { qid: 'q2', prompt: 'What is a status code 200?', keywords: ['ok', 'success'] },
        { qid: 'q3', prompt: 'Name a request method for reading data from server.', keywords: ['get'] },
        { qid: 'q4', prompt: 'What header carries the server response content type?', keywords: ['content-type'] },
        { qid: 'q5', prompt: 'What does stateless mean in HTTP?', keywords: ['no state', 'stateless', 'each request independent'] },
      ],
    });

    const d2 = new Drill({
      title: 'Node.js Event Loop',
      difficulty: 'medium',
      tags: ['nodejs', 'concurrency'],
      questions: [
        { qid: 'q1', prompt: 'What is the event loop?', keywords: ['loop', 'event loop', 'single thread'] },
        { qid: 'q2', prompt: 'What is the job of the call stack?', keywords: ['call stack', 'stack'] },
        { qid: 'q3', prompt: 'Name one async API in Node core.', keywords: ['settimeout', 'fs.readfile', 'process.nexttick'] },
        { qid: 'q4', prompt: 'What is the difference between microtask and macrotask?', keywords: ['microtask', 'macrotask', 'promise'] },
        { qid: 'q5', prompt: 'Why use worker threads?', keywords: ['cpu', 'parallel', 'worker thread'] },
      ],
    });

    await d1.save();
    await d2.save();

    console.log('Seed complete');
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seed();
