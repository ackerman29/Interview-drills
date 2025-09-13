import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { styles, getScoreStyle } from './styles';
import { useDrill } from './useDrill';

const Drill = () => {
  const { id } = useParams();
  const { drill, answers, score, loading, handleChange, handleSubmit } = useDrill(id);
  const [submitHover, setSubmitHover] = useState(false);

  if (loading) return (
    <div style={styles.loadingContainer}>
      <p style={styles.loadingText}>Loading drill...</p>
    </div>
  );

  if (!drill) return (
    <div style={styles.loadingContainer}>
      <p style={styles.loadingText}>Drill not found</p>
    </div>
  );

  return (
    <div style={styles.container}>
      <style>{`
        @keyframes pulse {
          0%,100%{opacity:0.3;transform:scale(1);}
          50%{opacity:0.6;transform:scale(1.1);}
        }
        @keyframes float {
          0%,100%{transform:translateY(0px) rotate(0deg);}
          33%{transform:translateY(-15px) rotate(120deg);}
          66%{transform:translateY(8px) rotate(240deg);}
        }
      `}</style>

      <div style={styles.backgroundBlob1}></div>
      <div style={styles.backgroundBlob2}></div>
      <div style={{...styles.floatingDots, top: '15%', left: '20%'}}></div>
      <div style={{...styles.floatingDots, top: '60%', right: '25%'}}></div>
      <div style={{...styles.floatingDots, bottom: '25%', left: '30%'}}></div>

      <div style={styles.drillCard}>
        <div style={styles.titleGlow}></div>
        <h1 style={styles.drillTitle}>{drill.title}</h1>
        <p style={styles.difficultyText}>Difficulty: {drill.difficulty}</p>

        {drill.questions.map(q => (
          <div key={q.qid} style={styles.questionCard}>
            <p style={styles.questionText}>{q.prompt}</p>
            {q.options?.map(opt => (
              <label key={opt} style={{...styles.optionLabel, backgroundColor: answers[q.qid]===opt?'rgba(220,38,38,0.1)':'transparent'}}>
                <input type="radio" name={q.qid} value={opt} checked={answers[q.qid]===opt} onChange={()=>handleChange(q.qid,opt)} style={styles.optionInput}/>
                {opt}
              </label>
            ))}
          </div>
        ))}

        <div style={styles.submitButtonContainer}>
          <div style={styles.submitButtonGlow}></div>
          <button 
            style={{...styles.submitButton, ...(submitHover?styles.submitButtonHover:{})}}
            onMouseEnter={()=>setSubmitHover(true)}
            onMouseLeave={()=>setSubmitHover(false)}
            onClick={handleSubmit}
          >
            Submit Drill
          </button>
        </div>

        {score!==null && (
          <div style={styles.scoreCard}>
            <p style={getScoreStyle(score)}>Your Score: {score}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Drill;
