import React from 'react';
import { useHistory } from './useHistory';
import { styles, getScoreStyle } from './styles';

const History = () => {
  const { attempts, loading, error, hoveredRow, setHoveredRow } = useHistory();

  if (loading) {
    return (
      <div style={styles.loadingContainer}>
        <p style={styles.loadingText}>Loading history...</p>
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
          50% { opacity: 0.7; transform: scale(1.03); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-18px) rotate(120deg); }
          66% { transform: translateY(8px) rotate(240deg); }
        }
      `}</style>

      {/* Background blobs */}
      <div style={styles.backgroundBlob1}></div>
      <div style={styles.backgroundBlob2}></div>
      <div style={styles.backgroundBlob3}></div>

      {/* Floating dots */}
      <div style={{...styles.floatingDots, top: '15%', left: '20%', animationDelay: '0s'}}></div>
      <div style={{...styles.floatingDots, top: '65%', right: '25%', animationDelay: '2s'}}></div>
      <div style={{...styles.floatingDots, bottom: '25%', left: '35%', animationDelay: '4s'}}></div>
      <div style={{...styles.floatingDots, top: '45%', right: '45%', animationDelay: '1s'}}></div>

      <div style={styles.contentContainer}>
        {/* Header */}
        <div style={styles.headerCard}>
          <div style={styles.titleGlow}></div>
          <h1 style={styles.title}>Drill History</h1>
        </div>

        {/* Table or Empty */}
        {attempts.length === 0 ? (
          <div style={styles.emptyState}>
            <p style={styles.emptyStateText}>No attempts yet</p>
            <p style={styles.emptyStateSubtext}>
              Complete your first drill to see your history here
            </p>
          </div>
        ) : (
          <div style={styles.tableContainer}>
            <table style={styles.table}>
              <thead style={styles.tableHeader}>
                <tr>
                  <th style={{...styles.tableHeaderCell, ...styles.tableHeaderCellFirst}}>Drill ID</th>
                  <th style={styles.tableHeaderCell}>Score</th>
                  <th style={{...styles.tableHeaderCell, ...styles.tableHeaderCellLast}}>Completed At</th>
                </tr>
              </thead>
              <tbody>
                {attempts.map((attempt, index) => (
                  <tr
                    key={attempt._id}
                    style={{
                      ...styles.tableRow,
                      ...(hoveredRow === index ? styles.tableRowHover : {})
                    }}
                    onMouseEnter={() => setHoveredRow(index)}
                    onMouseLeave={() => setHoveredRow(null)}
                  >
                    <td style={{...styles.tableCell, ...styles.tableCellFirst}}>
                      {attempt.drillId}
                    </td>
                    <td style={styles.tableCell}>
                      <span style={getScoreStyle(attempt.score)}>{attempt.score}%</span>
                    </td>
                    <td style={styles.tableCell}>
                      <span style={styles.dateText}>
                        {new Date(attempt.createdAt).toLocaleString()}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
