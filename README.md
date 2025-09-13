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


## Getting Started

Follow these steps to set up and run the application:

### 1. Install Dependencies

Clone the repository, then run the following command in both the `frontend` and `backend` directories:

```bash
npm install
```

### 2. Configure Environment Variables

Copy the example environment file and update the values as needed:

```bash
cp .env.example .env
```

### 3. Start the Backend

Build and start the backend services using Docker Compose:

```bash
docker compose down
docker compose up --build
```

### 4. Seed the Database

Open a shell inside the backend container and run the seed script to populate the drills collection in MongoDB:

```bash
docker compose exec backend sh
node seed/seedDrills.js
```

### 5. Check API Health

Verify the backend API is running:

```bash
curl http://localhost:4000/api/health
```

### 6. Start the Frontend

Access the frontend application in your browser:

```
http://localhost:5173
```

### 7. Run k6 Load Testing

Execute the following command from the project root to run k6 load tests:

```bash
k6 run k6_test.js
```

#### k6 Test Evidence

![k6 test screenshot](https://github.com/user-attachments/assets/9dd43239-4bd7-4893-b8dc-b191943f6bb8)









