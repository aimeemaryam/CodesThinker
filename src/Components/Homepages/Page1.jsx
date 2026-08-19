import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const slidesData = [
  {
    title: "Welcome to ",
    highlight: "Codes Thinker",
    description: "We craft smart, user-friendly digital solutions that help businesses innovate and grow.",
    bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Welcome to ",
    highlight: "Codes Thinker",
    description: "We craft smart, user-friendly digital solutions that help businesses innovate and grow.",
    bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Welcome to ",
    highlight: "Codes Thinker",
    description: "We craft smart, user-friendly digital solutions that help businesses innovate and grow.",
    bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
  }
];

const SlideContent = ({ slide }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div style={{
      width: '100%',
      minHeight: '96vh',
      backgroundImage: `linear-gradient(rgba(11, 15, 38, 0.75), rgba(11, 15, 38, 0.75)), url("${slide.bgImage}")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      padding: '20px'
    }}>
      {/* Content Container */}
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          transition: 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
          transform: isHovered ? 'scale(1.03)' : 'scale(1)',
          willChange: 'transform',
          backfaceVisibility: 'hidden',
          cursor: 'pointer'
        }}
      >
        <h1 style={{ fontSize: '48px', fontWeight: 'bold', marginBottom: '16px' }}>
          {slide.title}<span style={{ color: '#3b82f6' }}>{slide.highlight}</span>
        </h1>
        
        <p style={{ fontSize: '20px', maxWidth: '600px', marginBottom: '32px' }}>
          {slide.description}
        </p>

        <div style={{ display: 'flex', gap: '16px' }}>
          <button style={{
            backgroundColor: '#2563eb',
            color: 'white',
            border: 'none',
            padding: '12px 28px',
            borderRadius: '50px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            View Our Work
          </button>

          <button style={{
            backgroundColor: 'transparent',
            color: 'white',
            border: '2px solid white',
            padding: '12px 28px',
            borderRadius: '50px',
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

const Page1 = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      loop={true}
      speed={400} // Fast transition speed between slides
      autoplay={{
        delay: 2000, // Moves to next slide every 2 seconds
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      style={{
        width: '100%',
        minHeight: '96vh',
        '--swiper-pagination-color': '#3b82f6',
        '--swiper-pagination-bullet-inactive-color': '#ffffff',
        '--swiper-pagination-bullet-inactive-opacity': '0.5',
        '--swiper-wrapper-transition-timing-function': 'cubic-bezier(0.25, 1, 0.5, 1)' // Sharp, distinct slide motion
      }}
    >
      {slidesData.map((slide, index) => (
        <SwiperSlide key={index}>
          <SlideContent slide={slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Page1;