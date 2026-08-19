import React from 'react';
import hostingImg from '../../assets/hosting.webp'; // Adjust the image path to match your asset structure

const WebsiteHosting = () => {
  // Data for "Why Choose Us" cards matching the image content
  const features = [
    {
      id: 1,
      title: "High uptime",
      description: "Our high uptime service is designed to exceed expectations.",
    },
    {
      id: 2,
      title: "SSL certificates",
      description: "Our ssl certificates service is designed to exceed expectations.",
    },
    {
      id: 3,
      title: "Fast servers",
      description: "Our fast servers service is designed to exceed expectations.",
    },
    {
      id: 4,
      title: "24/7 support",
      description: "Our 24/7 support service is designed to exceed expectations.",
    },
    {
      id: 5,
      title: "Backup & recovery",
      description: "Our backup & recovery service is designed to exceed expectations.",
    },
  ];

  return (
    <div className="bg-white py-12 mt-16 px-6 md:px-12 lg:px-20 mb-[6vh]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Top Hero Detail Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Image Container */}
          <div className="w-full h-auto rounded-3xl overflow-hidden shadow-lg bg-[#050038]">
            <img
              src={hostingImg}
              alt="Website Hosting Detail"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Column - Text Details */}
          <div className="flex flex-col justify-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-black tracking-tight">
              Website Hosting
            </h1>

            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              We provide dependable web hosting solutions with fast servers, regular backups, SSL security, and expert support. Whether shared, VPS, or cloud hosting, we ensure your website stays online and performs at its best.
            </p>
          </div>

        </div>

        {/* Bottom "Why Choose Us" Section */}
        <div className="space-y-8 pt-6">
          
          {/* Section Heading */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-black mb-2">
              Why Choose Us for Website Hosting?
            </h2>
            <p className="text-gray-600 text-base">
              We offer expert-level website hosting services with results that speak for themselves.
            </p>
          </div>

          {/* Feature Blue Gradient Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-gradient-to-r from-[#0d3b82] to-[#124e96] text-white p-6 md:p-8 rounded-2xl transition-all duration-400 ease-in-out hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(25,118,210,0.5)]"
              >
                <h3 className="text-xl md:text-2xl font-bold mb-3">
                  {feature.title}
                </h3>
                <p className="text-blue-100 text-sm md:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};

export default WebsiteHosting;