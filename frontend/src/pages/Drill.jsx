// src/pages/Drill.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Drill = () => {
  const { id } = useParams();
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

  if (loading) return <p>Loading drill...</p>;
  if (!drill) return <p>Drill not found</p>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>{drill.title}</h1>
      <p>Difficulty: {drill.difficulty}</p>

      {drill.questions.map((q) => (
  <div key={q.qid} style={{ marginBottom: '15px' }}>
    <p>{q.prompt}</p>
    {q.options?.map((opt) => (
      <label key={opt} style={{ display: 'block' }}>
        <input
          type="radio"
          name={q.qid}
          value={opt}
          checked={answers[q.qid] === opt}
          onChange={() => handleChange(q.qid, opt)}
        />
        {opt}
      </label>
    ))}
  </div>
))}


      <button onClick={handleSubmit}>Submit</button>
      {score !== null && <p>Your score: {score}</p>}
    </div>
  );
};

export default Drill;
