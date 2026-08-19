import React from 'react';
import { FaHandshake, FaShieldAlt, FaAward } from 'react-icons/fa'
import image5 from '../../assets/image5.webp';

const Page6 = () => {
  const valuesData = [
    {
      title: 'Integrity',
      description: 'We hold ourselves to a strong ethical and moral code.',
      icon: <FaHandshake />,
    },
    {
      title: 'Trust',
      description: 'We are dependable, loyal, and hardworking to achieve the same goal.',
      icon: <FaShieldAlt />,
    },
    {
      title: 'Excellence',
      description: 'We consistently strive to deliver high-quality work without room for error.',
      icon: <FaAward />,
    },
  ];

  const styles = {
    container: {
      minHeight: '90vh',
      backgroundColor: '#f8f9fa',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '60px 40px',
      boxSizing: 'border-box',
    },
    wrapper: {
      maxWidth: '1240px',
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '60px',
    },
    leftContent: {
      flex: '1 1 500px',
      display: 'flex',
      flexDirection: 'column',
    },
    headerGroup: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '32px',
    },
    mainTitle: {
      fontSize: '42px',
      fontWeight: '800',
      color: '#000000',
      letterSpacing: '0.5px',
      margin: 0,
      textTransform: 'uppercase',
      lineHeight: '1.1',
    },
    highlightedText: {
      color: '#0b0261',
    },
    underLine: {
      width: '70px',
      height: '4px',
      backgroundColor: '#0b0261',
      marginTop: '8px',
      marginBottom: '20px',
      borderRadius: '2px',
    },
    subtitle: {
      fontSize: '30px',
      fontWeight: '700',
      color: '#000000',
      margin: 0,
      lineHeight: '1.25',
      letterSpacing: '-0.2px',
    },
    valuesList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
    },
    valueItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px',
    },
    iconContainer: {
      width: '60px',
      height: '60px',
      borderRadius: '10px',
      background: 'linear-gradient(135deg, #0b0261 0%, #030030 100%)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#ffffff',
      fontSize: '26px',
      flexShrink: 0,
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
    },
    textGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '4px',
    },
    itemTitle: {
      fontSize: '20px',
      fontWeight: '700',
      color: '#000000',
      margin: 0,
      lineHeight: '1.2',
    },
    itemDesc: {
      fontSize: '15px',
      fontWeight: '400',
      color: '#333333',
      margin: 0,
      lineHeight: '1.45',
      maxWidth: '420px',
    },
    // Clips the outer grey box from the image asset and sizes the element
    rightImageWrapper: {
      flex: '1 1 500px',
      // Decreased maxWidth and height to make the image smaller
      maxWidth: '480px', 
      height: '280px', 
      borderRadius: '24px',
      overflow: 'hidden', // Required for the clipping effect
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      // Optional: adds a wrapper shadow if preferred over the inner image shadow
      // boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)', 
    },
    imageStyle: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      // Maintains clipping while adding a shadow to the image content itself
      transform: 'scale(1.18)', 
      display: 'block',
      borderRadius: '24px', // Matches wrapper rounding
      // New: Drop shadow on the clipped image content
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        {/* Left Column */}
        <div style={styles.leftContent}>
          <div style={styles.headerGroup}>
            <h1 style={styles.mainTitle}>
              OUR <span style={styles.highlightedText}>VALUE</span>
            </h1>
            <div style={styles.underLine}></div>
            <h2 style={styles.subtitle}>
              A melting pot for the best <br /> ideas
            </h2>
          </div>

          <div style={styles.valuesList}>
            {valuesData.map((item, index) => (
              <div key={index} style={styles.valueItem}>
                <div style={styles.iconContainer}>
                  {item.icon}
                </div>
                <div style={styles.textGroup}>
                  <h3 style={styles.itemTitle}>{item.title}</h3>
                  <p style={styles.itemDesc}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Image (Cropped via Container) */}
        <div style={styles.rightImageWrapper}>
          <img 
            src={image5} 
            alt="Our Values" 
            style={styles.imageStyle} 
          />
        </div>
      </div>
    </div>
  );
};

export default Page6;