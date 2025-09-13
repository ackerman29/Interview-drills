import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Drill = () => {
  const { id } = useParams();
  const [drill, setDrill] = useState(null);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(true);
  const [submitHover, setSubmitHover] = useState(false);

  const styles = {
    container: {
      minHeight: '100vh',
      width: '100%',
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2rem',
      position: 'relative',
      overflow: 'hidden',
    },
    backgroundBlob1: {
      position: 'absolute',
      top: '10%',
      left: '10%',
      width: '250px',
      height: '250px',
      background: 'radial-gradient(circle, rgba(239, 68, 68, 0.08) 0%, transparent 70%)',
      borderRadius: '50%',
      filter: 'blur(60px)',
      animation: 'pulse 4s ease-in-out infinite',
    },
    backgroundBlob2: {
      position: 'absolute',
      bottom: '10%',
      right: '10%',
      width: '200px',
      height: '200px',
      background: 'radial-gradient(circle, rgba(200, 200, 200, 0.15) 0%, transparent 70%)',
      borderRadius: '50%',
      filter: 'blur(60px)',
      animation: 'pulse 4s ease-in-out infinite 2s',
    },
    floatingDots: {
      position: 'absolute',
      width: '8px',
      height: '8px',
      background: 'rgba(0, 0, 0, 0.1)',
      borderRadius: '50%',
      animation: 'float 6s ease-in-out infinite',
    },
    drillCard: {
      position: 'relative',
      zIndex: 10,
      width: '100%',
      maxWidth: '800px',
      background: 'rgba(0, 0, 0, 0.05)',
      backdropFilter: 'blur(15px)',
      border: 'none',
      borderRadius: '20px',
      padding: '2.5rem',
      marginBottom: '2rem',
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
    },
    titleGlow: {
      position: 'absolute',
      top: '-10px',
      left: '-10px',
      right: '-10px',
      height: '80px',
      background: 'linear-gradient(135deg, #dc2626, #7c3aed)',
      borderRadius: '20px',
      filter: 'blur(30px)',
      opacity: 0.3,
      zIndex: -1,
    },
    drillTitle: {
      fontSize: '2.5rem',
      marginBottom: '1rem',
      fontWeight: '900',
      background: 'linear-gradient(135deg, #dc2626 0%, #ec4899 50%, #a855f7 100%)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      color: 'transparent',
      textAlign: 'center',
    },
    difficultyText: {
      marginBottom: '2rem',
      fontSize: '1.1rem',
      color: '#374151',
      fontWeight: '600',
      textAlign: 'center',
    },
    questionCard: {
      background: 'rgba(0, 0, 0, 0.08)',
      backdropFilter: 'blur(10px)',
      border: 'none',
      borderRadius: '16px',
      padding: '1.5rem 2rem',
      marginBottom: '1.5rem',
      boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
      transition: 'all 0.3s ease',
    },
    questionText: {
      fontSize: '1.3rem',
      fontWeight: '600',
      marginBottom: '1rem',
      color: '#1f2937',
      lineHeight: '1.6',
    },
    optionLabel: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '0.75rem',
      cursor: 'pointer',
      padding: '0.5rem',
      borderRadius: '8px',
      transition: 'background-color 0.2s ease',
      color: '#374151',
      fontSize: '1.1rem',
    },
    optionInput: {
      marginRight: '1rem',
      cursor: 'pointer',
      transform: 'scale(1.2)',
    },
    submitButtonContainer: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center',
      marginTop: '2rem',
    },
    submitButtonGlow: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
      borderRadius: '12px',
      filter: 'blur(20px)',
      opacity: 0.8,
      zIndex: -1,
    },
    submitButton: {
      position: 'relative',
      background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
      border: 'none',
      borderRadius: '12px',
      padding: '1.25rem 3rem',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '1.25rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.75rem',
      boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
    },
    submitButtonHover: {
      transform: 'translateY(-4px) scale(1.05)',
      background: 'linear-gradient(135deg, #b91c1c, #991b1b)',
      boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
    },
    scoreCard: {
      marginTop: '2rem',
      background: 'rgba(34, 197, 94, 0.1)',
      backdropFilter: 'blur(10px)',
      border: 'none',
      borderRadius: '12px',
      padding: '1.5rem',
      textAlign: 'center',
      boxShadow: '0 10px 25px rgba(34, 197, 94, 0.1)',
    },
    scoreText: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: '#059669',
      margin: 0,
    },
    loadingContainer: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%)',
    },
    loadingText: {
      fontSize: '1.5rem',
      color: '#374151',
      fontWeight: '600',
    },
  };

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

  if (loading) {
    return (
      <div style={styles.loadingContainer}>
        <p style={styles.loadingText}>Loading drill...</p>
      </div>
    );
  }

  if (!drill) {
    return (
      <div style={styles.loadingContainer}>
        <p style={styles.loadingText}>Drill not found</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(120deg); }
          66% { transform: translateY(8px) rotate(240deg); }
        }
      `}</style>

      {/* Background elements */}
      <div style={styles.backgroundBlob1}></div>
      <div style={styles.backgroundBlob2}></div>
      
      {/* Floating dots */}
      <div style={{...styles.floatingDots, top: '15%', left: '20%', animationDelay: '0s'}}></div>
      <div style={{...styles.floatingDots, top: '60%', right: '25%', animationDelay: '2s'}}></div>
      <div style={{...styles.floatingDots, bottom: '25%', left: '30%', animationDelay: '4s'}}></div>

      <div style={styles.drillCard}>
        <div style={styles.titleGlow}></div>
        <h1 style={styles.drillTitle}>{drill.title}</h1>
        <p style={styles.difficultyText}>Difficulty: {drill.difficulty}</p>

        {drill.questions.map((q) => (
          <div key={q.qid} style={styles.questionCard}>
            <p style={styles.questionText}>{q.prompt}</p>
            {q.options?.map((opt) => (
              <label 
                key={opt} 
                style={{
                  ...styles.optionLabel,
                  backgroundColor: answers[q.qid] === opt ? 'rgba(220, 38, 38, 0.1)' : 'transparent'
                }}
              >
                <input
                  type="radio"
                  name={q.qid}
                  value={opt}
                  checked={answers[q.qid] === opt}
                  onChange={() => handleChange(q.qid, opt)}
                  style={styles.optionInput}
                />
                {opt}
              </label>
            ))}
          </div>
        ))}

        <div style={styles.submitButtonContainer}>
          <div style={styles.submitButtonGlow}></div>
          <button
            style={{
              ...styles.submitButton,
              ...(submitHover ? styles.submitButtonHover : {})
            }}
            onMouseEnter={() => setSubmitHover(true)}
            onMouseLeave={() => setSubmitHover(false)}
            onClick={handleSubmit}
          >
            Submit Drill
          </button>
        </div>

        {score !== null && (
          <div style={styles.scoreCard}>
            <p style={styles.scoreText}>Your Score: {score}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Drill;