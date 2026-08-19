import React, { useState } from 'react';
import { 
  FaSitemap, 
  FaHandshake, 
  FaLock, 
  FaRocket, 
  FaExchangeAlt, 
  FaLightbulb 
} from 'react-icons/fa';

const Page5 = () => {
  // Track hovered state for center circle
  const [isCircleHovered, setIsCircleHovered] = useState(false);
  
  // Track hovered state for feature items by index
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const features = [
    { title: 'Blockchain Expertise', icon: <FaSitemap /> },
    { title: 'Small Business Support', icon: <FaHandshake /> },
    { title: 'Crypto Solutions', icon: <FaLock /> },
    { title: 'Startup Business', icon: <FaRocket /> },
    { title: 'B2B Integration', icon: <FaExchangeAlt /> },
    { title: 'Fintech Innovation', icon: <FaLightbulb /> },
  ];

  // Curve offsets (Center items bow outward away from the circle)
  const getOtherSideCurveOffset = (index) => {
    const offsets = [0, 35, 70, 70, 35, 0]; 
    return offsets[index] || 0;
  };

  // Inline styling objects
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '80vh',
      backgroundColor: '#f3f4f6',
      fontFamily: 'Arial, sans-serif',
      padding: '40px 20px',
      boxSizing: 'border-box',
    },
    wrapper: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      position: 'relative',
    },
    // Center Circle Dynamic Style
    centerCircle: {
      width: '300px',
      height: '300px',
      borderRadius: '50%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      cursor: 'pointer',
      transition: 'all 0.3s ease-in-out',
      background: isCircleHovered
        ? 'linear-gradient(135deg, #0b0261 0%, #030030 100%)'
        : '#f3f4f6',
      color: isCircleHovered ? '#ffffff' : '#000000',
      boxShadow: isCircleHovered
        ? '0 15px 30px rgba(11, 2, 97, 0.4)'
        : '0 10px 25px rgba(0, 0, 0, 0.12), inset 0 0 1px rgba(0,0,0,0.2)',
      // 1px border ONLY without hover
      border: isCircleHovered ? 'none' : '1px solid #000000',
      zIndex: 2,
    },
    circleText: {
      fontSize: '30px',
      fontWeight: 'bold',
      lineHeight: '1.2',
      letterSpacing: '1px',
      textTransform: 'uppercase',
    },
    // Features Container
    featuresList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    },
    // Feature Pill Card Dynamic Style
    featureCard: (isHovered, index) => ({
      display: 'flex',
      alignItems: 'center',
      width: '340px',
      height: '55px',
      borderRadius: '30px',
      padding: '4px',
      cursor: 'pointer',
      transform: `translateX(${getOtherSideCurveOffset(index)}px)`, 
      transition: 'all 0.3s ease-in-out',
      background: isHovered
        ? 'linear-gradient(90deg, #0b0261 0%, #030030 100%)'
        : '#ffffff',
      color: isHovered ? '#ffffff' : '#000000',
      boxShadow: isHovered
        ? '0 10px 20px rgba(11, 2, 97, 0.35)'
        : '0 6px 15px rgba(0, 0, 0, 0.12)',
      // 1px border ONLY without hover
      border: isHovered ? 'none' : '1px solid #000000',
    }),
    // Inner Circle for Icon
    iconCircle: (isHovered) => ({
      width: '47px',
      height: '47px',
      borderRadius: '50%',
      backgroundColor: isHovered ? 'black' : '#ffffff',
      color: isHovered ? '#ffffff' : '#000000',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '18px',
      border: isHovered ? '1.5px solid rgba(255, 255, 255, 0.6)' : '1px solid #000000',
      transition: 'all 0.3s ease-in-out',
      flexShrink: 0,
    }),
    // Card Label Text Style
    featureTitle: {
      fontSize: '17px',
      fontWeight: 'bold',
      textAlign: 'center',
      flexGrow: 1,
      paddingRight: '20px',
      userSelect: 'none',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        {/* Central Key Features Circle */}
        <div
          style={styles.centerCircle}
          onMouseEnter={() => setIsCircleHovered(true)}
          onMouseLeave={() => setIsCircleHovered(false)}
        >
          <div style={styles.circleText}>
            KEY <br /> FEATURES
          </div>
        </div>

        {/* Sidebars List */}
        <div style={styles.featuresList}>
          {features.map((item, index) => {
            const isHovered = hoveredIndex === index;
            return (
              <div
                key={index}
                style={styles.featureCard(isHovered, index)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div style={styles.iconCircle(isHovered)}>
                  {item.icon}
                </div>
                <span style={styles.featureTitle}>{item.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Page5;