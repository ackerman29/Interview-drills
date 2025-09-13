import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DrillCard from './DrillCard';
import { useDrills } from './useDrills';
import { styles, getDifficultyStyle } from './styles';



const Dashboard = () => {
  const { drills, loading, error } = useDrills();
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  if (loading) return <div>Loading drills...</div>;
  if (error) return <div>{error}</div>;

  return (
   <div style={styles.container}>
  <div style={styles.backgroundBlob1}></div>
  <div style={styles.backgroundBlob2}></div>
  <div style={styles.backgroundBlob3}></div>

  <div style={styles.contentContainer}>
    <div style={styles.headerCard}>
      <h1 style={styles.title}>Available Drills</h1>
    </div>

    <button style={styles.historyButton} onClick={() => navigate('/history')}>History</button>

    <div style={styles.drillsGrid}>
      {drills.length === 0 ? (
        <p>No drills available</p>
      ) : (
        drills.map(drill => (
          <DrillCard
            key={drill._id}
            drill={drill}
            hoveredCard={hoveredCard}
            setHoveredCard={setHoveredCard}
          />
        ))
      )}
    </div>
  </div>
</div>

  );
};

export default Dashboard;
