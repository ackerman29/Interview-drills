// src/pages/History.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const History = () => {
  const [attempts, setAttempts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAttempts = async () => {
      try {
        const res = await axios.get('http://localhost:4000/api/attempts?limit=5', {
          withCredentials: true, // important for sending the auth cookie
        });
        setAttempts(res.data.attempts);
      } catch (err) {
        console.error(err);
        setError('Failed to load history');
      } finally {
        setLoading(false);
      }
    };

    fetchAttempts();
  }, []);

  if (loading) return <p>Loading history...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Last 5 Attempts</h2>
      {attempts.length === 0 ? (
        <p>No attempts yet.</p>
      ) : (
        <table border="1" cellPadding="10" style={{ borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>Drill ID</th>
              <th>Score (%)</th>
              <th>Submitted At</th>
            </tr>
          </thead>
          <tbody>
            {attempts.map((a) => (
              <tr key={a._id}>
                <td>{a.drillId}</td>
                <td>{a.score}</td>
                <td>{new Date(a.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default History;
