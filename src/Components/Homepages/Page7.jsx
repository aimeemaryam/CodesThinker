import React, { useState } from 'react';

const Page7 = () => {
  const statsData = [
    { number: '4+', label: 'Years of Experience' },
    { number: '50+', label: 'Satisfied Clients' },
    { number: '17+', label: 'Countries We Operate' },
    { number: '$200K+', label: 'Managed Marketing Fund' },
    { number: '$2.9M+', label: 'Clients Gain' },
  ];

  // Track hovered card index
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const styles = {
    container: {
      minHeight: '75vh',
      backgroundColor: '#F3F4F6',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '80px 40px',
      boxSizing: 'border-box',
    },
    headerWrapper: {
      textAlign: 'center',
      maxWidth: '780px',
      marginBottom: '60px',
    },
    title: {
      fontSize: '48px',
      fontWeight: '800',
      color: '#000000',
      margin: '0 0 20px 0',
      lineHeight: '1.2',
    },
    highlightedText: {
      color: '#0b0261',
    },
    description: {
      fontSize: '18px',
      color: '#555555',
      lineHeight: '1.6',
      margin: 0,
    },
    cardsGrid: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '22px',
      width: '100%',
      maxWidth: '1200px',
      flexWrap: 'wrap',
    },
    card: {
      flex: '1 1 200px',
      height: '190px',
      background: 'linear-gradient(180deg, #2b45b5 0%, #0c1445 100%)',
      borderRadius: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '24px 16px',
      boxSizing: 'border-box',
      textAlign: 'center',
      boxShadow: '0 10px 30px rgba(11, 2, 97, 0.25)',
      transition: 'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
      cursor: 'pointer',
      willChange: 'transform',
    },
    statNumber: {
      fontSize: '44px',
      fontWeight: '800',
      color: '#ffffff',
      margin: '0 0 12px 0',
      letterSpacing: '-0.5px',
    },
    statLabel: {
      fontSize: '15px',
      fontWeight: '500',
      color: '#ffffff',
      opacity: 0.9,
      margin: 0,
      lineHeight: '1.3',
    },
  };

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <div style={styles.headerWrapper}>
        <h1 style={styles.title}>
          Our <span style={styles.highlightedText}>Progress</span>
        </h1>
        <p style={styles.description}>
          TOJO GLOBAL connects your business directly to your target audience, eliminating
          the need to search for clients. With us, they'll find their way to you.
        </p>
      </div>

      {/* Stats Cards Section */}
      <div style={styles.cardsGrid}>
        {statsData.map((stat, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              ...styles.card,
              transform: hoveredIndex === index ? 'scale(1.06) translateY(-5px)' : 'scale(1) translateY(0)',
              boxShadow: hoveredIndex === index ? '0 18px 35px rgba(11, 2, 97, 0.4)' : styles.card.boxShadow,
            }}
          >
            <h2 style={styles.statNumber}>{stat.number}</h2>
            <p style={styles.statLabel}>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page7;