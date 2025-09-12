require('dotenv').config();
const mongoose = require('mongoose');
const Drill = require('../models/Drill');

async function seed() {
  const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/upivot-mini';
  await mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });

  await Drill.deleteMany({});

  const d1 = new Drill({
    title: 'HTTP Basics',
    difficulty: 'easy',
    tags: ['networking','http'],
    questions: [
      {
        qid: 'q1',
        prompt: 'What does HTTP stand for?',
        options: ['HyperText Transfer Protocol', 'Hyperlink Transfer Protocol', 'High Transfer Text Protocol'],
        correctAnswer: 'HyperText Transfer Protocol'
      },
      {
        qid: 'q2',
        prompt: 'What is a status code 200?',
        options: ['Error', 'OK', 'Redirect'],
        correctAnswer: 'OK'
      },
      {
        qid: 'q3',
        prompt: 'Name a request method for reading data from server.',
        options: ['POST', 'GET', 'DELETE'],
        correctAnswer: 'GET'
      },
      {
        qid: 'q4',
        prompt: 'What header carries the server response content type?',
        options: ['Content-Length', 'Content-Type', 'Authorization'],
        correctAnswer: 'Content-Type'
      },
      {
        qid: 'q5',
        prompt: 'What does stateless mean in HTTP?',
        options: ['No state, each request independent', 'Server stores session', 'Client must resend cookies'],
        correctAnswer: 'No state, each request independent'
      }
    ]
  });

  const d2 = new Drill({
    title: 'Node.js Event Loop',
    difficulty: 'medium',
    tags: ['nodejs','concurrency'],
    questions: [
      {
        qid: 'q1',
        prompt: 'What is the event loop?',
        options: ['A loop that handles events asynchronously', 'A blocking loop', 'A CPU scheduler'],
        correctAnswer: 'A loop that handles events asynchronously'
      },
      {
        qid: 'q2',
        prompt: 'What is the job of the call stack?',
        options: ['Store function calls', 'Handle async events', 'Manage memory'],
        correctAnswer: 'Store function calls'
      },
      {
        qid: 'q3',
        prompt: 'Name one async API in Node core.',
        options: ['fs.readFile', 'console.log', 'Math.random'],
        correctAnswer: 'fs.readFile'
      },
      {
        qid: 'q4',
        prompt: 'What is the difference between microtask and macrotask?',
        options: ['Microtasks run before macrotasks', 'Macrotasks run before microtasks', 'They run simultaneously'],
        correctAnswer: 'Microtasks run before macrotasks'
      },
      {
        qid: 'q5',
        prompt: 'Why use worker threads?',
        options: ['Parallel CPU-intensive tasks', 'Single-threaded tasks', 'To block event loop'],
        correctAnswer: 'Parallel CPU-intensive tasks'
      }
    ]
  });

  await d1.save();
  await d2.save();
  console.log('Seed complete');
  process.exit(0);
}

seed().catch(err => {
  console.error(err);
  process.exit(1);
});
