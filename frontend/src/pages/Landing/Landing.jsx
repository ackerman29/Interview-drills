import React from "react";
import { useLanding } from "./useLanding";
import { styles } from "./styles";

const Landing = () => {
  const { buttonHovered, setButtonHovered, titleHovered, setTitleHovered } = useLanding();

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

      {/* Background blobs */}
      <div style={styles.backgroundBlob1}></div>
      <div style={styles.backgroundBlob2}></div>

      {/* Floating dots */}
      <div style={{...styles.floatingDots, top: '25%', left: '15%', animationDelay: '0s'}}></div>
      <div style={{...styles.floatingDots, top: '70%', right: '20%', animationDelay: '2s'}}></div>
      <div style={{...styles.floatingDots, bottom: '30%', left: '25%', animationDelay: '4s'}}></div>

      <div style={styles.contentContainer}>
        {/* Title */}
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

        {/* Description + Button */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "2rem" }}>
          <div style={styles.descriptionCard}>
            <p style={styles.description}>
              Sharpen your skills with quick, interactive interview practice.
            </p>
          </div>

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
