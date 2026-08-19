import React, { useState } from 'react'
import { LuLightbulb } from 'react-icons/lu'
import { FiUsers, FiSettings, FiClock } from 'react-icons/fi'

const Page2 = () => {
  // Track which card is currently hovered
  const [hoveredId, setHoveredId] = useState(null)

  // Card data array
  const features = [
    {
      id: 1,
      icon: <LuLightbulb size={28} color="#ffffff" />,
      title: 'Custom Web Experiences',
    },
    {
      id: 2,
      icon: <FiUsers size={28} color="#ffffff" />,
      title: 'Innovative UI/UX Design',
    },
    {
      id: 3,
      icon: <FiSettings size={28} color="#ffffff" />,
      title: 'Scalable Tech Solutions',
    },
    {
      id: 4,
      icon: <FiClock size={28} color="#ffffff" />,
      title: '24/7 Support & Maintenance',
    },
  ]

  return (
    <div style={{
      marginTop : '6vh',
      marginBottom : '6vh',
      width: '100%',
      minHeight: '60vh',
      backgroundColor: '#ebf4ff', // Light blue section background
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '60px 20px',
      boxSizing: 'border-box',
      fontFamily: "'Segoe UI', Roboto, sans-serif"
    }}>
      {/* Title Heading */}
      <h2 style={{
        fontSize: '36px',
        fontWeight: '800',
        color: '#0b1354',
        marginBottom: '50px',
        textAlign: 'center'
      }}>
        What Makes Us Stand Out?
      </h2>

      {/* Cards Container */}
      <div style={{
        display: 'flex',
        gap: '40px',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        maxWidth: '1100px',
        width: '100%'
      }}>
        {features.map((item) => {
          const isHovered = hoveredId === item.id

          return (
            <div 
              key={item.id}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                width: '235px',
                height: '220px',
                borderRadius: '24px',
                // Changes background to deep blue on hover
                backgroundColor: isHovered ? '#1000a8' : '#ffffff',
                color: isHovered ? '#ffffff' : '#000000',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '24px',
                boxSizing: 'border-box',
                textAlign: 'center',
                transform: isHovered ? 'translateY(-8px)' : 'translateY(0px)',
                boxShadow: isHovered 
                  ? '0 15px 30px rgba(16, 0, 168, 0.25)' 
                  : '0 15px 35px rgba(0, 0, 0, 0.15)',
                 
                transition: 'all 0.3s cubic-bezier(0.25, 1, 0.5, 1)',
                cursor: 'pointer',
              }}
            >
              {/* Circular Icon Wrapper */}
              <div style={{
                width: '65px',
                height: '65px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #0088ff, #0055ff)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
                boxShadow: '0 6px 15px rgba(0, 119, 255, 0.3)'
              }}>
                {item.icon}
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: '18px',
                fontWeight: '700',
                lineHeight: '1.4',
                margin: 0
              }}>
                {item.title}
              </h3>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Page2
