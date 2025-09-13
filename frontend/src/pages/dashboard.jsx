// src/pages/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [drills, setDrills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDrills = async () => {
      try {
        const res = await axios.get('http://localhost:4000/api/drills', {
          withCredentials: true, // important if cookies are used
        });
        setDrills(res.data.drills);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch drills');
      } finally {
        setLoading(false);
      }
    };

    fetchDrills();
  }, []);

  if (loading) return <p>Loading drills...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Available Drills</h1>
      {drills.length === 0 && <p>No drills available</p>}
      <ul>
        {drills.map((drill) => (
          <li key={drill._id} style={{ marginBottom: '10px' }}>
            <Link to={`/drill/${drill._id}`} style={{ fontWeight: 'bold' }}>
              {drill.title}
            </Link>
            <p>Difficulty: {drill.difficulty}</p>
            <p>Tags: {drill.tags.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
