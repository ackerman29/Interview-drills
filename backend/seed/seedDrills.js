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

  const d3 = new Drill({
    title: 'C++ Concurrency & Asynchronous Programming',
    difficulty: 'medium',
    tags: ['c++', 'concurrency', 'threads', 'async'],
    questions: [
      {
        qid: 'q1',
        prompt: 'What is a thread in C++?',
        options: [
          'A single line of execution within a process',
          'A memory block',
          'A type of pointer'
        ],
        correctAnswer: 'A single line of execution within a process'
      },
      {
        qid: 'q2',
        prompt: 'Which C++ feature allows asynchronous execution?',
        options: ['std::thread', 'std::vector', 'std::map'],
        correctAnswer: 'std::thread'
      },
      {
        qid: 'q3',
        prompt: 'What is the purpose of std::async?',
        options: [
          'Launch tasks asynchronously',
          'Sort arrays',
          'Manage memory allocation'
        ],
        correctAnswer: 'Launch tasks asynchronously'
      },
      {
        qid: 'q4',
        prompt: 'What is a future in C++?',
        options: [
          'An object holding a result of an async task',
          'A type of pointer',
          'A container class like vector'
        ],
        correctAnswer: 'An object holding a result of an async task'
      },
      {
        qid: 'q5',
        prompt: 'Why use mutexes in C++?',
        options: [
          'To prevent data races in concurrent code',
          'To optimize CPU cache',
          'To manage heap memory'
        ],
        correctAnswer: 'To prevent data races in concurrent code'
      }
    ]
});



const d4 = new Drill({
    title: 'Database Management',
    difficulty: 'medium',
    tags: ['database', 'sql', 'nosql', 'dbms'],
    questions: [
      {
        qid: 'q1',
        prompt: 'What is a primary key?',
        options: [
          'A unique identifier for a record',
          'A type of index',
          'A foreign key reference'
        ],
        correctAnswer: 'A unique identifier for a record'
      },
      {
        qid: 'q2',
        prompt: 'What is the difference between SQL and NoSQL databases?',
        options: [
          'SQL is relational; NoSQL is non-relational',
          'SQL stores JSON; NoSQL stores tables',
          'SQL is faster in all cases'
        ],
        correctAnswer: 'SQL is relational; NoSQL is non-relational'
      },
      {
        qid: 'q3',
        prompt: 'What is a foreign key used for?',
        options: [
          'To link two tables together',
          'To index a column',
          'To enforce uniqueness in a table'
        ],
        correctAnswer: 'To link two tables together'
      },
      {
        qid: 'q4',
        prompt: 'What does ACID stand for in databases?',
        options: [
          'Atomicity, Consistency, Isolation, Durability',
          'Accuracy, Consistency, Integrity, Data',
          'Atomicity, Concurrency, Isolation, Data'
        ],
        correctAnswer: 'Atomicity, Consistency, Isolation, Durability'
      },
      {
        qid: 'q5',
        prompt: 'What is normalization in a database?',
        options: [
          'Process of organizing data to reduce redundancy',
          'Backing up data regularly',
          'Encrypting sensitive data'
        ],
        correctAnswer: 'Process of organizing data to reduce redundancy'
      }
    ]
});

const d5 = new Drill({
    title: 'Computer Networks',
    difficulty: 'medium',
    tags: ['networking', 'protocols', 'cn'],
    questions: [
      {
        qid: 'q1',
        prompt: 'What does TCP stand for?',
        options: [
          'Transmission Control Protocol',
          'Transport Communication Protocol',
          'Transfer Control Process'
        ],
        correctAnswer: 'Transmission Control Protocol'
      },
      {
        qid: 'q2',
        prompt: 'What is the main difference between TCP and UDP?',
        options: [
          'TCP is connection-oriented; UDP is connectionless',
          'TCP is faster than UDP',
          'UDP guarantees delivery; TCP does not'
        ],
        correctAnswer: 'TCP is connection-oriented; UDP is connectionless'
      },
      {
        qid: 'q3',
        prompt: 'What is an IP address used for?',
        options: [
          'Identifying a device on a network',
          'Encrypting network data',
          'Routing packets only in local network'
        ],
        correctAnswer: 'Identifying a device on a network'
      },
      {
        qid: 'q4',
        prompt: 'What is the purpose of a subnet mask?',
        options: [
          'To divide an IP network into subnets',
          'To hide IP addresses',
          'To prioritize network traffic'
        ],
        correctAnswer: 'To divide an IP network into subnets'
      },
      {
        qid: 'q5',
        prompt: 'Which layer of the OSI model handles routing?',
        options: [
          'Network layer',
          'Transport layer',
          'Data Link layer'
        ],
        correctAnswer: 'Network layer'
      }
    ]
});

  await d1.save();
  await d2.save();
    await d3.save();
    await d4.save();
    await d5.save();    

  console.log('Seed complete');
  process.exit(0);
}

seed().catch(err => {
  console.error(err);
  process.exit(1);
});
