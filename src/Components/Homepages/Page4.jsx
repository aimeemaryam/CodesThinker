import React, { useState } from 'react';
import image4 from '../../assets/image4.webp'

const Page4 = () => {
  // Active category tab state
  const [activeTab, setActiveTab] = useState('Development');
  // State for hover effect on non-development tabs
  const [hoveredTab, setHoveredTab] = useState(null);

  // Side navigation categories
  const categories = [
    'Development',
    'Management',
    'Marketing',
    'Graphics & Visuals',
    'Video Editing',
    'Content Writing',
  ];

  // Sub-services display list
  const subServices = [
    'Custom Development',
    'Web App Development',
    'Mobile App Development',
    'Blockchain Dev',
    'Crypto Token Dev',
    'Wordpress Dev',
  ];

  const customGradient = 'linear-gradient(90deg, #0b0654, #4169E1)';

  return (
    <section className="min-h-screen bg-white py-12 px-4 md:px-12 font-sans text-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Header Title Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            <span
              style={{
                background: customGradient,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Services
            </span>{' '}
            We Offer
          </h1>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            TOJO GLOBAL offers crypto solutions, targeted marketing, impactful design, custom
            development, and professional video editing to elevate your brand.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Category Pills */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {categories.map((category) => {
              const isActive = activeTab === category;
              const isDevelopment = category === 'Development';
              const isHovered = hoveredTab === category && !isDevelopment;

              return (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  onMouseEnter={() => setHoveredTab(category)}
                  onMouseLeave={() => setHoveredTab(null)}
                  style={{
                    background: isActive || isHovered ? customGradient : '#ffffff',
                  }}
                  className={`w-full py-3.5 px-6 rounded-full font-bold text-center transition-all duration-300 border ${
                    isActive || isHovered
                      ? 'text-white border-transparent shadow-md'
                      : 'border-slate-200 text-slate-900 shadow-sm'
                  } ${
                    !isDevelopment ? 'hover:shadow-lg hover:-translate-y-0.5' : ''
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

          {/* Right Column: Hero Image & Sub-services */}
          <div className="lg:col-span-8 flex flex-col gap-8">
            {/* Banner Image with safe height styling */}
            <div 
              className="relative w-full rounded-3xl overflow-hidden shadow-sm"
              style={{ height: '350px' }}
            >
              <img
                src={image4}
                alt="Services Showcase"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Sub-services Tags */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-4 pt-2">
              {subServices.map((service) => (
                <div key={service} className="text-center">
                  <span className="font-bold text-slate-900 text-sm md:text-base hover:text-blue-700 cursor-pointer transition-colors">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page4;