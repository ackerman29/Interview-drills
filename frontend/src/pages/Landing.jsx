// src/pages/Landing.jsx
import React from 'react';

const Landing = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Mini Interview Drills</h1>
      <a href="http://localhost:4000/auth/google">
        <button>Sign in with Google</button>
      </a>
    </div>
  );
};

export default Landing;
