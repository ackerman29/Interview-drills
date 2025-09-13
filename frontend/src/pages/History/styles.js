export const styles = {
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
    top: '10%',
    left: '8%',
    width: '280px',
    height: '280px',
    background: 'radial-gradient(circle, rgba(239, 68, 68, 0.06) 0%, transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(60px)',
    animation: 'pulse 5s ease-in-out infinite',
  },
  backgroundBlob2: {
    position: 'absolute',
    top: '60%',
    right: '12%',
    width: '220px',
    height: '220px',
    background: 'radial-gradient(circle, rgba(34, 197, 94, 0.08) 0%, transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(60px)',
    animation: 'pulse 5s ease-in-out infinite 2s',
  },
  backgroundBlob3: {
    position: 'absolute',
    bottom: '20%',
    left: '25%',
    width: '180px',
    height: '180px',
    background: 'radial-gradient(circle, rgba(200, 200, 200, 0.1) 0%, transparent 70%)',
    borderRadius: '50%',
    filter: 'blur(60px)',
    animation: 'pulse 5s ease-in-out infinite 3s',
  },
  floatingDots: {
    position: 'absolute',
    width: '8px',
    height: '8px',
    background: 'rgba(0, 0, 0, 0.06)',
    borderRadius: '50%',
    animation: 'float 7s ease-in-out infinite',
  },
  contentContainer: {
    position: 'relative',
    zIndex: 10,
    maxWidth: '1000px',
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
    background: 'linear-gradient(135deg, #22c55e, #dc2626)',
    borderRadius: '24px',
    filter: 'blur(40px)',
    opacity: 0.15,
    zIndex: -1,
  },
  title: {
    fontSize: 'clamp(2rem, 6vw, 3rem)',
    fontWeight: '900',
    background: 'linear-gradient(135deg, #22c55e 0%, #ec4899 50%, #dc2626 100%)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    margin: 0,
    lineHeight: 1.2,
  },
  tableContainer: {
    background: 'rgba(0, 0, 0, 0.04)',
    backdropFilter: 'blur(15px)',
    border: 'none',
    borderRadius: '20px',
    padding: '2rem',
    boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
    overflow: 'hidden',
  },
  table: {
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: 0,
  },
  tableHeader: {
    background: 'rgba(0, 0, 0, 0.08)',
    backdropFilter: 'blur(10px)',
  },
  tableHeaderCell: {
    padding: '1.5rem 1rem',
    fontSize: '1rem',
    fontWeight: '700',
    color: '#1f2937',
    textAlign: 'left',
    borderBottom: '2px solid rgba(0, 0, 0, 0.05)',
  },
  tableHeaderCellFirst: {
    borderTopLeftRadius: '12px',
  },
  tableHeaderCellLast: {
    borderTopRightRadius: '12px',
  },
  tableRow: {
    background: 'rgba(255, 255, 255, 0.3)',
    backdropFilter: 'blur(8px)',
    transition: 'all 0.3s ease',
  },
  tableRowHover: {
    background: 'rgba(0, 0, 0, 0.05)',
    transform: 'scale(1.01)',
  },
  tableCell: {
    padding: '1.25rem 1rem',
    fontSize: '1rem',
    color: '#374151',
    borderBottom: '1px solid rgba(0, 0, 0, 0.05)',
  },
  tableCellFirst: {
    fontWeight: '600',
    color: '#1f2937',
  },
  scoreBadge: {
    display: 'inline-block',
    padding: '0.5rem 1rem',
    borderRadius: '20px',
    fontWeight: '700',
    fontSize: '0.95rem',
    textAlign: 'center',
    minWidth: '60px',
  },
  dateText: {
    color: '#6b7280',
    fontSize: '0.9rem',
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
    padding: '1.5rem 2.5rem',
    borderRadius: '16px',
    textAlign: 'center',
  },
  emptyState: {
    textAlign: 'center',
    padding: '4rem 2rem',
    background: 'rgba(0, 0, 0, 0.03)',
    borderRadius: '20px',
  },
  emptyStateText: {
    fontSize: '1.25rem',
    color: '#6b7280',
    fontWeight: '500',
    marginBottom: '1rem',
  },
  emptyStateSubtext: {
    fontSize: '1rem',
    color: '#9ca3af',
  },
};

export const getScoreStyle = (score) => {
  const baseStyle = styles.scoreBadge;
  if (score >= 80) {
    return { ...baseStyle, background: 'rgba(34, 197, 94, 0.15)', color: '#059669' };
  } else if (score >= 60) {
    return { ...baseStyle, background: 'rgba(245, 158, 11, 0.15)', color: '#d97706' };
  } else {
    return { ...baseStyle, background: 'rgba(239, 68, 68, 0.15)', color: '#dc2626' };
  }
};
