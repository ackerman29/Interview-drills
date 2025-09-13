import React from 'react';
import { Link } from 'react-router-dom';
import { getDifficultyStyle } from './styles';

const DrillCard = ({ drill, hoveredCard, setHoveredCard }) => {
  return (
    <Link
      to={`/drill/${drill._id}`}
      style={{
        position: 'relative',
        background: 'rgba(0,0,0,0.05)',
        backdropFilter: 'blur(15px)',
        border: 'none',
        borderRadius: '20px',
        padding: '2rem',
        boxShadow: hoveredCard === drill._id ? '0 25px 50px rgba(0,0,0,0.15)' : '0 15px 35px rgba(0,0,0,0.08)',
        transform: hoveredCard === drill._id ? 'translateY(-8px) scale(1.02)' : 'none',
        transition: 'all 0.3s ease',
        cursor: 'pointer',
        textDecoration: 'none',
        color: 'inherit',
        display: 'block',
      }}
      onMouseEnter={() => setHoveredCard(drill._id)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(220,38,38,0.1), rgba(168,85,247,0.1))',
          borderRadius: '20px',
          opacity: hoveredCard === drill._id ? 1 : 0,
          transition: 'opacity 0.3s ease',
          zIndex: -1,
        }}
      ></div>

      <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1f2937', marginBottom: '1rem', lineHeight: 1.3 }}>
        {drill.title}
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#6b7280' }}>Difficulty:</span>
          <span style={getDifficultyStyle(drill.difficulty)}>{drill.difficulty || 'Not specified'}</span>
        </div>

        {drill.tags && drill.tags.length > 0 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#6b7280', minWidth: 'fit-content' }}>Tags:</span>
            {drill.tags.slice(0, 3).map((tag, index) => (
              <span key={index} style={{ background: 'rgba(220,38,38,0.1)', color: '#dc2626', padding: '0.25rem 0.5rem', borderRadius: '12px', fontSize: '0.75rem', fontWeight: '500' }}>
                {tag}
              </span>
            ))}
            {drill.tags.length > 3 && <span style={{ background: 'rgba(220,38,38,0.1)', color: '#dc2626', padding: '0.25rem 0.5rem', borderRadius: '12px', fontSize: '0.75rem', fontWeight: '500' }}>+{drill.tags.length - 3} more</span>}
          </div>
        )}
      </div>
    </Link>
  );
};

export default DrillCard;
