## MINI INTERVIEW DRILL FULL STACK ASSIGNMENT

**Video Demo link:**
https://www.loom.com/share/dfcb2b05fb3d4eb3b35d0e5cafedd098?sid=edbbc988-174a-47b7-a7aa-de55f2168ff3

**Problem Statement:**<br>
This project is a full-stack web application built to manage interview or theoretical drills and track user attempts. It features a Node.js + Express backend with MongoDB for data persistence, and a React frontend for interactive drill navigation and submission.

This assignment demonstrates full-stack development skills, including authentication, REST API design, database modeling, frontend integration, automated testing, and performance optimization.

**Tech Stack Used:**

 1. Node Js (backend)
 2. MongoDB (Database)
 3. React+ Vite, tailwind Css (frontend)
 4. Google SSO authentication for secure login
 5. Docker (for container)
 
**Key functionalities include:**
1. Google SSO authentication for secure login.
2. Drill management: list, view, and submit answers to drills.
3. Attempt tracking: calculate scores based on submitted answers and store attempts.
4. History dashboard: view last 5 attempts for the logged-in user.
5. Performance and security measures: rate limiting, CORS configuration, Helmet, and input validation.
6. Caching and load testing: ensure fast response times for frequently accessed routes.
7. Load testing with k6: ensure cached drills route responds efficiently (p95 < 150ms locally).


**To Start the app:**

1. Copy the .env.example to .env and fill in the values.
```bash 
cp .env.example .env 
```

2. Start Backend 
```bash
docker compose down
docker compose up --build
```

3. Open a terminal inside the backend container:
```bash
docker compose exec backend sh
```
This populates the drills collection in MongoDB.
```bash
node seed/seedDrills.js
```

4. To check Api health
```bash
curl http://localhost:4000/api/health
```

5. Start the frontend
```bash
http://localhost:5173
```

6. For k6 load testing run this command in root directory:
```bash
k6 run k6_test.js
```









