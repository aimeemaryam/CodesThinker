import React from 'react'
import aboutImg from '../../assets/image3.webp' // Adjust relative path based on where Page3.jsx is located
import image5 from '../../assets/image5.webp';

const Page3 = () => {
  // Features list with bullet points
  const points = [
    "Industry Expert Staff",
    "Client-Centric Focus",
    "Partner rather than Vendor",
    "Solutions Geared to Improve Productivity",
    "Collaborative Approach Throughout the Process"
  ]

  return (
    <div style={{
      width: '100%',
      minHeight: '90vh',
      backgroundColor: '#ebf5ff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '60px 40px',
      boxSizing: 'border-box',
      fontFamily: "'Segoe UI', Roboto, sans-serif",
      marginBottom : '6vh',
    }}>
      {/* Main Container */}
      <div style={{
        maxWidth: '1200px',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '40px',
        flexWrap: 'wrap'
      }}>
        
        {/* Left Side: Content & Feature List */}
        <div style={{ flex: '1 1 500px', maxWidth: '600px' }}>
          <h1 style={{
            fontSize: '44px',
            fontWeight: '800',
            color: '#000000',
            marginBottom: '16px',
            lineHeight: '1.2'
          }}>
            About <span style={{ color: '#1a237e' }}>Code's</span> Thinker
          </h1>

          <p style={{
            fontSize: '18px',
            color: '#333333',
            marginBottom: '32px',
            fontWeight: '400'
          }}>
            We redefine excellence in business solution at Code's Thinker...
          </p>

          {/* Pill Bullets List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {points.map((text, index) => (
              <div 
                key={index}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '12px',
                  backgroundColor: 'transparent',
                  padding: '6px 24px 6px 14px',
                  borderRadius: '50px',
                  width: 'fit-content',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.12)',
                }}
              >
                {/* Purple-Blue Gradient Dot */}
                <span style={{
                  width: '14px',
                  height: '10px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #6366f1, #3b82f6)',
                  display: 'inline-block',
                  flexShrink: 0
                }} />

                {/* Text */}
                <span style={{
                  fontSize: '17px',
                  fontWeight: '600',
                  color: '#1e293b'
                }}>
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side: Image */}
        <div style={{ flex: '1 1 620px', maxWidth: '680px' }}>
          <img 
            src={aboutImg} 
            alt="About Code's Thinker Team" 
            style={{
              width: '100%',
              height: 'auto',
              maxHeight: '420px',
              objectFit: 'cover',
              borderRadius: '6px',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)'
            }}
          />
        </div>

      </div>
    </div>
  )
}

export default Page3