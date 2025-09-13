import React from "react";

const Landing = () => {
  const styles = {
  container: {
    minHeight: "100vh",
    width: "100%", 
    background:
      "linear-gradient(135deg, #ffffffff 0%, #ffffffff 50%, #ffffffff 100%)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
  },
    backgroundBlob1: {
      position: 'absolute',
      top: '20%',
      left: '20%',
      width: '300px',
      height: '300px',
      background: 'radial-gradient(circle, rgba(59, 0, 0, 0.3) 0%, transparent 70%)',
      borderRadius: '50%',
      filter: 'blur(60px)',
      animation: 'pulse 4s ease-in-out infinite',
    },
    backgroundBlob2: {
      position: 'absolute',
      bottom: '20%',
      right: '20%',
      width: '250px',
      height: '250px',
      background: 'radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%)',
      borderRadius: '50%',
      filter: 'blur(60px)',
      animation: 'pulse 4s ease-in-out infinite 2s',
    },
    contentContainer: {
      position: 'relative',
      zIndex: 10,
      textAlign: 'center',
      padding: '0 1rem',
      maxWidth: '900px',
    },
    titleCard: {
      position: 'relative',
      marginBottom: '4rem',
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '24px',
      padding: '3rem 2rem',
      boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
      transition: 'transform 0.3s ease',
      cursor: 'pointer',
    },
    titleCardHover: {
      transform: 'scale(1.05)',
    },
    titleGlow: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(135deg, #ffffffff, #ffffffff)',
      borderRadius: '24px',
      filter: 'blur(30px)',
      opacity: 0.6,
      zIndex: -1,
    },
    title: {
      fontSize: 'clamp(2.5rem, 8vw, 5rem)',
      fontWeight: '900',
      background: 'linear-gradient(135deg, #f87171 0%, #ec4899 50%, #a855f7 100%)',
      backgroundClip: 'text',
      WebkitBackgroundClip: 'text',
      color: 'transparent',
      margin: 0,
      lineHeight: 1.1,
    },
    descriptionCard: {
      marginBottom: '3rem',
      background: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(15px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '16px',
      padding: '1.5rem 2rem',
      display: 'inline-block',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
    },
    description: {
      fontSize: '1.25rem',
      color: '#000000ff',
      fontWeight: '500',
      margin: 0,
      lineHeight: 1.6,
    },
    buttonContainer: {
      position: 'relative',
      display: 'inline-block',
    },
    buttonGlow: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
      borderRadius: '12px',
      filter: 'blur(20px)',
      opacity: 0.8,
      zIndex: -1,
    },
    button: {
      position: 'relative',
      background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
      border: '1px solid rgba(239, 68, 68, 0.5)',
      borderRadius: '12px',
      padding: '1rem 2.5rem',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '1.125rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)',
    },
    buttonHover: {
      transform: 'translateY(-4px) scale(1.05)',
      background: 'linear-gradient(135deg, #b91c1c, #991b1b)',
      boxShadow: '0 25px 50px rgba(0, 0, 0, 0.6)',
    },
    floatingDots: {
      position: 'absolute',
      width: '12px',
      height: '12px',
      background: 'rgba(255, 255, 255, 0.2)',
      borderRadius: '50%',
      animation: 'float 6s ease-in-out infinite',
    }
  };

  const [buttonHovered, setButtonHovered] = React.useState(false);
  const [titleHovered, setTitleHovered] = React.useState(false);

  return (
    <div style={styles.container}>
      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.1); }
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
      
      {/* Floating dots */}
      <div style={{...styles.floatingDots, top: '25%', left: '15%', animationDelay: '0s'}}></div>
      <div style={{...styles.floatingDots, top: '70%', right: '20%', animationDelay: '2s'}}></div>
      <div style={{...styles.floatingDots, bottom: '30%', left: '25%', animationDelay: '4s'}}></div>

      <div style={styles.contentContainer}>
        {/* Title Section */}
        <div 
          style={{
            ...styles.titleCard,
            ...(titleHovered ? styles.titleCardHover : {})
          }}
          onMouseEnter={() => setTitleHovered(true)}
          onMouseLeave={() => setTitleHovered(false)}
        >
          <div style={styles.titleGlow}></div>
          <h1 style={styles.title}>Mini Interview Drills</h1>
        </div>

        {/* Description and Button together */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem" }}>
  <div style={styles.descriptionCard}>
    <p style={styles.description}>
      Sharpen your skills with quick, interactive interview practice.
    </p>
  </div>

  {/* Button positioned below description */}
  <div style={styles.buttonContainer}>
    <div style={styles.buttonGlow}></div>
    <a href="http://localhost:4000/auth/google" style={{ textDecoration: "none" }}>
      <button
        style={{
          ...styles.button,
          ...(buttonHovered ? styles.buttonHover : {}),
        }}
        onMouseEnter={() => setButtonHovered(true)}
        onMouseLeave={() => setButtonHovered(false)}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          {/* Google SVG paths */}
        </svg>
        Sign in with Google
      </button>
    </a>
  </div>
</div>

      </div>
    </div>
  );
};

export default Landing;