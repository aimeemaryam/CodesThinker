import React from 'react';
import { Link } from 'react-router-dom'; // 1. Import Link from react-router-dom
import servicesHeroImg from '../../assets/services1.webp';

const Services1 = () => {
  return (
    <section className="bg-white min-h-[86vh] flex items-center justify-center px-6 py-12 md:px-16 lg:px-24 mb-[6vh]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column - Text Content */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-black tracking-tight leading-tight">
            Perfect It <span className="text-[#251bc8]">Solutions</span> <br />
            Business
          </h1>

          <p className="text-gray-700 leading-relaxed text-base md:text-lg max-w-xl">
            Perfect IT Solutions provides expert services in software development, IT consulting,
            cloud solutions, network security, data management, technical support, web design,
            and system integration to empower business growth and efficiency.
          </p>

          {/* 2. Updated Button to Link */}
          <div className="pt-2">
            <Link 
              to="/contact" 
              className="inline-block bg-[#0a0580] hover:bg-[#1f17b3] text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Right Column - Hero Graphic/Image */}
        <div className="w-full flex justify-center items-center">
          <img
            src={servicesHeroImg}
            alt="Perfect IT Solutions Graphic"
            className="w-full max-w-lg h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Services1;