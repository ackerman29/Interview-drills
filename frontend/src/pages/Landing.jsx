// src/pages/Landing.jsx
import React from "react";

const Landing = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gray-900 text-center">
      <div>
        <h1 className="text-4xl font-extrabold text-white mb-6">
          Mini Interview Drills
        </h1>
        <p className="text-gray-300 mb-8 max-w-md mx-auto">
          Sharpen your skills with quick, interactive interview practice.
        </p>
        <a href="http://localhost:4000/auth/google">
          <button className="px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg shadow-md transition duration-200">
            Sign in with Google
          </button>
        </a>
      </div>
    </div>
  );
};

export default Landing;
