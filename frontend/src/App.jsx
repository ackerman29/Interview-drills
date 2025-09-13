// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing/Landing';
import Dashboard from './pages/Dashboard/Dashboard';
import Drill from './pages/Drill/Drill';
import History from './pages/History/History';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/drill/:id" element={<Drill />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
}

export default App;
