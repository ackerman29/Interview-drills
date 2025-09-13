import { useState, useEffect } from 'react';
import axios from 'axios';

export const useHistory = () => {
  const [attempts, setAttempts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoveredRow, setHoveredRow] = useState(null);

  useEffect(() => {
    const fetchAttempts = async () => {
      try {
        const res = await axios.get('http://localhost:4000/api/attempts?limit=5', {
          withCredentials: true,
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

  return { attempts, loading, error, hoveredRow, setHoveredRow };
};
