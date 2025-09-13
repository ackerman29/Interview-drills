import { useState, useEffect } from 'react';
import axios from 'axios';

export const useDrill = (id) => {
  const [drill, setDrill] = useState(null);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDrill = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api/drills/${id}`);
        setDrill(res.data.drill);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchDrill();
  }, [id]);

  const handleChange = (qid, value) => {
    setAnswers({ ...answers, [qid]: value });
  };

  const handleSubmit = async () => {
    try {
      const payload = {
        drillId: id,
        answers: Object.entries(answers).map(([qid, text]) => ({ qid, text })),
      };
      const res = await axios.post('http://localhost:4000/api/attempts', payload, { withCredentials: true });
      setScore(res.data.score);
      alert('Submission successful! Score: ' + res.data.score);
    } catch (err) {
      console.error(err);
      alert('Submission failed');
    }
  };

  return { drill, answers, score, loading, handleChange, handleSubmit };
};
