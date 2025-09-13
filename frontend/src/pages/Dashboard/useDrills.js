// src/components/Dashboard/useDrills.js
import { useState, useEffect } from 'react';
import axios from 'axios';

export const useDrills = () => {
  const [drills, setDrills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDrills = async () => {
      try {
        const res = await axios.get('http://localhost:4000/api/drills', {
          withCredentials: true,
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

  return { drills, loading, error };
};
