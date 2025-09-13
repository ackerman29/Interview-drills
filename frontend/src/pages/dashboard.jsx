import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [drills, setDrills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const styles = {
    container: {
      minHeight: '100vh',
      width: '100%',
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%)',
      padding: '2rem',
      position: 'relative',
      overflow: 'hidden',
    },
    backgroundBlob1: {
      position: 'absolute',
      top: '5%',
      left: '5%',
      width: '300px',
      height: '300px',
      background: 'radial-gradient(circle, rgba(239, 68, 68, 0.06) 0%, transparent 70%)',
      borderRadius: '50%',
      filter: 'blur(60px)',
      animation: 'pulse 6s ease-in-out infinite',
    },
    backgroundBlob2: {
      position: 'absolute',
      top: '50%',
      right: '10%',
      width: '250px',
      height: '250px',
      background: 'radial-gradient(circle, rgba(200, 200, 200, 0.12) 0%, transparent 70%)',
      borderRadius: '50%',
      filter: 'blur(60px)',
      animation: 'pulse 6s ease-in-out infinite 3s',
    },
    backgroundBlob3: {
      position: 'absolute',
      bottom: '15%',
      left: '20%',
      width: '200px',
      height: '200px',
      background: 'radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, transparent 70%)',
      borderRadius: '50%',
      filter: 'blur(60px)',
      animation: 'pulse 6s ease-in-out infinite 4s',
    },
    floatingDots: {
      position: 'absolute',
      width: '10px',
      height: '10px',
      background: 'rgba(0, 0, 0, 0.08)',
      borderRadius: '50%',
      animation: 'float 8s ease-in-out infinite',
    },
    contentContainer: {
      position: 'relative',
      zIndex: 10,
      maxWidth: '1200px',
      margin: '0 auto',
    },
    headerCard: {
      position: 'relative',
      background: 'rgba(0, 0, 0, 0.05)',
      backdropFilter: 'blur(15px)',
      border: 'none',
      borderRadius: '24px',
      padding: '3rem 2rem',
      marginBottom: '3rem',
      boxShadow: '0 20px 40px rgba(0,0,0,0.08)',
      textAlign: 'center',
    },
    titleGlow: {
      position: 'absolute',
      top: '-15px',
      left: '-15px',
      right: '-15px',
      height: '120px',
      background: 'linear-gradient(135deg, #dc2626, #7c3aed)',
      borderRadius: '24px',
      filter: 'blur(40px)',
      opacity: 0.2,
      zIndex: -1,
    },
    title: {
      fontSize: 'clamp(2rem, 6vw, 3.5rem)',
      fontWeight: '900',
      background: 'linear-gradient(135deg, #dc2626 0%, #ec4899 50%, #a855f7 100%)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      color: 'transparent',
      margin: 0,
      lineHeight: 1.2,
    },
    historyButton: {
      position: 'absolute',
      top: '2rem',
      right: '2rem',
      background: 'linear-gradient(135deg, #dc2626, #a855f7)',
      color: 'white',
      border: 'none',
      borderRadius: '12px',
      padding: '0.75rem 1.5rem',
      fontSize: '0.9rem',
      fontWeight: '600',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      boxShadow: '0 4px 15px rgba(220, 38, 38, 0.3)',
      zIndex: 20,
    },
    drillsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
      gap: '2rem',
      marginTop: '2rem',
    },
    drillCard: {
      position: 'relative',
      background: 'rgba(0, 0, 0, 0.05)',
      backdropFilter: 'blur(15px)',
      border: 'none',
      borderRadius: '20px',
      padding: '2rem',
      boxShadow: '0 15px 35px rgba(0,0,0,0.08)',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      textDecoration: 'none',
      color: 'inherit',
      display: 'block',
    },
    drillCardHover: {
      transform: 'translateY(-8px) scale(1.02)',
      boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
    },
    drillCardGlow: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.1), rgba(168, 85, 247, 0.1))',
      borderRadius: '20px',
      opacity: 0,
      transition: 'opacity 0.3s ease',
      zIndex: -1,
    },
    drillTitle: {
      fontSize: '1.5rem',
      fontWeight: '700',
      color: '#1f2937',
      marginBottom: '1rem',
      lineHeight: 1.3,
    },
    drillMeta: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.75rem',
    },
    difficultyContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    difficultyLabel: {
      fontSize: '0.9rem',
      fontWeight: '600',
      color: '#6b7280',
    },
    difficultyBadge: {
      padding: '0.25rem 0.75rem',
      borderRadius: '20px',
      fontSize: '0.8rem',
      fontWeight: '600',
      textTransform: 'capitalize',
    },
    tagsContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      flexWrap: 'wrap',
    },
    tagsLabel: {
      fontSize: '0.9rem',
      fontWeight: '600',
      color: '#6b7280',
      minWidth: 'fit-content',
    },
    tag: {
      background: 'rgba(220, 38, 38, 0.1)',
      color: '#dc2626',
      padding: '0.25rem 0.5rem',
      borderRadius: '12px',
      fontSize: '0.75rem',
      fontWeight: '500',
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
    errorContainer: {
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%)',
    },
    errorText: {
      fontSize: '1.25rem',
      color: '#dc2626',
      fontWeight: '600',
      background: 'rgba(220, 38, 38, 0.1)',
      padding: '1rem 2rem',
      borderRadius: '12px',
    },
    emptyState: {
      textAlign: 'center',
      padding: '4rem 2rem',
      background: 'rgba(0, 0, 0, 0.03)',
      borderRadius: '20px',
      marginTop: '2rem',
    },
    emptyStateText: {
      fontSize: '1.25rem',
      color: '#6b7280',
      fontWeight: '500',
    },
  };

  const getDifficultyStyle = (difficulty) => {
    const baseStyle = styles.difficultyBadge;
    switch (difficulty?.toLowerCase()) {
      case 'easy':
        return { ...baseStyle, background: 'rgba(34, 197, 94, 0.1)', color: '#059669' };
      case 'medium':
        return { ...baseStyle, background: 'rgba(245, 158, 11, 0.1)', color: '#d97706' };
      case 'hard':
        return { ...baseStyle, background: 'rgba(239, 68, 68, 0.1)', color: '#dc2626' };
      default:
        return { ...baseStyle, background: 'rgba(107, 114, 128, 0.1)', color: '#6b7280' };
    }
  };

  const [hoveredCard, setHoveredCard] = useState(null);

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

  if (loading) {
    return (
      <div style={styles.loadingContainer}>
        <p style={styles.loadingText}>Loading drills...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.errorContainer}>
        <p style={styles.errorText}>{error}</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(120deg); }
          66% { transform: translateY(10px) rotate(240deg); }
        }
      `}</style>

      {/* Background elements */}
      <div style={styles.backgroundBlob1}></div>
      <div style={styles.backgroundBlob2}></div>
      <div style={styles.backgroundBlob3}></div>
      
      {/* Floating dots */}
      <div style={{...styles.floatingDots, top: '20%', left: '15%', animationDelay: '0s'}}></div>
      <div style={{...styles.floatingDots, top: '70%', right: '20%', animationDelay: '3s'}}></div>
      <div style={{...styles.floatingDots, bottom: '30%', left: '30%', animationDelay: '6s'}}></div>
      <div style={{...styles.floatingDots, top: '40%', right: '40%', animationDelay: '2s'}}></div>

      <div style={styles.contentContainer}>
        {/* Header */}
        <div style={styles.headerCard}>
          <div style={styles.titleGlow}></div>
          <h1 style={styles.title}>Available Drills</h1>
        </div>

        <button 
          style={styles.historyButton}
          onClick={() => navigate('/history')}
          onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
          onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
        >
          History
        </button>

        {/* Drills Grid */}
        {drills.length === 0 ? (
          <div style={styles.emptyState}>
            <p style={styles.emptyStateText}>No drills available at the moment</p>
          </div>
        ) : (
          <div style={styles.drillsGrid}>
            {drills.map((drill) => (
              <Link
                key={drill._id}
                to={`/drill/${drill._id}`}
                style={{
                  ...styles.drillCard,
                  ...(hoveredCard === drill._id ? styles.drillCardHover : {})
                }}
                onMouseEnter={() => setHoveredCard(drill._id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div 
                  style={{
                    ...styles.drillCardGlow,
                    opacity: hoveredCard === drill._id ? 1 : 0
                  }}
                ></div>
                
                <h3 style={styles.drillTitle}>{drill.title}</h3>
                
                <div style={styles.drillMeta}>
                  <div style={styles.difficultyContainer}>
                    <span style={styles.difficultyLabel}>Difficulty:</span>
                    <span style={getDifficultyStyle(drill.difficulty)}>
                      {drill.difficulty || 'Not specified'}
                    </span>
                  </div>
                  
                  {drill.tags && drill.tags.length > 0 && (
                    <div style={styles.tagsContainer}>
                      <span style={styles.tagsLabel}>Tags:</span>
                      {drill.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} style={styles.tag}>
                          {tag}
                        </span>
                      ))}
                      {drill.tags.length > 3 && (
                        <span style={styles.tag}>+{drill.tags.length - 3} more</span>
                      )}
                    </div>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;